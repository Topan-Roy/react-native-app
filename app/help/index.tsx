import { Ionicons } from "@expo/vector-icons";
import { Link, Stack } from "expo-router";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
export default function Help() {
  return (
    <View className="flex-1 bg-gray-50">
      <Stack.Screen options={{ title: "Help & Support", headerShown: true }} />
      <ScrollView className="p-4">
        <Text className="text-xl font-bold text-gray-900 mb-4">
          How can we help you?
        </Text>
        <View className="mb-6">
          <Link href="/settings/help" asChild>
            <TouchableOpacity className="flex-row items-center bg-white p-4 rounded-2xl mb-3 shadow-sm">
              <View className="w-12 h-12 rounded-xl bg-blue-50 items-center justify-center mr-4">
                <Ionicons name="book-outline" size={24} color="#3b82f6" />
              </View>
              <View className="flex-1">
                <Text className="text-lg font-bold text-gray-900">FAQs</Text>
                <Text className="text-gray-500 text-sm">
                  Commonly asked questions and answers
                </Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color="#d1d5db" />
            </TouchableOpacity>
          </Link>

          <Link href="/help/chat" asChild>
            <TouchableOpacity className="flex-row items-center bg-white p-4 rounded-2xl mb-3 shadow-sm">
              <View className="w-12 h-12 rounded-xl bg-blue-50 items-center justify-center mr-4">
                <Ionicons
                  name="chatbubble-ellipses-outline"
                  size={24}
                  color="#3b82f6"
                />
              </View>
              <View className="flex-1">
                <Text className="text-lg font-bold text-gray-900">
                  Live Chat
                </Text>
                <Text className="text-gray-500 text-sm">
                  Chat with our support team
                </Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color="#d1d5db" />
            </TouchableOpacity>
          </Link>
          <Link href="/help/email" asChild>
            <TouchableOpacity className="flex-row items-center bg-white p-4 rounded-2xl mb-3 shadow-sm">
              <View className="w-12 h-12 rounded-xl bg-blue-50 items-center justify-center mr-4">
                <Ionicons name="mail-outline" size={24} color="#3b82f6" />
              </View>
              <View className="flex-1">
                <Text className="text-lg font-bold text-gray-900">
                  Email Support
                </Text>
                <Text className="text-gray-500 text-sm">
                  Get help via email response
                </Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color="#d1d5db" />
            </TouchableOpacity>
          </Link>

          <Link href="/help/phone" asChild>
            <TouchableOpacity className="flex-row items-center bg-white p-4 rounded-2xl mb-3 shadow-sm">
              <View className="w-12 h-12 rounded-xl bg-blue-50 items-center justify-center mr-4">
                <Ionicons name="call-outline" size={24} color="#3b82f6" />
              </View>
              <View className="flex-1">
                <Text className="text-lg font-bold text-gray-900">
                  Phone Support
                </Text>
                <Text className="text-gray-500 text-sm">
                  Call us directly for urgent help
                </Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color="#d1d5db" />
            </TouchableOpacity>
          </Link>
        </View>
        <TouchableOpacity className="bg-blue-500 p-4 rounded-xl items-center shadow-sm">
          <Text className="text-white font-bold text-lg">Contact Us</Text>
        </TouchableOpacity>
        <Text className="text-gray-400 text-center mt-10 text-xs">
          App Version 1.0.0 (Build 2026)
        </Text>
      </ScrollView>
    </View>
  );
}
