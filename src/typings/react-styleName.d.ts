import { DOMAttributes } from "../../node_modules/@types/react/index";

declare module 'react' {
    interface HTMLAttributes<T> extends DOMAttributes<T> {
        styleName?: any
    }
}