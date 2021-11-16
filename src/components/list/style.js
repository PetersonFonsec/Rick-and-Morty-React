import styled from "styled-components";

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 18px;
`;

export const EmptyList = styled.div`
  margin-top: 24vh;
  text-align: center;

  strong {
    color: ${({ theme }) => theme.primary};
  }

  svg {
    fill: ${({ theme }) => theme.primary};
  }

  .emptyList-title {
    color: ${({ theme }) => theme.textColor};
    font-size: 20px;
    line-height: 23px;
  }
`;
