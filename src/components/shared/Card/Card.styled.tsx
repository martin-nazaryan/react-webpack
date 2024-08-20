import styled from 'styled-components';

export const StyledCard = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 8px;
  box-shadow: 0 4px 8px ${({ theme }) => theme.colors.shadow};
  padding: 20px;
  font-family: ${({ theme }) => theme.font.family};
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 6px 12px ${({ theme }) => theme.colors.shadowHover};
  }
`;
