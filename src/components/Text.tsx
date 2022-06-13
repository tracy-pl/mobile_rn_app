import styled from 'styled-components/native';
import { Text as NbText } from 'native-base';

const Text = styled(NbText)`
  color: ${({ theme }) => theme.colors.text};
`;

export default Text;
