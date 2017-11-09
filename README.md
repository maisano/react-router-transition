# React Router Transition

Painless transitions for React Router, powered by React Motion. [Example site](http://maisano.github.io/react-router-transition/).

- v4-first
- backward-compatible with previous versions of `react-router`

### Installation

`npm install --save react-router-transition`

### Example Usage
```jsx
import Router from 'react-router-dom/BrowserRouter';
import { AnimatedSwitch } from 'react-router-transition';
import Route from 'react-router-dom/Route';

export default () => (
  <Router>
    <AnimatedSwitch
      atEnter={{ opacity: 0 }}
      atLeave={{ opacity: 0 }}
      atActive={{ opacity: 1 }}
      className="switch-wrapper"
    >
      <Route exact path="/" component={Home} />
      <Route path="/about/" component={About}/>
      <Route path="/etc/" component={Etc}/>
    </AnimatedSwitch>
  </Router>
)
```

```css
.switch-wrapper {
  position: relative;
}

.switch-wrapper > div {
  position: absolute;
}
```

### Docs

- [AnimatedSwitch](http://maisano.github.io/react-router-transition/animated-switch)
- [AnimatedRoute](http://maisano.github.io/react-router-transition/animated-route)

### Limitations

This library has some obvious limitations, the most marked of which are:

- no staggering or sequencing of animations
- no durations or timing functions
