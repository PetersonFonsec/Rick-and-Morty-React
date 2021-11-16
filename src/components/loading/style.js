import styled from "styled-components";

export const Container = styled.div`
  align-items: center;
  backdrop-filter: blur(3px);
  display: flex;
  justify-content: center;
  height: 100vh;
  left: 0;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: ${({ theme }) => theme.loading};

  svg {
    animation: flipper 3s linear infinite;
    fill: ${({ theme }) => theme.primary};
  }

  @keyframes flipper {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }
`;
