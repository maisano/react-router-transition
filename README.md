# React Router Transition

A simple component for easily declaring mounting and unmounting transitions. Built for `react-router`, powered by `react-motion`. [Some demos](http://maisano.github.io/react-router-transition/demos/#/fade)

```jsx
import { RouteTransition } from 'react-router-transition';

// in your root app component:
<div>
  <RouteTransition
    pathname={this.props.location.pathname}
    atEnter={{ opacity: 0 }}
    atLeave={{ opacity: 0 }}
    atActive={{ opacity: 1 }}
  >
    {this.props.children}
  </RouteTransition>
</div>
```

### Installation

`npm install --save react-router-transition`

### Usage

`RouteTransition` requires a few props:
- `pathname`: the key signifying the transitionable route, most typically the pathname (required)
- `component`: the element type (`'div'`, `'span'`, etc.) to wrap transitioning routes. use `false` to transition routes themselves (this will require consuming a `style` prop in your route components).
- `atEnter`: an object of interpolatable style values for a route that is mounting (required)
- `atLeave`: an object of interpolatable style values for a route that is unmounting (required)
- `atActive`: interpolatable style values for a route that has mounted (required)
- `mapStyles`: an optional function to transform styles that aren't 1:1 (e.g. animating `translateX` or other values of `transform`)
- `runOnMount`: a boolean to signal whether or not to run the transition on initial `RouteTransition` mount

and supports a couple optional props:
- `className`: applies to the wrapper component
- `style`: applies to the wrapper component

If you want more granular control over the transition, pass in `spring` objects accordingly. For more information on springs, check out [`react-motion`'s documentation](https://github.com/chenglou/react-motion#--spring-val-number-config-springhelperconfig--opaqueconfig).

An example of a transition that shifts the routes to the left:

```jsx
<RouteTransition
  pathname={this.props.location.pathname}
  atEnter={{ translateX: 100 }}
  atLeave={{ translateX: -100 }}
  atActive={{ translateX: 0 }}
  mapStyles={styles => ({ transform: `translateX(${styles.translateX}%)` })}
>
  {this.props.children}
</RouteTransition>
```

It's also trivial to build out presets and toggle between them to handle pop events differently:

```jsx
const styles = this.props.location.action === 'POP'
  ? popStateStyles
  : pushStateStyles;

<RouteTransition
  pathname={this.props.location.pathname}
  {...styles}
/>
```

### Styling

Currently, react-router-transition requires that the RouteTransition be absolutely
positioned. This can be accomplished through either setting the style values
programmatically using the `mapStyles` prop, the `style` prop, or using CSS.

_Flexbox is not currently supported for the transitioning element._


### Nesting Transitions
Currently, nesting transitions requires some extra logic as the transitions themselves are usually coupled to the pathname. The way around this is to set the `RouteTransition`'s `pathname` to the pathname of the _current, transitionable_ route.

This means that if you have a transition at the root level of your tree, the pathname for that `RouteTransition` should match the root-level route (e.g. `/route-a` or `/route-b`). Any subsequent, deeper `RouteTransition`s should refer to their own, specific paths as well (e.g. the pathnames for nested transitions within `/route-a` would appear as `/route-a/foo` or `/route-a/bar`).
