import { Button } from "@/components/Button";
import { Input } from "@/components/input";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
    return (
        <ScrollView>
            <View style={styles.container}>

                <Image
                    source={require("../assets/img1_react.jpeg")}
                    style={styles.illustration}
                />

                <Text style={styles.title}>
                    Entrar
                </Text>

                <Text style={styles.sub_title}>
                    Faça login para continuar:
                </Text>

                <View style={styles.form}>

                    <Input
                        placeholder="E-mail"
                        placeholderTextColor="#999999"
                        keyboardType="email-address"
                    />

                    <Input
                        placeholder="Senha"
                        placeholderTextColor="#999999"
                        secureTextEntry
                    />

                    <Button
                        label="Entrar"
                        onPress={() => {}}
                    />

                </View>

            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FDFDFD",
        padding: 32,
    },

    illustration: {
        width: "100%",
        height: 330,
        resizeMode: "contain",
        marginTop: 62,
    },

    title: {
        fontSize: 32,
        fontWeight: "bold",
    },

    sub_title: {
        fontSize: 16,
    },

    form: {
        marginTop: 24,
        gap: 12,
    },
});