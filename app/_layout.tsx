import { AntDesign } from "@expo/vector-icons";
import { Stack, router } from "expo-router";
import { Pressable } from "react-native";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#665FD5',
        },
        headerTitleStyle: {
          color: '#fff',
        },
        headerTitleAlign: 'center',
        headerLeft:(route)=>(
          router.canGoBack() ?
          <Pressable onPress={()=>router.back()}>
            <AntDesign name="arrowleft" size={24} color="#fff" />
          </Pressable> : <></>
        ),
        headerBackVisible:false
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          headerTitle: 'Home',
        }}
      />
      <Stack.Screen
        name="onboarding"
        options={{
          headerTitle: 'Onboarding',
        }}
      />

      <Stack.Screen
        name="acknowledgement"
        options={{
          headerTitle: 'Acknowledgement',
        }}
      />
    </Stack>
  );
}