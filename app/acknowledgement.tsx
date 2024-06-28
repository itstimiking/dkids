import { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { Image } from 'expo-image'
import Note from '@/assets/images/image.svg'

export default function Index() {

    const [tab, setTab] = useState(0)
    return (
        <View
            style={styles.container}
        >
            <View
                style={styles.content}
            >
                <View style={{ gap: 30 }}>
                    <View style={{ width: 100, height: 100, borderRadius: 50, alignSelf: 'center', backgroundColor: '#665FD51A',padding:20 }} >
                        <Image
                            style={styles.image}
                            source={Note}
                            contentFit="cover"
                            transition={1000}
                        />
                    </View>
                    <View style={{ gap: 5 }}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                            TERMS AND CONDITIONS
                        </Text>
                        <Text style={{ fontSize: 11, fontWeight: 'bold' }}>
                            Last updated April 11, 2024
                        </Text>
                    </View>

                    <View style={{ gap: 5, marginTop: 40 }}>
                        <Text style={styles.text}>
                            By selecting "Accept" below, I have reviewed and agree to the DanberKidz' Terms of Use and acknowledge the Privacy Notice. I am 18 years of age or older.
                        </Text>

                        <Text style={styles.text}>
                            Read our End User License Agreement
                        </Text>

                    </View>
                </View>


                <Pressable
                    style={({ pressed }) => [styles.button, pressed ? { backgroundColor: 'purple' } : {}]}
                >
                    <Text style={styles.buttonText}>
                        Accept
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
        paddingHorizontal: 24,
        paddingVertical: 40,
        justifyContent: "space-between"
    },
    image: {
        flex: 1,
        width: '100%',
        backgroundColor: '#0553',
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