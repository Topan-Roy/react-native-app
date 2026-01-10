import { Ionicons } from "@expo/vector-icons";
import { Link, Stack } from "expo-router";
import { ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function HelpCenter() {
    return (
        <View className="flex-1 bg-white">
            <Stack.Screen options={{ title: "Help Center", headerShown: true }} />
            <ScrollView className="p-6">
                <View className="items-center mb-8">
                    <View className="w-20 h-20 rounded-full bg-blue-50 items-center justify-center">
                        <Ionicons name="help-circle" size={40} color="#3b82f6" />
                    </View>
                    <Text className="text-gray-900 font-bold text-xl mt-4 text-center">How can we help you?</Text>
                </View>

                {/* Search Bar */}
                <View className="bg-gray-50 border border-gray-100 rounded-2xl px-4 py-3 flex-row items-center mb-8">
                    <Ionicons name="search-outline" size={20} color="#9ca3af" />
                    <TextInput
                        placeholder="Search for articles, topics..."
                        className="flex-1 ml-3 text-gray-900 text-base"
                        placeholderTextColor="#9ca3af"
                    />
                </View>

                <Text className="text-gray-900 font-bold text-lg mb-4">Popular Topics</Text>

                <View className="space-y-4">
                    <TopicItem id="track-order" title="How to track my order?" />
                    <TopicItem id="returns" title="Return and Refund Policy" />
                    <TopicItem id="account" title="Changing account information" />
                    <TopicItem id="payment" title="Payment methods accepted" />
                </View>

                <View className="mt-12 bg-blue-50 p-6 rounded-3xl items-center">
                    <Text className="text-gray-900 font-bold text-lg mb-2">Still need help?</Text>
                    <Text className="text-gray-500 text-center mb-6"> Our support team is available 24/7 to assist you with any questions.</Text>
                    <TouchableOpacity className="bg-blue-500 px-8 py-3 rounded-xl shadow-sm">
                        <Text className="text-white font-bold">Contact Support</Text>
                    </TouchableOpacity>
                </View>

                <View className="mt-12 mb-8 items-center">
                    <Text className="text-gray-400 text-xs">Help Center v1.2</Text>
                </View>
            </ScrollView>
        </View>
    );
}

function TopicItem({ id, title, ...props }: { id: string, title: string, [key: string]: any }) {
    return (
        <Link href={`/settings/help/${id}`} asChild>
            <TouchableOpacity {...props} className="flex-row items-center bg-white p-4 rounded-2xl border border-gray-100 mb-3">
                <Ionicons name="document-text-outline" size={22} color="#3b82f6" />
                <Text className="flex-1 ml-4 text-gray-700 font-medium text-base">{title}</Text>
                <Ionicons name="chevron-forward" size={18} color="#d1d5db" />
            </TouchableOpacity>
        </Link>
    );
}
