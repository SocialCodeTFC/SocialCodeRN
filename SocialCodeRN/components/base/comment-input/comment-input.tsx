import React from 'react';
import { Controller } from 'react-hook-form';
import { TextInput } from 'react-native';
import { styles } from './comment-input.styles';

interface CommentsInputProps {
  name: string;
  errors: any;
  control: any;
  placeholder: string;
  comment?: string;
}

const CommentsInput = (props: CommentsInputProps) => {
  return (
    <Controller
      control={props.control}
      render={({ field: { onChange, onBlur, value } }) => (
        <TextInput
          multiline
          style={styles.comment}
          onBlur={onBlur}
          onChangeText={value => onChange(value)}
          placeholder={props.placeholder}
          value={value}
        />
      )}
      name={props.name}
      rules={{
        pattern: {
          value: /\w/,
          message: 'Comments must not be empty ',
        },
      }}
      defaultValue=""
    />
  );
};
export default CommentsInput;
