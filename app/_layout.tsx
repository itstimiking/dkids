import { Stack } from "expo-router";

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
        headerTitleAlign: 'center'
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