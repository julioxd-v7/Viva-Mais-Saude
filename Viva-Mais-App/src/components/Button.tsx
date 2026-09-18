import {
    StyleSheet,
    Text,
    TouchableOpacity,
    TouchableOpacityProps
} from "react-native";

type ButtonProps = TouchableOpacityProps & {
    label: string;
};

export function Button({ label, ...rest }: ButtonProps) {
    return (
        <TouchableOpacity style={styles.button} {...rest}>
            <Text style={styles.label}>{label}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        width: "100%",
        height: 48,
        backgroundColor: "#3366FF",
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
    },

    label: {
        color: "#FFFFFF",
        fontSize: 16,
        fontWeight: "600",
    },
});