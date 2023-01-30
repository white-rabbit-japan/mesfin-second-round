import loadScript from 'load-script'

export const redirectXHR = (redirections = []) => {
  const open = XMLHttpRequest.prototype.open
  XMLHttpRequest.prototype.open = function (...args) {
    if (typeof args[1] === 'string') {
      args[1] = redirections.reduce(
        (acc, r) => acc.replace(r.from, r.to),
        args[1]
      )
    }

    open.apply(this, args)
  }
}

export const initSegment = (config = {} as any, callback = () => {}) => {
  if (!config.id) {
    console.warn('Please enter a Segment.io tracking ID')
    return
  }

  // Create a queue, but don't obliterate an existing one!
  const analytics = (window.analytics = window.analytics || [])

  // If the real analytics.js is already on the page return.
  if (analytics.initialize) return window.analytics

  // If the snippet was invoked already show an error.
  if (analytics.invoked) {
    if (window.console && console.error) {
      console.error('Segment snippet included twice.')
    }
    return
  }

  // Invoked flag, to make sure the snippet
  // is never invoked twice.
  analytics.invoked = true

  // A list of the methods in Analytics.js to stub.
  const methods = [
    'trackSubmit',
    'trackClick',
    'trackLink',
    'trackForm',
    'pageview',
    'identify',
    'reset',
    'group',
    'track',
    'ready',
    'alias',
    'debug',
    'page',
    'once',
    'off',
    'on',
  ]

  // Define a factory to create stubs. These are placeholders
  // for methods in Analytics.js so that you never have to wait
  // for it to load to actually record data. The `method` is
  // stored as the first argument, so we can replay the data.
  const factory = function (method) {
    return function (...args) {
      if (config.debug) {
        // Debugging
        if (window.console && console.log) {
          console.log(
            `[Segment Analytics Debug]: ${method} method called with ${args.length} args`
          )
        }
      } else if (window.analytics.initialize) {
        // Real analytics is in place
        window.analytics[method].apply(window.analytics, args)
      } else {
        // Postpone execution until real analytics is loaded
        args.unshift(method)
        analytics.push(args)
        return analytics
      }
    }
  }

  // Add a version to keep track of what's in the wild.
  analytics.SNIPPET_VERSION = '4.0.0'

  // For each of our methods, generate a queueing stub.
  for (const key of methods) {
    analytics[key] = factory(key)
  }

  if (!config.debug) {
    const done = function (error) {
      if (error) {
        console.warn('Oops! Is not possible to load Segment Analytics script')
        return
      }

      const poll = setInterval(function () {
        if (!window.analytics || !window.analytics.initialize) {
          return
        }

        clearInterval(poll)

        // the callback is fired when window.analytics is available and before any other hit is sent
        callback && callback()
      }, 10)
    }

    loadScript(
      `https://cdn.segment.com/analytics.js/v1/${config.id}/analytics.min.js`,
      function (error) {
        if (error) {
          // Probably was blocked by AdBlockers. Fallback to our own proxy (check _redirects file):
          return loadScript(
            `/analytics/segment-cdn/analytics.js/v1/${config.id}/analytics.min.js`,
            done
          )
        }

        done(null)
      }
    )
  } else {
    // Still run the callback in debug mode.
    callback && callback()
  }

  return window.analytics
}
