import styled from "styled-components";

export const Card = styled.div`
  background: ${({ theme }) => theme.background};
  border: 1px solid rgba(158, 158, 158, 0.6);
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const Thumb = styled.img`
  object-fit: cover;
  width: 100%;
`;

export const Content = styled.div`
  color: ${({ theme }) => theme.textColor};
  display: flex;
  flex-direction: column;
  padding: 8px;
  width: 100%;

  p {
    margin: 0;
  }

  p:not(:last-child) {
    margin-bottom: 18px;
  }

  button {
    display: block;
    margin-top: auto;
  }
`;
