import { render, cleanup } from '@testing-library/react-native';
import 'jest-styled-components';

import { Container } from '~components';

afterEach(cleanup);

describe('Container', () => {
  test('should render correctly', () => {
    const { toJSON } = render(<Container />);

    expect(toJSON()).toMatchSnapshot();
    // TODO: fix this test
    // expect(container).toHaveStyleRule('background-color', '#fff');
  });
});
