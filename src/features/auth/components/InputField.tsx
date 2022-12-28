import React, { useCallback } from 'react';
import { Control, Controller } from 'react-hook-form';
import { ControllerRenderProps } from 'react-hook-form/dist/types/controller';

import { Input } from '~components';
import { PasswordInput } from '~components/PasswordInput';
import { colors, fonts } from '~theme';

interface IInputFieldProps {
  name: string;
  placeholder: string;
  control: Control | any; // eslint-disable-line
}

const InputField: React.FC<IInputFieldProps> = ({
  name,
  placeholder,
  control,
}) => {
  const renderInput = useCallback(
    (
      onChange: ControllerRenderProps['onChange'],
      value: ControllerRenderProps['value'],
      onBlur: ControllerRenderProps['onBlur'],
    ) => {
      switch (name) {
        case 'password':
          return (
            <PasswordInput
              onChangeText={onChange}
              value={value}
              onBlur={onBlur}
              placeholder={placeholder}
            />
          );
        default:
          return (
            <Input
              borderRadius="xl"
              mb={4}
              onChangeText={onChange}
              value={value}
              onBlur={onBlur}
              _focus={{
                borderColor: colors.blue2,
                backgroundColor: colors.white,
              }}
              placeholder={placeholder}
              style={{
                height: 64,
                fontFamily: fonts.inter.medium,
                fontWeight: '500',
                paddingLeft: 24,
                fontSize: 16,
              }}
            />
          );
      }
    },
    [placeholder, name],
  );

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, onBlur, value } }) =>
        renderInput(onChange, value, onBlur)
      }
    />
  );
};

export default InputField;
