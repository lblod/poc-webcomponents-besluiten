
# Zitting Feed Web Component

This project includes a custom LitElement component developed in TypeScript. The design, styling, and logic of this web component are inspired by the work done at https://github.com/lblod/frontend-burgernabije-besluitendatabank.git. This to ensure a cohesive design and facilitate future modifications.

The `zitting-feed` component presents a feed of `zittingen`. It fetches data from a SPARQL endpoint, processes the response, and subsequently renders a series of `zitting-card` components. Each `zitting-card` component includes a `zitting-card-details` component. This component fetches all associated `agendapunten` based on the `zitting` URI from the harvester's SPARQL endpoint and returns an overview of `agendapunten`. This overview renders a list of `decision-card` components. Each `decision-card` is composed of a `card-header`, `card-body`, `card-footer`, and `decision-card-details`. The `decision-card-details` further includes `decision-card-details-besluit` and `decision-card-details-voting` components, which display a link to the decision's PDF and the voting results, respectively.

## Properties

- `harvesterEndpoint` (String): The URL of the SPARQL endpoint to fetch data from (default: https://sint-lievens-houtem.lblod-local-dev.s.redhost.be/sparql)
- `height` (String): The height of the scrollable div
- `batchSize` (Number): The number of items to fetch in each batch (default: 10)
- `searchRange` (Number): The max-range to search for items (default: 100)
- `scrollOffset` (Number): The scroll offset in pixels to trigger the next batch fetch (default: 50)



## Demo

The "examples" folder contains two demos: one for `zitting-feed` and another for `decision-feed`.

The `zitting-feed` demo demonstrates the use of the `zitting-feed` web component. This demo can be viewed by navigating to the "examples" folder and opening the `index-zittingen.html` file in your browser. The `zitting-feed` component is incorporated into the page by including the bundled JavaScript file (`zitting-feed.bundled.js`).

The `decision-feed` demo, which is a simpler version, demonstrates the `decision-feed` web component that presents a feed of `agendapunten`. To view this demo, go to the "examples" folder and open the `index-agendapunten.html` file in your browser. The `decision-feed` component is integrated into the page by including the `decision-feed.bundled.js` bundled JavaScript file.


## Setup

Install dependencies:

```bash
npm i
```

## Build

This sample uses the TypeScript compiler to produce JavaScript that runs in modern browsers.

To build the JavaScript version of the component:

```bash
npm run build
```

To watch files and rebuild when the files are modified, run the following command in a separate shell:

```bash
npm run build:watch
```

Both the TypeScript compiler and lit-analyzer are configured to be very strict. You may want to change `tsconfig.json` to make them less strict.

## Testing

This sample uses modern-web.dev's
[@web/test-runner](https://www.npmjs.com/package/@web/test-runner) for testing. See the
[modern-web.dev testing documentation](https://modern-web.dev/docs/test-runner/overview) for
more information.

Tests can be run with the `test` script, which will run your tests against Lit's development mode (with more verbose errors) as well as against Lit's production mode:

```bash
npm test
```

For local testing during development, the `test:dev:watch` command will run your tests in Lit's development mode (with verbose errors) on every change to your source files:

```bash
npm test:watch
```

Alternatively the `test:prod` and `test:prod:watch` commands will run your tests in Lit's production mode.

## Dev Server

This sample uses modern-web.dev's [@web/dev-server](https://www.npmjs.com/package/@web/dev-server) for previewing the project without additional build steps. Web Dev Server handles resolving Node-style "bare" import specifiers, which aren't supported in browsers. It also automatically transpiles JavaScript and adds polyfills to support older browsers. See [modern-web.dev's Web Dev Server documentation](https://modern-web.dev/docs/dev-server/overview/) for more information.

To run the dev server and open the project in a new browser tab:

```bash
npm run serve
```

There is a development HTML file located at `/dev/index.html` that you can view at http://localhost:8000/dev/index.html. Note that this command will serve your code using Lit's development mode (with more verbose errors). To serve your code against Lit's production mode, use `npm run serve:prod`.



## Linting

Linting of TypeScript files is provided by [ESLint](eslint.org) and [TypeScript ESLint](https://github.com/typescript-eslint/typescript-eslint). In addition, [lit-analyzer](https://www.npmjs.com/package/lit-analyzer) is used to type-check and lint lit-html templates with the same engine and rules as lit-plugin.

The rules are mostly the recommended rules from each project, but some have been turned off to make LitElement usage easier. The recommended rules are pretty strict, so you may want to relax them by editing `.eslintrc.json` and `tsconfig.json`.

To lint the project run:

```bash
npm run lint
```

## Formatting

[Prettier](https://prettier.io/) is used for code formatting. It has been pre-configured according to the Lit's style. You can change this in `.prettierrc.json`.

Prettier has not been configured to run when committing files, but this can be added with Husky and `pretty-quick`. See the [prettier.io](https://prettier.io/) site for instructions.

## Static Site

This project includes a simple website generated with the [eleventy](https://11ty.dev) static site generator and the templates and pages in `/docs-src`. The site is generated to `/docs` and intended to be checked in so that GitHub pages can serve the site [from `/docs` on the master branch](https://help.github.com/en/github/working-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

To enable the site go to the GitHub settings and change the GitHub Pages &quot;Source&quot; setting to &quot;master branch /docs folder&quot;.</p>

To build the site, run:

```bash
npm run docs
```

To serve the site locally, run:

```bash
npm run docs:serve
```

To watch the site files, and re-build automatically, run:

```bash
npm run docs:watch
```

The site will usually be served at http://localhost:8000.

**Note**: The project uses Rollup to bundle and minify the source code for the docs site and not to publish to NPM. For bundling and minification, check the [Bundling and minification](#bundling-and-minification) section.

## Bundling and minification

As stated in the [static site generation](#static-site) section, the bundling and minification setup in the Rollup configuration in this project is there specifically for the docs generation.

We recommend publishing components as unoptimized JavaScript modules and performing build-time optimizations at the application level. This gives build tools the best chance to deduplicate code, remove dead code, and so on.

Please check the [Publishing best practices](https://lit.dev/docs/tools/publishing/#publishing-best-practices) for information on publishing reusable Web Components, and [Build for production](https://lit.dev/docs/tools/production/) for building application projects that include LitElement components, on the Lit site.
