import styled from 'styled-components';

export const StyledInput = styled.input`
  background-color: ${({ theme }) => theme.colors.inputBackground};
  color: ${({ theme }) => theme.colors.text};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 4px;
  padding: 10px;
  font-size: ${({ theme }) => theme.font.size};
  transition: border-color 0.3s ease;
  font-family: ${({ theme }) => theme.font.family};

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.focusBorder};
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.2);
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.placeholder};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.disabledBackground};
    border-color: ${({ theme }) => theme.colors.disabledBorder};
  }
`;
