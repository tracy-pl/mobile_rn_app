import Toast, { ToastShowParams } from 'react-native-toast-message';

const showToast = ({
  type,
  topText,
  bottomText,
}: {
  type: ToastShowParams['type'];
  topText: ToastShowParams['text1'];
  bottomText: ToastShowParams['text2'];
}) => {
  Toast.show({
    type,
    text1: topText,
    text2: bottomText,
  });
};

export default showToast;
