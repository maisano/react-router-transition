# React Router Transition

Transitions for React Router. Exports a simple component for easily declaring mounting and unmounting transitions. Built for `react-router`, powered by `react-motion`. [Some demos](http://maisano.github.io/react-router-transition/demos/#/fade)

#### React Router <= v3 example
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

#### React Router v4 example
```jsx
import { RouteTransition } from 'react-router-transition';
import { Route, Switch } from 'react-router';

// in your root app component:
<div>
  <Route render={({location, history, match}) => {
    return (
      <RouteTransition
        pathname={location.pathname}
        atEnter={{ opacity: 0 }}
        atLeave={{ opacity: 0 }}
        atActive={{ opacity: 1 }}
      >
        <Switch key={location.key} location={location}>
          <Route exact path="/" component={Home} />
          <Route exact path="/about/" component={About}/>
        </Switch>
      </RouteTransition>
    );
  }} />
</div>
```
*V4 Notes:*

In React Router v4 a `<Route>` can no longer have children *and* a component so replacing them above with `{this.props.children}` will not work. If you are unaware of what `Route.render` does, [read about it here](https://reacttraining.com/react-router/web/api/Route/render-func).

### Installation

`npm install --save react-router-transition`

### Usage

#### `<RouteTransition />`
The primary component for declaring a route transition.

`<RouteTransition />` requires a few props:
- `pathname` (required): the key signifying the transitionable route, most typically the `location.pathname`.
- `atEnter` (required): an object of interpolatable style values for a route that is mounting
- `atLeave` (required): an object of interpolatable style values for a route that is unmounting
- `atActive` (required): interpolatable style values for a route that has mounted
- `component`: the element type (`'div'`, `'span'`, etc.) to wrap transitioning routes. use `false` to transition routes themselves (this will require consuming a `style` prop in your route components).
- `mapStyles`: an optional function to transform styles that aren't 1:1 (e.g. animating `translateX` or other values of `transform`)
- `runOnMount`: a boolean to signal whether or not to run the transition on initial `RouteTransition` mount
- [`className`]: Optional. `className` is defined on the wrapper component
- [`style`]: Optional. Styles are applied to the wrapper component

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

#### `<AnimatedRoute />`
Wraps a React Router v4 `<Route />` component in a `<RouteTransition />`. Use this when declaring a custom transition for a single route.

##### Example

```jsx
<AnimatedRoute
  path="/show-me"
  atEnter={{ opacity: 0 }}
  atLeave={{ opacity: 0 }}
  atActive={{ opacity: 1 }}
  component={MyComponent}
/>
```

#### `<AnimatedSwitch />`
Integrates a React Router v4 `<Switch />` component with a `<RouteTransition />`. Use this component when you want a series of Routes to share identical transitions.

```jsx
// in your root app component:

import { RouteTransition } from 'react-router-transition';
import { Route, Switch } from 'react-router';
import { About, Home } from './pages';

<div>
  <Route render={({location, history, match}) => (
    <AnimatedSwitch
      atEnter={{ opacity: 0 }}
      atLeave={{ opacity: 0 }}
      atActive={{ opacity: 1 }}
      key={location.key}
      location={location}
    >
        <Route exact path="/" component={Home} />
        <Route exact path="/about/" component={About}/>
    </AnimatedSwitch>
  )} />
</div>
```

### Styling

Currently, react-router-transition requires that the RouteTransition be absolutely
positioned. This can be accomplished through either setting the style values
programmatically using the `mapStyles` prop, the `style` prop, or using CSS.

_Flexbox is not currently supported for the transitioning element._


### Nesting Transitions
Currently, nesting transitions requires some extra logic as the transitions themselves are usually coupled to the pathname. The way around this is to set the `RouteTransition`'s `pathname` to the pathname of the _current, transitionable_ route.

This means that if you have a transition at the root level of your tree, the pathname for that `RouteTransition` should match the root-level route (e.g. `/route-a` or `/route-b`). Any subsequent, deeper `RouteTransition`s should refer to their own, specific paths as well (e.g. the pathnames for nested transitions within `/route-a` would appear as `/route-a/foo` or `/route-a/bar`).
