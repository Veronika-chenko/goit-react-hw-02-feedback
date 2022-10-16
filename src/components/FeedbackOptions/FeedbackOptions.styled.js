import styled from "styled-components";

export const ButtonWrap = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 128px);
    grid-column-gap: 8px;
    margin-bottom: 32px;
`
export const Button = styled.button`
    cursor: pointer;
    padding: 8px 4px;

    font-size: 18px;
    text-transform: capitalize;
    color: #000000;
    background-color: #c3d0e3;

    border-radius: 4px;
    border: none;
    box-shadow: 0 4px 10px #0000000d;
    
    transition: color 250ms linear, background-color 250ms linear;
    :hover,
    :focus {
        color: #EDF3FC;
        background-color: #6C8FC4;
    }
`