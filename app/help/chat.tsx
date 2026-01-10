import { Ionicons } from "@expo/vector-icons";
import { Stack } from "expo-router";
import { useState } from "react";
import { ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";

const MOCK_MESSAGES = [
    { id: 1, text: "Hello! How can I help you today?", isBot: true, time: "10:30 AM" },
    { id: 2, text: "I need help with my order", isBot: false, time: "10:31 AM" },
    { id: 3, text: "I'd be happy to help! Could you provide your order number?", isBot: true, time: "10:31 AM" },
];

export default function LiveChat() {
    const [message, setMessage] = useState("");

    return (
        <View className="flex-1 bg-gray-50">
            <Stack.Screen options={{ title: "Live Chat", headerShown: true }} />

            <ScrollView className="flex-1 p-4">
                {MOCK_MESSAGES.map((msg) => (
                    <View key={msg.id} className={`mb-4 ${msg.isBot ? 'items-start' : 'items-end'}`}>
                        <View className={`max-w-[80%] p-4 rounded-2xl ${msg.isBot ? 'bg-white border border-gray-200' : 'bg-blue-500'}`}>
                            <Text className={msg.isBot ? 'text-gray-800' : 'text-white'}>{msg.text}</Text>
                            <Text className={`text-xs mt-1 ${msg.isBot ? 'text-gray-400' : 'text-blue-100'}`}>{msg.time}</Text>
                        </View>
                    </View>
                ))}
            </ScrollView>

            <View className="bg-white border-t border-gray-200 p-4">
                <View className="flex-row items-center bg-gray-50 rounded-full px-4 py-2">
                    <TextInput
                        value={message}
                        onChangeText={setMessage}
                        placeholder="Type your message..."
                        className="flex-1 text-gray-900"
                        placeholderTextColor="#9ca3af"
                    />
                    <TouchableOpacity className="ml-2 w-10 h-10 bg-blue-500 rounded-full items-center justify-center">
                        <Ionicons name="send" size={18} color="white" />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}
