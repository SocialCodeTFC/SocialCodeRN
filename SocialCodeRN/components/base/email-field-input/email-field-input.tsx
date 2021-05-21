import React from 'react';
import { Controller } from 'react-hook-form';
import { Text, TextInput, View, ViewStyle } from 'react-native';
import { styles } from './email-field-input.styles';

interface EmailFieldProps {
    name: string;
    errors: any;
    control: any;
    placeholder: string;
}

const EmailField: React.FC<EmailFieldProps> = props => {
    const emailFieldStyle = () => {
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
                        style={emailFieldStyle() as ViewStyle}
                        onBlur={onBlur}
                        onChangeText={value => onChange(value)}
                        placeholder={props.placeholder}
                        value={value}
                    />
                )}
                name={props.name}
                rules={{
                    required: 'This field is required',
                    pattern: {
                        value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                        message: 'Introduce a valid email',
                    },
                }}
                defaultValue=""
            />
            <Text>{props.errors[props.name]?.message}</Text>
        </View>
    );
};
export default EmailField;
