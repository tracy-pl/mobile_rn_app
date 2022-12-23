import React, { useCallback } from 'react';
import { Control, Controller } from 'react-hook-form';
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
    (onChange: () => void, value: string, onBlur: () => void) => {
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
    // eslint-disable-next-line prettier/prettier
    [placeholder, name]
  );

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, onBlur, value } }) => {
        return renderInput(onChange, value, onBlur);
      }}
    />
  );
};

export default InputField;
