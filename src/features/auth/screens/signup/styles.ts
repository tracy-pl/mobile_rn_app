import styled from 'styled-components/native';
import { Button } from '~components';
import { colors, fonts } from '~theme';

export const Login = styled.Text`
  font-family: ${fonts.inter.regular};
  font-size: 22px;
  font-weight: 400;
  color: ${colors.blue2};
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  padding: 6px 0;
`;
export const RegisterButton = styled(Button)`
  background-color: ${colors.blue1};
  width: 100%;
  border-radius: 16px;
  padding-top: 16px;
  padding-bottom: 16px;
`;

export const Terms = styled.Text`
  font-family: ${fonts.inter.bold};
  color: ${colors.blue1};
  font-weight: 700;
`;
