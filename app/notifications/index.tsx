import { Ionicons } from "@expo/vector-icons";
import { Stack } from "expo-router";
import { FlatList, Text, View } from "react-native";

const NOTIFICATIONS = [
    { id: "1", title: "Order Confirmed!", message: "Your order for 'Modern Living Room' has been confirmed.", time: "2h ago", icon: "cart-outline", color: "bg-green-100", iconColor: "#10b981" },
    { id: "2", title: "Flash Sale Alert!", message: "Up to 50% off on bedroom furniture starting today.", time: "5h ago", icon: "megaphone-outline", color: "bg-blue-100", iconColor: "#3b82f6" },
    { id: "3", title: "Profile Update", message: "Your profile information was successfully updated.", time: "1d ago", icon: "person-outline", color: "bg-gray-100", iconColor: "#6b7280" },
];

export default function Notifications() {
    return (
        <View className="flex-1 bg-gray-50">
            <Stack.Screen options={{ title: "Notifications", headerShown: true }} />
            <FlatList
                data={NOTIFICATIONS}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View className="bg-white px-4 py-4 border-b border-gray-100 flex-row">
                        <View className={`w-12 h-12 rounded-full ${item.color} items-center justify-center mr-4`}>
                            <Ionicons name={item.icon as any} size={24} color={item.iconColor} />
                        </View>
                        <View className="flex-1">
                            <View className="flex-row justify-between items-center mb-1">
                                <Text className="text-base font-bold text-gray-900">{item.title}</Text>
                                <Text className="text-xs text-gray-400">{item.time}</Text>
                            </View>
                            <Text className="text-gray-600 leading-5">{item.message}</Text>
                        </View>
                    </View>
                )}
            />
        </View>
    );
}
