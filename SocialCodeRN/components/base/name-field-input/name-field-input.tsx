import React from 'react';
import { Controller } from 'react-hook-form';
import { Text, TextInput, View, ViewStyle } from 'react-native';
import { styles } from './name-field-input.styles';

interface NameFieldProps {
    name: string;
    errors: any;
    control: any;
    placeholder: string;
    required: boolean;
    maxLength: number;
}

const NameField = (props: NameFieldProps) => {
    const nameFieldStyle = () => {
        if (props.errors[props.name] !== undefined) {
            return styles.error;
        }
        return styles.input;
    };
    return (
        <View>
            <Controller
                control={props.control}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        style={nameFieldStyle() as ViewStyle}
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
export default NameField;
