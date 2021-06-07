import React from 'react';
import { Controller } from 'react-hook-form';
import { Text, TextInput, ScrollView, ViewStyle, View } from 'react-native';
import { styles } from './post-body-field.styles';

interface PostBodyProps {
  control: any;
  name: string;
  maxLength: number;
  required: boolean;
  errors: any;
  placeholder: string;
  numLines: number;
  customStyle?: any;
}
type customStyle = {
  input: ViewStyle;
};

const PostBody = (props: PostBodyProps) => {
  const {
    control,
    name,
    maxLength,
    required,
    errors,
    placeholder,
    numLines,
    customStyle,
  } = props;
  const importedStyle = customStyle as customStyle;

  return (
    <View>
      <ScrollView>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={[styles?.input, importedStyle?.input]}
              multiline
              numberOfLines={numLines}
              onBlur={onBlur}
              onChangeText={value => onChange(value)}
              placeholder={placeholder}
              value={value}
              autoCapitalize={'none'}
              editable
            />
          )}
          name={name}
          rules={{
            required: {
              value: required,
              message: 'This field is required',
            },
            maxLength: {
              value: maxLength,
              message: `${maxLength} letters max`,
            },
          }}
          defaultValue=""
        />
        <Text>{props.errors[name]?.message}</Text>
      </ScrollView>
    </View>
  );
};
export default PostBody;
