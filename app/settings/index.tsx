import { Ionicons } from "@expo/vector-icons";
import { Link, Stack } from "expo-router";
import { useState } from "react";
import { ScrollView, Switch, Text, TouchableOpacity, View } from "react-native";
export default function Settings() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isNotificationsEnabled, setIsNotificationsEnabled] = useState(true);
  return (
    <View className="flex-1 bg-gray-50 mt-10">
      <Stack.Screen options={{ title: "Settings", headerShown: false }} />
      <ScrollView>
        <View className="mt-4">
          <Text className="px-4 py-2 text-xs font-bold text-gray-500 uppercase tracking-widest">
            Account
          </Text>

          <Link href="/settings/edit" asChild>
            <TouchableOpacity className="flex-row items-center bg-white px-4 py-4 border-b border-gray-100">
              <Ionicons name="person-outline" size={22} color="#4b5563" />
              <Text className="flex-1 ml-4 text-gray-700 text-base">
                Edit Profile
              </Text>
              <Ionicons name="chevron-forward" size={18} color="#d1d5db" />
            </TouchableOpacity>
          </Link>
          <TouchableOpacity className="flex-row items-center bg-white px-4 py-4 border-b border-gray-100">
            <Ionicons name="language-outline" size={22} color="#4b5563" />
            <Text className="flex-1 ml-4 text-gray-700 text-base">
              Language
            </Text>
            <Text className="mr-2 text-gray-400">English</Text>
            <Ionicons name="chevron-forward" size={18} color="#d1d5db" />
          </TouchableOpacity>
        </View>
        <View className="mt-4">
          <Text className="px-4 py-2 text-xs font-bold text-gray-500 uppercase tracking-widest">
            Preferences
          </Text>
          <View className="flex-row items-center bg-white px-4 py-3 border-b border-gray-100">
            <Ionicons name="moon-outline" size={22} color="#4b5563" />
            <Text className="flex-1 ml-4 text-gray-700 text-base">
              Dark Mode
            </Text>
            <Switch
              value={isDarkMode}
              onValueChange={setIsDarkMode}
              trackColor={{ false: "#d1d5db", true: "#3b82f6" }}
              thumbColor="#ffffff"
            />
          </View>

          <View className="flex-row items-center bg-white px-4 py-3 border-b border-gray-100">
            <Ionicons name="notifications-outline" size={22} color="#4b5563" />
            <Text className="flex-1 ml-4 text-gray-700 text-base">
              Notifications
            </Text>
            <Switch
              value={isNotificationsEnabled}
              onValueChange={setIsNotificationsEnabled}
              trackColor={{ false: "#d1d5db", true: "#3b82f6" }}
              thumbColor="#ffffff"
            />
          </View>
        </View>
        <View className="mt-4">
          <Text className="px-4 py-2 text-xs font-bold text-gray-500 uppercase tracking-widest">
            Security
          </Text>
          <Link href="/settings/password" asChild>
            <TouchableOpacity className="flex-row items-center bg-white px-4 py-4 border-b border-gray-100">
              <Ionicons name="lock-closed-outline" size={22} color="#4b5563" />
              <Text className="flex-1 ml-4 text-gray-700 text-base">
                Change Password
              </Text>
              <Ionicons name="chevron-forward" size={18} color="#d1d5db" />
            </TouchableOpacity>
          </Link>
          <Link href="/settings/privacy" asChild>
            <TouchableOpacity className="flex-row items-center bg-white px-4 py-4 border-b border-gray-100">
              <Ionicons
                name="shield-checkmark-outline"
                size={22}
                color="#4b5563"
              />
              <Text className="flex-1 ml-4 text-gray-700 text-base">
                Privacy Policy
              </Text>
              <Ionicons name="chevron-forward" size={18} color="#d1d5db" />
            </TouchableOpacity>
          </Link>
        </View>
        <View className="mt-4 mb-10">
          <Text className="px-4 py-2 text-xs font-bold text-gray-500 uppercase tracking-widest">
            Support
          </Text>
          <Link href="/settings/help" asChild>
            <TouchableOpacity className="flex-row items-center bg-white px-4 py-4 border-b border-gray-100">
              <Ionicons name="help-circle-outline" size={22} color="#4b5563" />
              <Text className="flex-1 ml-4 text-gray-700 text-base">
                Help Center
              </Text>
              <Ionicons name="chevron-forward" size={18} color="#d1d5db" />
            </TouchableOpacity>
          </Link>
          <TouchableOpacity className="flex-row items-center bg-white px-4 py-4 border-b border-gray-100">
            <Ionicons
              name="information-circle-outline"
              size={22}
              color="#4b5563"
            />
            <Text className="flex-1 ml-4 text-gray-700 text-base">
              About App
            </Text>
            <Text className="mr-2 text-gray-400">v1.0.0</Text>
            <Ionicons name="chevron-forward" size={18} color="#d1d5db" />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
