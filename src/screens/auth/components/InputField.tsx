import React from 'react';
import { Control, Controller } from 'react-hook-form';
import { Input } from '~components';

interface IInputFieldProps {
  name: string;
  placeholder: string;
  control: Control<any, unknown>;
}

const InputField: React.FC<IInputFieldProps> = ({
  name,
  placeholder,
  control,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, onBlur, value } }) => {
        return (
          <Input
            mb={2}
            onChangeText={onChange}
            value={value}
            onBlur={onBlur}
            placeholder={placeholder}
          />
        );
      }}
    />
  );
};

export default InputField;
