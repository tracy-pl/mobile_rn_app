import styled from 'styled-components/native';
import { View, Text } from 'react-native';
import { Button } from '~components';

export namespace S {
  export const CloseButton = styled(Button)`
    background-color: #e7e7e7;
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
    color: #18214d;
  `;

  export const BottomText = styled(Text)`
    font-size: 16px;
    color: #18214d;
    opacity: 0.5;
  `;

  export const BottomButton = styled(Button)`
    margin-top: 20px;
  `;
}
