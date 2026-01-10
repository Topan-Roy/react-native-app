import { Ionicons } from "@expo/vector-icons";
import { Link, Stack } from "expo-router";
import { ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";

const HELP_TOPICS = [
  { id: "track-order", title: "Track your order", icon: "cube-outline" },
  { id: "returns", title: "Return & Refund", icon: "refresh-outline" },
  { id: "account", title: "Account settings", icon: "person-outline" },
  { id: "payment", title: "Payment methods", icon: "card-outline" },
];

export default function HelpCenter() {
  return (
    <View className="flex-1 bg-gray-50">
      <Stack.Screen options={{ title: "Help Center", headerShown: true }} />

      <ScrollView className="px-6 pt-6">
        {/* Header */}
        <View className="mb-8">
          <Text className="text-2xl font-bold text-gray-900">Hi 👋</Text>
          <Text className="text-gray-500 mt-1">
            How can we help you today?
          </Text>
        </View>

        {/* Search */}
        <View className="bg-white border border-gray-200 rounded-xl px-4 py-3 flex-row items-center mb-8">
          <Ionicons name="search-outline" size={20} color="#9ca3af" />
          <TextInput
            placeholder="Search help articles..."
            className="flex-1 ml-3 text-gray-900"
            placeholderTextColor="#9ca3af"
          />
        </View>

        {/* Topics */}
        <Text className="text-gray-900 font-semibold text-lg mb-4">
          Help Topics
        </Text>

        <View className="space-y-3">
          {HELP_TOPICS.map(item => (
            <HelpCard key={item.id} {...item} />
          ))}
        </View>

        {/* Support Box */}
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

        <Text className="text-center text-gray-400 text-xs my-8">
          Help Center v1.2
        </Text>
      </ScrollView>
    </View>
  );
}

function HelpCard({
  id,
  title,
  icon,
}: {
  id: string;
  title: string;
  icon: any;
}) {
  return (
    <Link href={`/settings/help/${id}`} asChild>
      <TouchableOpacity className="flex-row items-center bg-white p-4 rounded-xl border border-gray-200">
        <View className="w-10 h-10 rounded-full bg-blue-50 items-center justify-center">
          <Ionicons name={icon} size={20} color="#2563eb" />
        </View>

        <Text className="flex-1 ml-4 text-gray-800 font-medium">
          {title}
        </Text>

        <Ionicons name="chevron-forward" size={18} color="#9ca3af" />
      </TouchableOpacity>
    </Link>
  );
}
