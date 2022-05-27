import * as Updates from 'expo-updates';

const restart = () => {
  Updates.reloadAsync();
};

export { restart };
