import { FC, ReactNode, ButtonHTMLAttributes } from "react";

import classes from "./home-button.module.css";

interface MyButtonProps {
    children: ReactNode;
    props?: ButtonHTMLAttributes<HTMLButtonElement>;
}

const MyButton: FC<MyButtonProps> = ({ children, props }) => {
    return (
        <button {...props} className={classes.MyButton}>
            {children}
        </button>
    );
};

export default MyButton;
