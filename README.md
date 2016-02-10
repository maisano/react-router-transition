# React Router Transition

A simple component for easily declaring mounting and unmounting transitions. Built for `react-router`, powered by `react-motion`.

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
- `pathname`: the pathname of the current route (required)
- `component`: the element type (`'div'`, `'span'`, etc.) to wrap transitioning routes. use `false` to transition routes themselves (this will require consuming a `style` prop in your route components).
- `atEnter`: an object of style values for a route that is mounting
- `atLeave`: an object of style values for a route that is unmounting
- `atActive`: style values for a route that has mounted
- `mapStyles` an optional function to transform styles that aren't 1:1 (e.g. animating `translateX` or other values of `transform`)

and supports a couple optional props:
- `className`: applies to the wrapper component
- `style`: applies to the wrapper component

If you want more granular control over the transition, pass in `spring` objects accordingly. For more information on springs, check out [`react-motion`'s documentation](https://github.com/chenglou/react-motion#--spring-val-number-config-springhelperconfig--opaqueconfig).

An example of a transition that shifts the routes to the left:

```jsx
<RouteTransition
  pathname={this.props.location.pathname}
  atEnter: { translateX: 100 },
  atLeave: { translateX: -100 },
  atActive: { translateX: 0 },
  mapStyles: (styles) => {
    return {
      transform: `translateX(${styles.translateX}%)`
    };
  }
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
