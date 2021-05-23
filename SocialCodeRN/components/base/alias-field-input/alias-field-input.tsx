import React from 'react';
import { Controller } from 'react-hook-form';
import { Text, TextInput, View, ViewStyle } from 'react-native';
import { styles } from './alias-field-input.styles';

interface AliasFieldProps {
    name: string;
    errors: any;
    control: any;
    placeholder: string;
    required: boolean;
    maxLength: number;
}

const AliasField = (props: AliasFieldProps) => {
    const aliasFieldStyle = () => {
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
                        style={aliasFieldStyle() as ViewStyle}
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
                    pattern: {
                        value: /@/i,
                        message: 'Insert a valid alias, like @Name',
                    },
                }}
                defaultValue=""
            />
            <Text style={styles.errorMsg}>
                {props.errors[props.name]?.message}
            </Text>
        </View>
    );
};
export default AliasField;
