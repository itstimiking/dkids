import { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

export default function Index() {

    const [tab, setTab] = useState(0)
    return (
        <View
            style={styles.container}
        >
            <View
                style={styles.content}
            >
                <View style={{ gap: 5 }}>
                    <Text style={styles.text}>
                        Enter your mobile number or email address
                    </Text>
                    <TextInput
                        placeholder="**@**.com"
                        style={styles.textInput}
                    />
                </View>

                <Pressable
                    style={({ pressed }) => [styles.button, pressed ? { backgroundColor: 'purple' } : {}]}
                >
                    <Text style={styles.buttonText}>
                        Submit
                    </Text>
                </Pressable>
            </View>
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
        backgroundColor: '#e9e9e9'
    },
    content: {
        flex: 1,
        padding: 24
    },
    text: {
        color: 'grey'
    },
    textInput: {
        borderColor: 'grey',
        borderWidth: 0.3,
        borderRadius: 5,
        paddingHorizontal: 16,
        height: 40
    },
    button: {
        backgroundColor: '#665FD5',
        padding: 12,
        borderRadius: 20,
        alignItems: 'center'
    },
    buttonText: {
        color: '#fff',
        fontWeight: '800'
    }
})