import styled from "styled-components";

export const Description = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 16px;
`
export const Name = styled.p`
    padding-top: 16px;
    font-weight: 700;
    font-size: 32px;
`
export const Stats = styled.ul`
    display: flex;
    justify-content: space-around;
    list-style: none;
    background-color:lightslategray;
`
export const StatsItem = styled.li`
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