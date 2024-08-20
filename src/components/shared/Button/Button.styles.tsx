import styled from 'styled-components';

export const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  font-size: ${({ theme }) => theme.font.size};
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-family: ${({ theme }) => theme.font.family};

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.5);
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.disabledBackground};
    cursor: not-allowed;
  }
`;
