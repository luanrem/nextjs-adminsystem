import styled from 'styled-components';

import { maxWidthContainer, sideBarWidth } from '../../config/stylesconfig';

export const Container = styled.div`
  
`;

export const Content = styled.div`
  max-width: ${maxWidthContainer};
  margin: 0 auto;
  margin-top: 1rem;
  padding: 0 1rem;
  display: flex;
`;

export const PageContent = styled.section`
  margin-left: 1rem;
  width: calc(${maxWidthContainer} - ${sideBarWidth} - 3rem);
`;