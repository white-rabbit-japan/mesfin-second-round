# Content Management System

## 💻 Development

- Clone repository
- Ensure you have Node.js version 16 or greater installed
- Install dependencies with `yarn install`
- Run `yarn dev` to start a development server

The CMS is powered by [Sanity](https://sanity.io). View their documentation for more details.

## 🚀 Deployment

After making changes to the schema:

```bash
# Deploy changes to Sanity
yarn deploy
```

We have two [datasets](https://www.sanity.io/docs/datasets), `test` and `production`. The deploy is simple and we are still building out this infrastructure so you need to deploy each manually for now.

By default everything is setup to deploy to `test`:

```js
// sanity.cli.ts
import { defineCliConfig } from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'bmtkrwbn',
    dataset: 'test',
  },
})
```

For `production` simply replace `test` with `production`:

```js
// sanity.cli.ts
import { defineCliConfig } from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'bmtkrwbn',
    dataset: 'production', // previously 'test'
  },
})
```

Do not commit this `sanity.cli.ts` change to the repo.

You can view your changes on our [Sanity Studio dashboard](https://japanrabbitcom.sanity.studio/).
