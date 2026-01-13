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
export default function EditProfile() {
  const router = useRouter();
  const [name, setName] = useState("Topan Roy");
  const [email, setEmail] = useState("topan.roy@example.com");
  const [bio, setBio] = useState(
    "Passionate about modern interior design and minimalist furniture."
  );
  const handleSave = () => {
    router.back();
  };
  return (
    <View className="flex-1 bg-white">
      <Stack.Screen options={{ title: "Edit Profile", headerShown: false }} />
      <ScrollView contentContainerClassName="p-4">
        <View className="items-center my-8">
          <View className="relative">
            <View className="w-32 h-32 rounded-full bg-blue-100 items-center justify-center">
              <Ionicons name="person" size={64} color="#3b82f6" />
            </View>

            <TouchableOpacity className="absolute bottom-0 right-0 bg-blue-500 w-10 h-10 rounded-full border-4 border-white items-center justify-center">
              <Ionicons name="camera" size={20} color="white" />
            </TouchableOpacity>
          </View>
          <Text className="text-blue-500 font-semibold mt-4">
            Change Profile Picture
          </Text>
        </View>
        <View className="mb-6">
          <Text className="text-gray-500 font-bold text-xs uppercase mb-2 ml-1">
            Full Name
          </Text>
          <View className="bg-gray-50 border border-gray-100 rounded-2xl px-4 py-4">
            <TextInput
              value={name}
              onChangeText={setName}
              placeholder="Enter your full name"
              className="text-gray-900 text-base"
              placeholderTextColor="#9ca3af"
            />
          </View>
        </View>
        <View className="mb-6">
          <Text className="text-gray-500 font-bold text-xs uppercase mb-2 ml-1">
            Email Address
          </Text>
          <View className="bg-gray-50 border border-gray-100 rounded-2xl px-4 py-4">
            <TextInput
              value={email}
              onChangeText={setEmail}
              placeholder="Enter your email"
              keyboardType="email-address"
              className="text-gray-900 text-base"
              placeholderTextColor="#9ca3af"
            />
          </View>
        </View>
        <View className="mb-6">
          <Text className="text-gray-500 font-bold text-xs uppercase mb-2 ml-1">
            Bio
          </Text>
          <View className="bg-gray-50 border border-gray-100 rounded-2xl px-4 py-4">
            <TextInput
              value={bio}
              onChangeText={setBio}
              placeholder="Tell us about yourself"
              multiline
              numberOfLines={4}
              textAlignVertical="top"
              className="text-gray-900 text-base"
              placeholderTextColor="#9ca3af"
            />
          </View>
        </View>
        <TouchableOpacity
          onPress={handleSave}
          className="bg-blue-500 py-4 rounded-2xl items-center mt-12"
        >
          <Text className="text-white font-bold text-lg">Save Changes</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
