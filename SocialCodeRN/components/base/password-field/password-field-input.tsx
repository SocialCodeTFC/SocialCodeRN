import React, { useState } from 'react';
import { Controller } from 'react-hook-form';
import { View, ViewStyle, Text, TextInput } from 'react-native';
import { styles } from './password-field-input.styles';
import { Eye, EyeOff } from 'react-native-feather';

interface PasswordFieldProps {
    name: string;
    placeholder: string;
    errors: any;
    control: any;
    dontMatch?: boolean;
}

const PasswordField: React.FC<PasswordFieldProps> = props => {
    const [visible, setVisible] = useState(true);

    const passwordFieldStyle = () => {
        if (props.errors[props.name] !== undefined) {
            return styles.error;
        }
        return styles.container;
    };
    return (
        <View>
            <Controller
                name={props.name}
                control={props.control}
                render={({ field: { onChange, onBlur, value } }) => (
                    <View>
                        {props.dontMatch && (
                            <Text>{'Passwords do not match'}</Text>
                        )}
                        <View style={passwordFieldStyle() as ViewStyle}>
                            <TextInput
                                style={styles.input}
                                onBlur={onBlur}
                                onChangeText={value => onChange(value)}
                                placeholder={props.placeholder}
                                value={value}
                                secureTextEntry={visible}
                            />
                            {visible ? (
                                <Eye
                                    width={30}
                                    height={30}
                                    color={'black'}
                                    style={styles.eye}
                                    onPress={() => {
                                        setVisible(!visible);
                                    }}
                                />
                            ) : (
                                <EyeOff
                                    width={30}
                                    height={30}
                                    color={'black'}
                                    style={styles.eye}
                                    onPress={() => {
                                        setVisible(!visible);
                                    }}
                                />
                            )}
                        </View>
                    </View>
                )}
                rules={{
                    required: 'This field is required',
                    minLength: {
                        value: 5,
                        message: 'The password is too short',
                    },
                }}
            />
            <Text style={styles.errorMsg}>
                {props.errors[props.name]?.message}
            </Text>
        </View>
    );
};
export default PasswordField;
