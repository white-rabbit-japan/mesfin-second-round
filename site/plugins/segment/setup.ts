import { initSegment, redirectXHR } from './init'

const track = (event, payload) => {
  window.analytics.track(event, payload)
  !useRuntimeConfig().public.isProduction &&
    console.log('Track:', event, payload)
}

/**
 * @param {Function} createTracker The result of this function will be
 * added to `analytics.trackEvent`. Can be used to create custom event trackers.
 * @param {Object} options
 * @param {String} options.segmentId ID used to authenticate in Segment.io
 * @param {Boolean} options.debug Show extra logs in development
 * @param {Boolean} options XHR request for analytics will be redirected to avoid AdBlockers
 */
const setup = (
  createTracker = (track) => {},
  { segmentId = '', debug = false, redirectAnalytics = true } = {}
) => {
  const tracker = createTracker(track)

  const analytics =
    initSegment({ debug, id: segmentId }, () => {
      // Add custom events to real analytics in case it is used somewhere
      window.analytics.trackEvent = tracker
    }) || {}

  analytics.trackEvent = tracker
  if (useRuntimeConfig().public.isProduction) {
    redirectXHR([
      {
        from: /https?:\/\/api\.segment\.io/,
        to: '/analytics/segment',
      },
      {
        from: /^https?:\/\/api\.amplitude\.com/,
        to: '/analytics/amplitude',
      },
      {
        from: /^https?:\/\/api\.mixpanel\.com/,
        to: '/analytics/mixpanel',
      },
    ])
  }

  return analytics
}

export default setup
