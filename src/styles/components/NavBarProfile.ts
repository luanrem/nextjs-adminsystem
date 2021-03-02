import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;

  color: var(--gray-line);
  
  .avatar {
    width: 3.5rem;
    height: 3.5rem;
    border: solid var(--green) 3px;
  }
`;

export const NameContainer = styled.div`
  text-align: end;
  padding: 0 1rem;

  h2 {
    font-size: 24px;
  }
`;
