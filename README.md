# vue-global-attrs

> Declaratively apply attributes to the the document element.

Inspired by [vue-global-events](https://github.com/shentao/vue-global-events).

## Installation

```
npm install vue-global-attrs --save
```

## Usage

```js
import GlobalAttrs from 'vue-global-attrs';

// register globally
Vue.component('GlobalAttrs', GlobalAttrs)

// or locally
export default {
  components: { GlobalAttrs },
  // rest of your component
}
```

After that you can register global attributes like this:

```html
<GlobalAttrs
  v-if="attributesConnected"
  data-foo="bar"
  :data-hello="'world'"
/>
```

These attributes are applied (reactively) to the `<html>` element. The resulting DOM would look like this:

```html
<html data-foo="bar" data-hello="world">
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](LICENSE)
