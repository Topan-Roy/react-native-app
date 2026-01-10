import { Ionicons } from "@expo/vector-icons";
import { Link, Stack } from "expo-router";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function Help() {
    return (
        <View className="flex-1 bg-gray-50">
            <Stack.Screen options={{ title: "Help & Support", headerShown: true }} />
            <ScrollView className="p-4">
                <Text className="text-xl font-bold text-gray-900 mb-4">How can we help you?</Text>

                <View className="mb-6">
                    <Link href="/settings/help" asChild>
                        <HelpItem icon="book-outline" title="FAQs" description="Commonly asked questions and answers" />
                    </Link>
                    <Link href="/help/chat" asChild>
                        <HelpItem icon="chatbubble-ellipses-outline" title="Live Chat" description="Chat with our support team" />
                    </Link>
                    <Link href="/help/email" asChild>
                        <HelpItem icon="mail-outline" title="Email Support" description="Get help via email response" />
                    </Link>
                    <Link href="/help/phone" asChild>
                        <HelpItem icon="call-outline" title="Phone Support" description="Call us directly for urgent help" />
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

function HelpItem({ icon, title, description, ...props }: { icon: any, title: string, description: string, [key: string]: any }) {
    return (
        <TouchableOpacity {...props} className="flex-row items-center bg-white p-4 rounded-2xl mb-3 shadow-sm">
            <View className="w-12 h-12 rounded-xl bg-blue-50 items-center justify-center mr-4">
                <Ionicons name={icon} size={24} color="#3b82f6" />
            </View>
            <View className="flex-1">
                <Text className="text-lg font-bold text-gray-900">{title}</Text>
                <Text className="text-gray-500 text-sm">{description}</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#d1d5db" />
        </TouchableOpacity>
    );
}
