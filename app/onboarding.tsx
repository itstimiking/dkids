import { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

export default function Index() {

  const [tab, setTab] = useState(0)
  return (
    <View
      style={styles.container}
    >
      <View style={styles.tabarea}>
        <View style={styles.tabsbuttonarea}>
          <Pressable
            style={[
              styles.tabs,
              tab == 0 ? styles.tabsActive : {}
            ]}
            onPress={() => setTab(0)}
          >
            <Text
              style={[
                styles.tabsText,
                tab == 0 ? styles.tabsActiveText : {}
              ]}
            >
              Sign up
            </Text>
          </Pressable>
          <Pressable
            style={[
              styles.tabs,
              tab == 1 ? styles.tabsActive : {}
            ]}
            onPress={() => setTab(1)}
          >
            <Text
              style={[
                styles.tabsText,
                tab == 1 ? styles.tabsActiveText : {}
              ]}
            >
              Login
            </Text>
          </Pressable>
        </View>
        <View
          style={styles.tabsContentContainer}
        >
          {
            tab === 0 && (
              <View
                style={styles.tabsContent}
              >
                <View style={{gap:5}}>
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
            )
          }

          {
            tab === 1 && (
              <View
                style={styles.tabsContent}
              >
                <View style={{gap:5}}>
                  <Text style={styles.text}>
                    Email
                  </Text>
                  <TextInput
                    placeholder="**@**.com"
                    style={styles.textInput}
                  />
                </View>

                <View style={{gap:5}}>
                  <Text style={styles.text}>
                    Password
                  </Text>
                  <TextInput
                    placeholder="Password"
                    secureTextEntry={true}
                    style={styles.textInput}
                  />
                </View>

                <Pressable
                  style={({ pressed }) => [styles.button, pressed ? { backgroundColor: 'purple' } : {}]}
                >
                  <Text style={styles.buttonText}>
                    Login
                  </Text>
                </Pressable>
              </View>
            )
          }
        </View>
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
  tabarea: {
    width: '100%',
    height: '80%',
  },
  tabsbuttonarea: {
    width: '100%',
    height: 50,
    flexDirection: 'row'
  },
  tabs: {
    flex: 1,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabsActive: {
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    backgroundColor: 'white'
  },
  tabsText: {
    color: 'grey'
  },
  tabsActiveText: {
    color: '#665FD5'
  },
  tabsContentContainer: {
    flex: 1,
    backgroundColor: 'white'
  },
  tabsContent: {
    paddingHorizontal: 24,
    paddingVertical: 35,
    gap: 20
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