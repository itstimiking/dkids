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
            <View
              style={{
                height: 0,
                width: 0,
                backgroundColor: 'transparent',
                borderRightWidth: 20,
                borderBottomWidth: 0,
                borderTopWidth: 40,
                borderLeftWidth: 0,
                borderRightColor: 'white',
                borderTopColor: 'transparent',
                opacity: tab==0 ? 1 : 0,
                marginLeft:-14
              }}
            />
            <View style={styles.tabsinner}>
              <Text
                style={[
                  styles.tabsText,
                  tab == 0 ? styles.tabsActiveText : {}
                ]}
              >
                Sign up
              </Text>

            </View>

            <View
              style={{
                height: 0,
                width: 0,
                backgroundColor: 'transparent',
                borderLeftWidth: 20,
                borderBottomWidth: 0,
                borderTopWidth: 40,
                borderRightWidth: 0,
                borderLeftColor: 'white',
                borderTopColor: 'transparent',
                opacity: tab==0 ? 1 : 0,
                marginRight:-14
              }}
            />
          </Pressable>

          <Pressable
            style={[
              styles.tabs,
              tab == 1 ? styles.tabsActive : {}
            ]}
            onPress={() => setTab(1)}
          >
            <View
              style={{
                height: 0,
                width: 0,
                backgroundColor: 'transparent',
                borderRightWidth: 20,
                borderBottomWidth: 0,
                borderTopWidth: 40,
                borderLeftWidth: 0,
                borderRightColor: 'white',
                borderTopColor: 'transparent',
                opacity: tab==1 ? 1 : 0,
                marginLeft:-14
              }}
            />
            <View style={styles.tabsinner}>
              <Text
                style={[
                  styles.tabsText,
                  tab == 1 ? styles.tabsActiveText : {}
                ]}
              >
                Login
              </Text>

            </View>

            <View
              style={{
                height: 0,
                width: 0,
                backgroundColor: 'transparent',
                borderLeftWidth: 20,
                borderBottomWidth: 0,
                borderTopWidth: 40,
                borderRightWidth: 0,
                borderLeftColor: 'white',
                borderTopColor: 'transparent',
                opacity: tab==1 ? 1 : 0,
                marginRight:-14
              }}
            />
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
            )
          }

          {
            tab === 1 && (
              <View
                style={styles.tabsContent}
              >
                <View style={{ gap: 5 }}>
                  <Text style={styles.text}>
                    Email
                  </Text>
                  <TextInput
                    placeholder="**@**.com"
                    style={styles.textInput}
                  />
                </View>

                <View style={{ gap: 5 }}>
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
    height: 40,
    flexDirection: 'row'
  },
  tabs: {
    flex: 1,
    height: '100%',
    flexDirection: 'row',
    marginHorizontal:10
  },
  tabsinner:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  tabsActive: {
    backgroundColor: 'white',
    borderTopLeftRadius: 13,
    borderTopRightRadius: 13,
  },
  tabsText: {
    color: 'grey'
  },
  tabsActiveText: {
    color: '#665FD5'
  },
  tabsContentContainer: {
    flex: 1,
    backgroundColor: 'white',
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