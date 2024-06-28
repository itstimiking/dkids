import { Link } from "expo-router";
import { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

export default function Index() {

  const [tab, setTab] = useState(0)
  return (
    <View
      style={styles.container}
    >
      <View style={styles.content}>
        <Link href='/onboarding'
          style={styles.button}
        >
          <Text style={styles.linkText}>
            Onboarding
          </Text>
        </Link>

        <Link
          href={'/acknowledgement'}
          style={styles.button}
        >
          <Text style={styles.linkText}>
            Agreement screen
          </Text>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: '#e9e9e9'
  },
  text: {
    color: 'grey'
  },
  content: {
    flex:1,
    width:'100%',
    justifyContent:'center',
    padding: 24,
    gap: 20
  },
  button: {
    backgroundColor: '#665FD5',
    paddingHorizontal: 25,
    paddingVertical: 12,
    borderRadius: 20,
  },
  linkText: {
    color: '#fff',
    fontWeight: '800',
    alignSelf:'center',
  }
})