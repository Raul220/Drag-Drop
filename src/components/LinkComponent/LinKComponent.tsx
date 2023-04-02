import * as React from "react";
import { FC, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./LinkComponent.scss";

interface ILinkComponent {
    url: string;
    text: string;
    disabled?: boolean;
}

const LinkComponent: FC<ILinkComponent> = ({ url, text, disabled }) => {

    return (
        <span className={`link-component${disabled ? ' disabled' : ''}`}>
            <NavLink to={disabled ? '' : url}>{text}</NavLink>
        </span>
    );
};

export default LinkComponent;
