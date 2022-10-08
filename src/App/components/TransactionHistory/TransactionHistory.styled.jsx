import styled from 'styled-components';

export const TransactionHead = styled.thead`
  background-color: lightslategray;
`;
export const Tr = styled.tr`
  text-transform: uppercase;
  &:nth-child(even) {
    background-color: #faf0e3;
  }
`;
export const Th = styled.th`
  height: 50px;
  text-align: center;
  border: 2px solid lightslategray;
`;
export const Td = styled.td`
  height: 50px;
  text-align: center;
  border: 2px solid lightslategray;
`;
