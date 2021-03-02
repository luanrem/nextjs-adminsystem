import styled from 'styled-components';

import { maxWidthContainer, navBarHeight } from '../../config/stylesconfig';

export const Content = styled.div`
  width: 100%;
  background: var(--blue);
`;

export const Container = styled.div`
  max-width: ${maxWidthContainer};
  margin: 0 auto;
  height: ${navBarHeight};

  padding: 0 1rem;


  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.div`
  display: flex;

  h1 {
    font-family: GoodTimes, Arial, Helvetica, sans-serif;
    font-size: 2rem;
    color: var(--gray-line);

    padding-right: 3rem;
  }

  button {
    color: var(--gray-line);
  }

  @media (max-width: 400px) {
    h1 {
      font-size: 1rem;
    }
  }
`;

export const MobileHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;