import { Ionicons } from "@expo/vector-icons";
import { Link, Stack } from "expo-router";
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const HELP_TOPICS = [
  { id: "track-order", title: "Track your order", icon: "cube-outline" },
  { id: "returns", title: "Return & Refund", icon: "refresh-outline" },
  { id: "account", title: "Account settings", icon: "person-outline" },
  { id: "payment", title: "Payment methods", icon: "card-outline" },
];

export default function HelpCenter() {
  return (
    <View className="flex-1 bg-gray-50 mt-10">
      <Stack.Screen options={{ title: "Help Center", headerShown: false }} />

      <ScrollView contentContainerClassName="px-6 pt-6">
        <View className="mb-8">
          <Text className="text-2xl font-bold text-gray-900">Hi 👋</Text>
          <Text className="text-gray-500 mt-1">How can we help you today?</Text>
        </View>
        <View className="bg-white border border-gray-200 rounded-xl px-4 py-3 flex-row items-center mb-8">
          <Ionicons name="search-outline" size={20} color="#9ca3af" />
          <TextInput
            placeholder="Search help articles..."
            className="flex-1 ml-3 text-gray-900"
            placeholderTextColor="#9ca3af"
          />
        </View>
        <Text className="text-gray-900 font-semibold text-lg mb-4">
          Help Topics
        </Text>

        <View>
          {HELP_TOPICS.map((item) => (
            <Link key={item.id} href={`/settings/help/${item.id}`} asChild>
              <TouchableOpacity className="flex-row items-center bg-white p-4 rounded-xl border border-gray-200 mb-3">
                <View className="w-10 h-10 rounded-full bg-blue-50 items-center justify-center">
                  <Ionicons name={item.icon} size={20} color="#2563eb" />
                </View>

                <Text className="flex-1 ml-4 text-gray-800 font-medium">
                  {item.title}
                </Text>

                <Ionicons name="chevron-forward" size={18} color="#9ca3af" />
              </TouchableOpacity>
            </Link>
          ))}
        </View>

        <View className="mt-12 bg-blue-600 p-6 rounded-2xl">
          <Text className="text-white font-bold text-lg mb-2">
            Need more help?
          </Text>
          <Text className="text-blue-100 mb-4">
            Contact our support team anytime.
          </Text>

          <TouchableOpacity className="bg-white py-3 rounded-xl">
            <Text className="text-blue-600 font-semibold text-center">
              Contact Support
            </Text>
          </TouchableOpacity>
        </View>

        {/* Footer */}
        <Text className="text-center text-gray-400 text-xs my-8">
          Help Center v1.2
        </Text>
      </ScrollView>
    </View>
  );
}
