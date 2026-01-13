import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function Profile() {
  return (
    <View className="flex-1 bg-gray-50">
      <View className="items-center py-10 bg-white border-b border-gray-100">
        <View className="w-24 h-24 rounded-full bg-blue-100 items-center justify-center mb-4">
          <Ionicons name="person" size={48} color="#3b82f6" />
        </View>
        <Text className="text-xl font-bold text-gray-900">Topan Roy</Text>
        <Text className="text-gray-500">topan.roy@example.com</Text>
      </View>

      <View className="mt-6 px-4">
        <Link href="/settings" asChild>
          <TouchableOpacity className="flex-row items-center py-4 border-b border-gray-100">
            <Ionicons name="settings-outline" size={24} color="#4b5563" />
            <Text className="flex-1 ml-4 text-gray-700 font-medium">
              Settings
            </Text>
            <Ionicons name="chevron-forward" size={20} color="#d1d5db" />
          </TouchableOpacity>
        </Link>

        <Link href="/wishlist" asChild>
          <TouchableOpacity className="flex-row items-center py-4 border-b border-gray-100">
            <Ionicons name="heart-outline" size={24} color="#4b5563" />
            <Text className="flex-1 ml-4 text-gray-700 font-medium">
              Wishlist
            </Text>
            <Ionicons name="chevron-forward" size={20} color="#d1d5db" />
          </TouchableOpacity>
        </Link>

        <Link href="/notifications" asChild>
          <TouchableOpacity className="flex-row items-center py-4 border-b border-gray-100">
            <Ionicons name="notifications-outline" size={24} color="#4b5563" />
            <Text className="flex-1 ml-4 text-gray-700 font-medium">
              Notifications
            </Text>
            <Ionicons name="chevron-forward" size={20} color="#d1d5db" />
          </TouchableOpacity>
        </Link>

        <Link href="/help" asChild>
          <TouchableOpacity className="flex-row items-center py-4 border-b border-gray-100">
            <Ionicons name="help-circle-outline" size={24} color="#4b5563" />
            <Text className="flex-1 ml-4 text-gray-700 font-medium">
              Help & Support
            </Text>
            <Ionicons name="chevron-forward" size={20} color="#d1d5db" />
          </TouchableOpacity>
        </Link>

        <TouchableOpacity className="mt-6 flex-row items-center py-4 px-2">
          <Ionicons name="log-out-outline" size={24} color="#ef4444" />
          <Text className="ml-4 text-red-500 font-semibold">Log Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
