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
                    <ProfileItem icon="settings-outline" label="Settings" />
                </Link>
                <Link href="/wishlist" asChild>
                    <ProfileItem icon="heart-outline" label="Wishlist" />
                </Link>
                <Link href="/notifications" asChild>
                    <ProfileItem icon="notifications-outline" label="Notifications" />
                </Link>
                <Link href="/help" asChild>
                    <ProfileItem icon="help-circle-outline" label="Help & Support" />
                </Link>

                <TouchableOpacity className="mt-6 flex-row items-center py-4 px-2">
                    <Ionicons name="log-out-outline" size={24} color="#ef4444" />
                    <Text className="ml-4 text-red-500 font-semibold">Log Out</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

function ProfileItem({ icon, label, ...props }: { icon: any, label: string, [key: string]: any }) {
    return (
        <TouchableOpacity {...props} className="flex-row items-center py-4 border-b border-gray-100">
            <Ionicons name={icon} size={24} color="#4b5563" />
            <Text className="flex-1 ml-4 text-gray-700 font-medium">{label}</Text>
            <Ionicons name="chevron-forward" size={20} color="#d1d5db" />
        </TouchableOpacity>
    );
}

