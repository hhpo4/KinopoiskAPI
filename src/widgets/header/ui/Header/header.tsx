import { FC } from "react";

import SearchInput from "../search-input/search-input";
import MyButton from "../home-button/home-button";

import classes from "./header.module.css";

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
    return (
        <header className={classes.header}>
            <div className={classes.wrapper}>
                <MyButton>Home</MyButton>
                <div className={classes.searchInputWrapper}>
                    <SearchInput placeholder="movies, series "/>
                </div>
            </div>
        </header>
    );
};

export default Header;
