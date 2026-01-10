import { Stack } from "expo-router";
import "./global.css";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="details/[id]" options={{ title: "Details" }} />
      <Stack.Screen name="settings/index" options={{ title: "Settings" }} />
      <Stack.Screen name="settings/edit" options={{ title: "Edit Profile" }} />
      <Stack.Screen name="settings/password" options={{ title: "Change Password" }} />
      <Stack.Screen name="settings/privacy" options={{ title: "Privacy Policy" }} />
      <Stack.Screen name="settings/help" options={{ title: "Help Center" }} />
      <Stack.Screen name="settings/help/[id]" options={{ title: "Help Article" }} />
      <Stack.Screen name="wishlist/index" options={{ title: "Wishlist" }} />
      <Stack.Screen name="notifications/index" options={{ title: "Notifications" }} />
      <Stack.Screen name="help/index" options={{ title: "Help & Support" }} />
      <Stack.Screen name="help/chat" options={{ title: "Live Chat" }} />
      <Stack.Screen name="help/email" options={{ title: "Email Support" }} />
      <Stack.Screen name="help/phone" options={{ title: "Phone Support" }} />
    </Stack>
  );
}
