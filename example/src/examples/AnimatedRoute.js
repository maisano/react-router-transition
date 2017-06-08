// The component `ShowMe` will fade into view upon
// matching, and fade out when there's no match
<AnimatedRoute
  path="/show-me"
  atEnter={{ opacity: 0 }}
  atLeave={{ opacity: 0 }}
  atActive={{ opacity: 1 }}
  component={ShowMe}
/>
