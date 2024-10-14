declare module 'remote/Button' {
    import { FC } from 'react';

    const Button: FC;
    export default Button;
}
declare module 'mfApp3/QueryComponent' {
    import { FC } from 'react';
    const QueryComponent: FC;
    export default QueryComponent;
}
declare module 'remote/index.css' {
    const css: any;
    export default css;
}

declare module '@components/*' {
    const content: any;
    export default content;
  }
  declare module '*.png' {
    const content: string;
    export default content;
  }