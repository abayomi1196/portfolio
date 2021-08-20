import 'twin.macro';
import styledImport, { CSSProp, css as cssImport } from 'styled-components';

declare module 'twin.macro' {
  // the styled & css imports
  const styled: typeof styledImport;
  const css: typeof cssImport;
}

declare module 'react' {
  // the css prop
  interface HTMLAttributes<T> extends DOMAttributes<T> {
    css?: CSSProp;
  }
  // The inline svg css prop
  interface SVGProps<T> extends SVGProps<SVGSVGElement> {
    css?: CSSProp;
  }
}

// the `as` prop on styled components
declare global {
  namespace JSX {
    interface IntrinsicAttributes<T> extends DOMAttributes<T> {
      as?: string | Element;
    }
  }
}
