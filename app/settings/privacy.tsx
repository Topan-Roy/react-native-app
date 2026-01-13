import { Ionicons } from "@expo/vector-icons";
import { Stack } from "expo-router";
import { ScrollView, Text, View } from "react-native";
export default function PrivacyPolicy() {
  return (
    <View className="flex-1 bg-white">
      <Stack.Screen options={{ title: "Privacy Policy", headerShown: false }} />
      <ScrollView contentContainerClassName="p-6">
        <View className="items-center mb-8">
          <View className="w-20 h-20 rounded-full bg-blue-50 items-center justify-center">
            <Ionicons name="shield-checkmark" size={40} color="#3b82f6" />
          </View>
          <Text className="text-gray-900 font-bold text-xl mt-4 text-center">
            Your Privacy Matters
          </Text>
        </View>
        <View className="mb-6">
          <Text className="text-gray-900 font-bold text-lg mb-2">
            1. Introduction
          </Text>
          <Text className="text-gray-600 leading-6 text-base">
            Welcome to our Privacy Policy. We value your privacy and are
            committed to protecting your personal data. This document explains
            how we collect, use, and safeguard your information when you use our
            app.
          </Text>
        </View>
        <View className="mb-6">
          <Text className="text-gray-900 font-bold text-lg mb-2">
            2. Data Collection
          </Text>
          <Text className="text-gray-600 leading-6 text-base">
            We may collect information such as your name, email address, and
            device usage statistics. This data is collected to provide you with
            a personalized experience and to improve our services.
          </Text>
        </View>
        <View className="mb-6">
          <Text className="text-gray-900 font-bold text-lg mb-2">
            3. Data Usage
          </Text>
          <Text className="text-gray-600 leading-6 text-base">
            Your data is primarily used to manage your account, process your
            orders, and notify you about important updates. We do not sell your
            personal data to third parties.
          </Text>
        </View>
        <View className="mb-6">
          <Text className="text-gray-900 font-bold text-lg mb-2">
            4. Security Measures
          </Text>
          <Text className="text-gray-600 leading-6 text-base">
            We implement industry-standard security protocols to protect your
            information. However, please be aware that no method of transmission
            over the internet is 100% secure.
          </Text>
        </View>
        <View className="mb-6">
          <Text className="text-gray-900 font-bold text-lg mb-2">
            5. Your Rights
          </Text>
          <Text className="text-gray-600 leading-6 text-base">
            You have the right to access, update, or delete your personal data
            at any time. You can manage most of these settings directly from
            your profile or contact our support team for assistance.
          </Text>
        </View>
        <View className="mt-12 mb-8 items-center">
          <Text className="text-gray-400 text-xs">
            Last Updated: January 2026
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}
