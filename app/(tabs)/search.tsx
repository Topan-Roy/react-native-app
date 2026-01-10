import { Ionicons } from "@expo/vector-icons";
import { Text, TextInput, View } from "react-native";

export default function Search() {
    return (
        <View className="flex-1 bg-gray-50 px-4 pt-6">
            <View className="flex-row items-center bg-white rounded-xl px-4 py-2 shadow-sm border border-gray-100">
                <Ionicons name="search" size={20} color="#9ca3af" />
                <TextInput
                    placeholder="Search items..."
                    className="flex-1 ml-2 text-gray-900"
                />
            </View>

            <View className="flex-1 items-center justify-center">
                <Ionicons name="search-outline" size={64} color="#e5e7eb" />
                <Text className="text-gray-400 mt-4 text-center">
                    Find your favorite items by searching above
                </Text>
            </View>
        </View>
    );
}
