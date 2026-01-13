import { Ionicons } from "@expo/vector-icons";
import { Stack, useRouter } from "expo-router";
import { useState } from "react";
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
export default function ChangePassword() {
  const router = useRouter();
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const handleChangePassword = () => {
    router.back();
  };
  return (
    <View className="flex-1 bg-white">
      <Stack.Screen
        options={{ title: "Change Password", headerShown: false }}
      />

      <ScrollView contentContainerClassName="p-4">
        <View className="items-center my-8">
          <View className="w-20 h-20 rounded-full bg-blue-50 items-center justify-center">
            <Ionicons name="lock-closed" size={40} color="#3b82f6" />
          </View>
          <Text className="text-gray-900 font-bold text-xl mt-4">Security</Text>
          <Text className="text-gray-500 text-center mt-2 px-6">
            Ensure your account is secure by using a strong password.
          </Text>
        </View>
        <View className="mb-6">
          <Text className="text-gray-500 font-bold text-xs uppercase mb-2 ml-1">
            Current Password
          </Text>
          <View className="bg-gray-50 border border-gray-100 rounded-2xl px-4 py-4 flex-row items-center">
            <TextInput
              value={currentPassword}
              onChangeText={setCurrentPassword}
              placeholder="Enter current password"
              secureTextEntry={!showCurrent}
              className="flex-1 text-gray-900 text-base"
              placeholderTextColor="#9ca3af"
            />
            <TouchableOpacity onPress={() => setShowCurrent(!showCurrent)}>
              <Ionicons
                name={showCurrent ? "eye-off-outline" : "eye-outline"}
                size={20}
                color="#9ca3af"
              />
            </TouchableOpacity>
          </View>
        </View>
        <View className="mb-6">
          <Text className="text-gray-500 font-bold text-xs uppercase mb-2 ml-1">
            New Password
          </Text>

          <View className="bg-gray-50 border border-gray-100 rounded-2xl px-4 py-4 flex-row items-center">
            <TextInput
              value={newPassword}
              onChangeText={setNewPassword}
              placeholder="Enter new password"
              secureTextEntry={!showNew}
              className="flex-1 text-gray-900 text-base"
              placeholderTextColor="#9ca3af"
            />
            <TouchableOpacity onPress={() => setShowNew(!showNew)}>
              <Ionicons
                name={showNew ? "eye-off-outline" : "eye-outline"}
                size={20}
                color="#9ca3af"
              />
            </TouchableOpacity>
          </View>
        </View>
        <View className="mb-6">
          <Text className="text-gray-500 font-bold text-xs uppercase mb-2 ml-1">
            Confirm New Password
          </Text>
          <View className="bg-gray-50 border border-gray-100 rounded-2xl px-4 py-4 flex-row items-center">
            <TextInput
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              placeholder="Confirm your new password"
              secureTextEntry={!showConfirm}
              className="flex-1 text-gray-900 text-base"
              placeholderTextColor="#9ca3af"
            />
            <TouchableOpacity onPress={() => setShowConfirm(!showConfirm)}>
              <Ionicons
                name={showConfirm ? "eye-off-outline" : "eye-outline"}
                size={20}
                color="#9ca3af"
              />
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity
          onPress={handleChangePassword}
          className="bg-blue-500 py-4 rounded-2xl items-center mt-12"
        >
          <Text className="text-white font-bold text-lg">Update Password</Text>
        </TouchableOpacity>
        <View className="mt-6">
          <Text className="text-gray-400 text-sm text-center">
            Minimum 8 characters, including letters and numbers.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}
