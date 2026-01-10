import { Ionicons } from "@expo/vector-icons";
import { Stack } from "expo-router";
import { Linking, ScrollView, Text, TouchableOpacity, View } from "react-native";

const PHONE_NUMBERS = [
    { region: "United States", number: "+1 (800) 123-4567", hours: "24/7" },
    { region: "United Kingdom", number: "+44 20 1234 5678", hours: "9 AM - 6 PM GMT" },
    { region: "Australia", number: "+61 2 1234 5678", hours: "9 AM - 5 PM AEST" },
];

export default function PhoneSupport() {
    const handleCall = (number: string) => {
        const phoneNumber = number.replace(/[^0-9+]/g, '');
        Linking.openURL(`tel:${phoneNumber}`);
    };

    return (
        <View className="flex-1 bg-white">
            <Stack.Screen options={{ title: "Phone Support", headerShown: true }} />
            <ScrollView className="p-6">
                <View className="items-center mb-8">
                    <View className="w-20 h-20 rounded-full bg-blue-50 items-center justify-center">
                        <Ionicons name="call" size={40} color="#3b82f6" />
                    </View>
                    <Text className="text-gray-900 font-bold text-xl mt-4">Call us directly</Text>
                    <Text className="text-gray-500 text-center mt-2">Speak with our support team</Text>
                </View>

                <Text className="text-gray-900 font-bold text-lg mb-4">Contact Numbers</Text>

                {PHONE_NUMBERS.map((item, index) => (
                    <View key={index} className="bg-gray-50 p-5 rounded-2xl mb-4 border border-gray-100">
                        <View className="flex-row items-center mb-3">
                            <Ionicons name="location-outline" size={20} color="#3b82f6" />
                            <Text className="ml-2 text-gray-900 font-semibold text-base">{item.region}</Text>
                        </View>

                        <TouchableOpacity
                            onPress={() => handleCall(item.number)}
                            className="flex-row items-center mb-2"
                        >
                            <Ionicons name="call-outline" size={18} color="#3b82f6" />
                            <Text className="ml-2 text-blue-500 font-bold text-lg">{item.number}</Text>
                        </TouchableOpacity>

                        <View className="flex-row items-center">
                            <Ionicons name="time-outline" size={18} color="#9ca3af" />
                            <Text className="ml-2 text-gray-500">{item.hours}</Text>
                        </View>
                    </View>
                ))}

                <View className="mt-8 bg-blue-50 p-6 rounded-2xl">
                    <Text className="text-gray-900 font-bold mb-2">Before you call</Text>
                    <Text className="text-gray-600 leading-6">
                        Please have your order number or account details ready. This helps us serve you faster.
                    </Text>
                </View>
            </ScrollView>
        </View>
    );
}
