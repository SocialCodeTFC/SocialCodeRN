import React from 'react';
import { Controller } from 'react-hook-form';
import { Text, TextInput, View, ViewStyle } from 'react-native';
import { styles } from './hashtag-field-input.styles';

interface TitleFieldProps {
    control: any;
    name: string;
    maxLength: string;
    required: boolean;
    errors: any;
    placeholder: string;
}

const TitleField = (props: TitleFieldProps) => {
    return (
        <View>
            <Controller
                control={props.control}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        style={styles.input}
                        onBlur={onBlur}
                        onChangeText={value => onChange(value)}
                        placeholder={props.placeholder}
                        value={value}
                    />
                )}
                name={props.name}
                rules={{
                    required: {
                        value: props.required,
                        message: 'This field is required',
                    },
                    maxLength: {
                        value: props.maxLength,
                        message: `${props.maxLength} letters max`,
                    },
                }}
                defaultValue=""
            />
            <Text>{props.errors[props.name]?.message}</Text>
        </View>
    );
};
export default TitleField;
