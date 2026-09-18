import { StyleSheet, TextInput, TextInputProps } from "react-native";

export function Input({...rest}: TextInputProps) {
    return <TextInput style={styles.input} {...rest} />
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        borderWidth: 1,
        borderColor: '#000000',
        borderRadius: 8,
        fontSize: 16,
        paddingLeft:12,
        color: '#000000',
    
    },
});