declare module "react-router-transition"
{
  import {RouteProps} from "react-router-dom";

  interface AnimatedSwitchProps
  {
    atEnter: React.CSSProperties;
    atLeave: React.CSSProperties;
    atActive: React.CSSProperties;
    didLeave?: (style: React.CSSProperties) => void;
    className?: HTMLDivElement;
    wrapperComponent?: keyof HTMLElementTagNameMap;
    mapStyles?: (styles: React.CSSProperties) => React.CSSProperties;
    runOnMount?: boolean;
    children: React.ReactNode;
  }

  interface AnimatedRouteProps extends RouteProps
  {}


  export const AnimatedSwitch: React.ComponentClass<AnimatedSwitchProps>;
  export const AnimatedRoute: React.ComponentClass<AnimatedRouteProps>;
  export const RouteTransition: React.ComponentClass<AnimatedSwitchProps>;
}
