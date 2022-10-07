import styled from "styled-components";

export const Title = styled.h2`
    display: flex;
    justify-content: center;
    padding: 16px 0 16px 0;
`
export const StatList = styled.ul`
    display: flex;
    justify-content: space-around;
    background-color: lightslategray;
`
export const Item = styled.li`
    display: flex;
    flex-direction: column;
    padding: 8px 0 8px 0;
    width: 100%;
    &:not(:first-child) {
    border-left: 2px solid rgb(191, 216, 213);
`
export const Span = styled.span`
    display: flex;
    flex-direction: column;
    align-items: center;
`