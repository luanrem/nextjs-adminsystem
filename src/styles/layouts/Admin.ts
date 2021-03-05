import styled from 'styled-components';

import PerfectScrollbar from 'react-custom-scrollbars';

import { maxWidthContainer, sideBarWidth } from '../../config/stylesconfig';

export const Container = styled.div`
  
`;

export const Content = styled.div`
  max-width: ${maxWidthContainer};
  margin: 0 auto;
  margin-top: 1rem;
  padding: 0 0 0 1rem;
  display: flex;

`;

export const PageContent = styled.section`
  width: calc(100% - ${sideBarWidth} - 2rem);
  flex-grow: 0;

  margin: 0 1rem 0 auto;
`;

export const Scroll = styled(PerfectScrollbar)`
  max-height: 100%;
`;