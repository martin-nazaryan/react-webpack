
import styled from 'styled-components';

export const StyledFormText = styled.p`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.secondary};
  margin-top: 4px;
  font-family: ${({ theme }) => theme.font.family};
`;
