
import styled from 'styled-components';

export const StyledFormLabel = styled.label`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 8px;
  font-weight: 600;
  font-family: ${({ theme }) => theme.font.family};
`;
