import styled from 'styled-components/native';
import { View, Text } from 'react-native';
import { Button, Container } from '~components';
import { colors } from '~theme';

export namespace S {
  export const OuterContainer = styled(Container)`
    padding: 10px 20px 20px 20px;
  `;
  export const CloseButton = styled(Button)`
    background-color: ${colors.lightGray};
    width: 30px;
    height: 30px;
    border-radius: 15px;
  `;

  export const TopContainer = styled(View)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    margin-bottom: 40px;
  `;

  export const TopText = styled(Text)`
    font-size: 32px;
    font-weight: 700;
    letter-spacing: -1.2px;
    color: ${colors.darkBlue};
  `;

  export const BottomText = styled(Text)`
    font-size: 16px;
    color: ${colors.darkBlue};
    opacity: 0.5;
  `;

  export const Center = styled(View)`
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
  `;

  export const BottomButton = styled(Button)`
    position: absolute;
    width: 100%;
    bottom: -25px;
  `;
}
