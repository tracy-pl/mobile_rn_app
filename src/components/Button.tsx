import React from 'react';
import styled from 'styled-components/native';
import { Button as LybButton, IButtonProps } from 'native-base';

const StyledButton = styled(LybButton)`
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 16px;
  height: 64px;
`;

const Button: React.FC<IButtonProps> = props => (
  <StyledButton {...props} _text={{ fontSize: 16, fontWeight: 500 }} />
);

export default Button;
