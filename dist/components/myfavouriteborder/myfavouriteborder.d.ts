import { MouseEventHandler } from 'react';
export interface MyFavouriteBorderProps {
    color: 'inherit' | 'default' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
    disabled?: boolean;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}
declare function MyFavouriteBorder(props: MyFavouriteBorderProps): import("react/jsx-runtime").JSX.Element;
export default MyFavouriteBorder;
