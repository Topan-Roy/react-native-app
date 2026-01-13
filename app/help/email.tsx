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
    // In a real app, send email here
    router.back();
  };

  return (
    <View className="flex-1 bg-white">
      <Stack.Screen options={{ title: "Email Support", headerShown: true }} />
      <ScrollView className="p-6">
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

        <View className="space-y-4">
          <InputField
            label="Your Name"
            value={name}
            onChangeText={setName}
            placeholder="Enter your name"
          />
          <InputField
            label="Email Address"
            value={email}
            onChangeText={setEmail}
            placeholder="your@email.com"
            keyboardType="email-address"
          />
          <InputField
            label="Subject"
            value={subject}
            onChangeText={setSubject}
            placeholder="What is this about?"
          />
          <InputField
            label="Message"
            value={message}
            onChangeText={setMessage}
            placeholder="Describe your issue..."
            multiline
            numberOfLines={6}
          />
        </View>

        <TouchableOpacity
          onPress={handleSubmit}
          className="bg-blue-500 py-4 rounded-2xl items-center mt-8 shadow-md active:bg-blue-600"
        >
          <Text className="text-white font-bold text-lg">Send Message</Text>
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
      <View className="bg-gray-50 border border-gray-100 rounded-2xl px-4 py-4">
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
