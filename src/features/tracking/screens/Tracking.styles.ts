import styled from 'styled-components';
import { View, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Button } from '~components';
import { colors } from '~theme';

export namespace S {
  export const FinishButton = styled(Button)`
    background-color: ${colors.red};
    width: 95%;
    position: absolute;
    bottom: 25px;
  `;

  export const Modal = styled(View)`
    background-color: ${colors.white};
    width: 282px;
    height: 98px;
    position: absolute;
    top: 54px;
    left: 50%;
    margin-left: -141px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
    border-radius: 16px;

    display: flex;
    justify-content: space-around;
    flex-direction: row;
    align-items: center;
    padding: 12px;
  `;

  export const TextContainer = styled(View)`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  `;

  export const TopText = styled(Text)`
    font-weight: 500;
    font-size: 15px;
    opacity: 0.4;
    line-height: 19px;
    margin-bottom: 5px;
  `;

  export const BottomText = styled(Text)`
    font-weight: 400;
    font-size: 19px;
    line-height: 23px;
  `;

  export const Center = styled(View)`
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
  `;

  export const Gradient = styled(LinearGradient)`
    position: absolute;
    z-index: 0;
    width: 100%;
    height: 182px;
    left: 0;
    bottom: 0;
    opacity: 0.8;
  `;
}
