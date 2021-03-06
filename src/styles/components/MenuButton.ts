import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 2.5rem;

  margin: 1rem 0;

  display: grid;
  grid-template-columns: 30% 70%;
  gap: 2rem;
  align-items: center;

  color: var(--gray-line);

  span {
    justify-self: end;
  }

  h2 {
    justify-self: start;
    font-size: 1.5rem;
  }

`;