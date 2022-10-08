import styled from 'styled-components';

export const Item = styled.li`
  position: relative;
  display: flex;
  justify-content: center;
  padding: 8px 0;
  width: 100%;
  &:not(:last-child) {
    border-bottom: solid 2px grey;
  }
`;
export const Name = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 32px;
`;
export const Status = styled.span`
  position: absolute;
  top: 40%;
  left: 5%;
`;
