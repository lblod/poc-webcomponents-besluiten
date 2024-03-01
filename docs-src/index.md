---
layout: page.11ty.cjs
title: <decision-feed> ⌲ Home
---

# &lt;decision-feed>

`<decision-feed>` is an awesome element. It's a great introduction to building web components with LitElement, with nice documentation site as well.

## As easy as HTML

<section class="columns">
  <div>

`<decision-feed>` is just an HTML element. You can it anywhere you can use HTML!

```html
<decision-feed></decision-feed>
```

  </div>
  <div>

<decision-feed></decision-feed>

  </div>
</section>

## Configure with attributes

<section class="columns">
  <div>

`<decision-feed>` can be configured with attributed in plain HTML.

```html
<decision-feed name="HTML"></decision-feed>
```

  </div>
  <div>

<decision-feed name="HTML"></decision-feed>

  </div>
</section>

## Declarative rendering

<section class="columns">
  <div>

`<decision-feed>` can be used with declarative rendering libraries like Angular, React, Vue, and lit-html

```js
import {html, render} from 'lit-html';

const name = 'lit-html';

render(
  html`
    <h2>This is a &lt;decision-feed&gt;</h2>
    <decision-feed .name=${name}></decision-feed>
  `,
  document.body
);
```

  </div>
  <div>

<h2>This is a &lt;decision-feed&gt;</h2>
<decision-feed name="lit-html"></decision-feed>

  </div>
</section>
