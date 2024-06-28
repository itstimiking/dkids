import { MaterialIcons } from "@expo/vector-icons";
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
            <MaterialIcons name="arrow-back-ios" size={24} color="black" style={{color:'#fff'}} />
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