import React from 'react';
import { Control, Controller } from 'react-hook-form';
import { Input } from '~components';
import { PasswordInput } from '~components/PasswordInput';

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
  // eslint-disable-next-line @typescript-eslint/no-shadow
  const renderInput = (name, onChange, value, onBlur) => {
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
            placeholder={placeholder}
            style={{ height: 64 }}
          />
        );
    }
  };
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, onBlur, value } }) => {
        return renderInput(name, onChange, value, onBlur);
      }}
    />
  );
};

export default InputField;
