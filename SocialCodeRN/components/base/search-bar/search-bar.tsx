import React from 'react';
import { Controller } from 'react-hook-form';
import { View, TextInput } from 'react-native';

interface SearchProps {
  control: any;
  errors: any;
  name: string;
  placeholder: string;
}

const Search = (props: SearchProps) => {
  const { control, errors, name, placeholder } = props;

  return (
    <View>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            placeholder={placeholder}
            value={value}
          />
        )}
        name={name}
      />
    </View>
  );
};
export default Search;
