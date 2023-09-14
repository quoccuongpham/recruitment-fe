import styled from "@emotion/styled";
import { Button } from "@mui/material";
export const InputStyled = styled("input")`
    font-size: 1rem;
    font-family: inherit;
    border: none;
    border-radius: 8px;
    padding: 0.5rem 0.75rem;
    box-shadow: 0 0px 1px hsla(0, 0%, 0%, 0.2), 0 1px 2px hsla(0, 0%, 0%, 0.2);
    background-color: white;
    line-height: 1.5;
    margin: 0;
    &:hover {
        box-shadow: 0 0px 1px hsla(0, 0%, 0%, 0.6),
            0 1px 2px hsla(0, 0%, 0%, 0.2);
    }
`;

export const ButtonStyled = styled(Button)`
    font-size: 1rem;
    font-family: inherit;
    border: none;
    border-radius: 8px;
    padding: 0.5rem 0.75rem;
    box-shadow: 0 0px 1px hsla(0, 0%, 0%, 0.2), 0 1px 2px hsla(0, 0%, 0%, 0.2);
    background-color: white;
    line-height: 1.5;
    margin: 0;
    color: #3992ff;
    font-weight: 500;
    &:hover {
        box-shadow: 0 0px 1px hsla(0, 0%, 0%, 0.6),
            0 1px 2px hsla(0, 0%, 0%, 0.2);
    }
    &:active {
        box-shadow: 0 0px 1px hsla(0, 0%, 0%, 0.4);
        transform: translateY(1px);
    }
`;

export const TextAreaStyled = styled("button")`
    font-size: 1rem;
    font-family: inherit;
    border: none;
    border-radius: 8px;
    padding: 0.5rem 0.75rem;
    box-shadow: 0 0px 1px hsla(0, 0%, 0%, 0.2), 0 1px 2px hsla(0, 0%, 0%, 0.2);
    background-color: white;
    line-height: 1.5;
    margin: 0;
    &:hover {
        box-shadow: 0 0px 1px hsla(0, 0%, 0%, 0.6),
            0 1px 2px hsla(0, 0%, 0%, 0.2);
    }
`;

export const SelectStyled = styled("select")`
    font-size: 1rem;
    font-family: inherit;
    border: none;
    border-radius: 8px;
    padding: 0.5rem 0.75rem;
    box-shadow: 0 0px 1px hsla(0, 0%, 0%, 0.2), 0 1px 2px hsla(0, 0%, 0%, 0.2);
    background-color: white;
    line-height: 1.5;
    margin: 0;
    &:hover {
        box-shadow: 0 0px 1px hsla(0, 0%, 0%, 0.6),
            0 1px 2px hsla(0, 0%, 0%, 0.2);
    }
`;
