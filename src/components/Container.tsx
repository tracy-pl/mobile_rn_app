import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Container = styled(SafeAreaView)`
  background-color: ${({ theme }) => theme.colors.background};
  flex: 1;
  padding: ${({ theme }) => theme.sizes.xl}px;
  padding-top: 0;
`;

export default Container;
