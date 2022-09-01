# Notes

## Project

### Goals

Be able to:

- [ ] Create a todo item
- [ ] View all existing todo items
- [ ] Delete an individual todo item

## Reactivity Fundamentals

Reactive objects are JavaScript Proxies and behave just like normal objects. The difference is that Vue is able to track the property access and mutations of a reactive object. If you are curious about the details, we explain how Vue's reactivity system works in Reactivity in Depth - but we recommend reading it after you have finished the main guide.

We can create a reactive object or array with the `reactive()` function.

### reactive() API

Limitations:

- It only works for `object types` (`objects`, `arrays`, and collection types such as `Map` and `Set`). It cannot hold primitive types such as `string`, `number` or `boolean`.

- Since Vue's reactivity tracking works over property access, we must always keep the same reference to the reactive object. This means we can't easily "replace" a reactive object because the reactivity connection to the first reference is lost.

### ref() API

To address the limitations of `reactive()`, Vue also provides a `ref()` function which allows us to create reactive "refs" that can hold any value type.
