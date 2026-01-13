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
      <ScrollView className="p-4">
        <View className="items-center my-8">
          <View className="relative">
            <View className="w-32 h-32 rounded-full bg-blue-100 items-center justify-center">
              <Ionicons name="person" size={64} color="#3b82f6" />
            </View>
            <TouchableOpacity className="absolute bottom-0 right-0 bg-blue-500 w-10 h-10 rounded-full border-4 border-white items-center justify-center shadow-sm">
              <Ionicons name="camera" size={20} color="white" />
            </TouchableOpacity>
          </View>
          <Text className="text-blue-500 font-semibold mt-4">
            Change Profile Picture
          </Text>
        </View>

        <View className="space-y-6">
          <InputField
            label="Full Name"
            value={name}
            onChangeText={setName}
            placeholder="Enter your full name"
          />
          <InputField
            label="Email Address"
            value={email}
            onChangeText={setEmail}
            placeholder="Enter your email"
            keyboardType="email-address"
          />
          <InputField
            label="Bio"
            value={bio}
            onChangeText={setBio}
            placeholder="Tell us about yourself"
            multiline
            numberOfLines={4}
          />
        </View>

        <TouchableOpacity
          onPress={handleSave}
          className="bg-blue-500 py-4 rounded-2xl items-center mt-12 shadow-md active:bg-blue-600"
        >
          <Text className="text-white font-bold text-lg">Save Changes</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

function InputField({
  label,
  value,
  onChangeText,
  placeholder,
  ...props
}: any) {
  return (
    <View className="mb-4">
      <Text className="text-gray-500 font-bold text-xs uppercase mb-2 ml-1">
        {label}
      </Text>
      <View className="bg-gray-50 border border-gray-100 rounded-2xl px-4 py-4 focus:border-blue-500">
        <TextInput
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          className="text-gray-900 text-base"
          placeholderTextColor="#9ca3af"
          textAlignVertical={props.multiline ? "top" : "center"}
          {...props}
        />
      </View>
    </View>
  );
}
