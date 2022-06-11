import styled from 'styled-components/native';
import { Input as LybInput } from 'native-base';

const Input = styled(LybInput)`
  color: ${({ theme }) => theme.colors.text};
`;

Input.defaultProps = {
  autoCapitalize: 'none',
};

export default Input;
