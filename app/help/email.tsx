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

export default function EmailSupport() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    router.back();
  };

  return (
    <View className="flex-1 bg-white">
      <Stack.Screen options={{ title: "Email Support", headerShown: true }} />

      <ScrollView contentContainerClassName="p-6">
        <View className="items-center mb-8">
          <View className="w-20 h-20 rounded-full bg-blue-50 items-center justify-center">
            <Ionicons name="mail" size={40} color="#3b82f6" />
          </View>
          <Text className="text-gray-900 font-bold text-xl mt-4">
            Send us an email
          </Text>
          <Text className="text-gray-500 text-center mt-2">
            We'll get back to you within 24 hours
          </Text>
        </View>

        <View className="mb-4">
          <Text className="text-gray-500 font-bold text-xs uppercase mb-2 ml-1">
            Your Name
          </Text>
          <View className="bg-gray-50 border border-gray-100 rounded-2xl px-4 py-4">
            <TextInput
              value={name}
              onChangeText={setName}
              placeholder="Enter your name"
              className="text-gray-900 text-base"
              placeholderTextColor="#9ca3af"
            />
          </View>
        </View>

        <View className="mb-4">
          <Text className="text-gray-500 font-bold text-xs uppercase mb-2 ml-1">
            Email Address
          </Text>
          <View className="bg-gray-50 border border-gray-100 rounded-2xl px-4 py-4">
            <TextInput
              value={email}
              onChangeText={setEmail}
              placeholder="your@email.com"
              keyboardType="email-address"
              className="text-gray-900 text-base"
              placeholderTextColor="#9ca3af"
            />
          </View>
        </View>

        <View className="mb-4">
          <Text className="text-gray-500 font-bold text-xs uppercase mb-2 ml-1">
            Subject
          </Text>
          <View className="bg-gray-50 border border-gray-100 rounded-2xl px-4 py-4">
            <TextInput
              value={subject}
              onChangeText={setSubject}
              placeholder="What is this about?"
              className="text-gray-900 text-base"
              placeholderTextColor="#9ca3af"
            />
          </View>
        </View>

        <View className="mb-4">
          <Text className="text-gray-500 font-bold text-xs uppercase mb-2 ml-1">
            Message
          </Text>
          <View className="bg-gray-50 border border-gray-100 rounded-2xl px-4 py-4">
            <TextInput
              value={message}
              onChangeText={setMessage}
              placeholder="Describe your issue..."
              multiline
              numberOfLines={6}
              textAlignVertical="top"
              className="text-gray-900 text-base"
              placeholderTextColor="#9ca3af"
            />
          </View>
        </View>

        <TouchableOpacity
          onPress={handleSubmit}
          className="bg-blue-500 py-4 rounded-2xl items-center mt-8"
        >
          <Text className="text-white font-bold text-lg">Send Message</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
