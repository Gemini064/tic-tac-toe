import styled from "styled-components";

export const Square = styled.div`
  flex: 33%;
  cursor: pointer;
  display: grid;
  place-items: center;
  font-size: 50px;
  transition: 0.3s;

  &:hover {
    background: lightblue;
  }

  &.cell-0,
  &.cell-1,
  &.cell-3,
  &.cell-4 {
    border-right: 3px solid black;
    border-bottom: 3px solid black;
  }

  &.cell-2,
  &.cell-5 {
    border-bottom: 3px solid black;
  }

  &.cell-6,
  &.cell-7 {
    border-right: 3px solid black;
  }
`;
