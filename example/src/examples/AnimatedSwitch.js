// In this example routes that mount will fade in
// and slide onscreen from the right while the
// unmounting route will slide out from the left
<AnimatedSwitch
  atEnter={{ opacity: 0, offset: 100 }}
  atLeave={{ opacity: 0, offset: -100 }}
  atActive={{ opacity: 1, offset: 0 }}
  mapStyles={styles => {
    return {
      opacity: styles.opacity,
      transform: `translateX(${styles.offset}%)`,
    };
  }}
>
  <Route path="/about" component={About} />
  <Route path="/contact" component={Contact} />
  <Route component={Home} />
</AnimatedSwitch>
