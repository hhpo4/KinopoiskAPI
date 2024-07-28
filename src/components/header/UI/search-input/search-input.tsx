import { FC, InputHTMLAttributes } from "react";

import classes from "./search-input.module.css";

const SearchInput: FC<InputHTMLAttributes<HTMLInputElement>> = (props) => {
    return <input type="text" {...props} className={classes.MyInput} />;
};

export default SearchInput;
