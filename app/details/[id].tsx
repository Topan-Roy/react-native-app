import { Ionicons } from "@expo/vector-icons";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

const DATA = [
    { id: "1", title: "Modern Living Room", price: "$450", description: "A beautiful modern living room setup with high-quality furniture and elegant design. Perfect for contemporary homes.", image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=800&auto=format&fit=crop&q=60" },
    { id: "2", title: "Minimalist Kitchen", price: "$1200", description: "Sleek and functional kitchen design with state-of-the-art appliances and minimal aesthetic.", image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=800&auto=format&fit=crop&q=60" },
    { id: "3", title: "Cozy Bedroom", price: "$850", description: "Transform your bedroom into a peaceful sanctuary with this cozy and warm furniture set.", image: "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=800&auto=format&fit=crop&q=60" },
    { id: "4", title: "Outdoor Patio", price: "$320", description: "Enjoy nature from the comfort of your patio with this durable and stylish outdoor set.", image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&auto=format&fit=crop&q=60" },
];

export default function Details() {
    const { id } = useLocalSearchParams();
    const router = useRouter();

    const item = DATA.find((i) => i.id === id);

    if (!item) {
        return (
            <View className="flex-1 items-center justify-center">
                <Text>Item not found</Text>
            </View>
        );
    }

    return (
        <View className="flex-1 bg-white">
            <Stack.Screen options={{
                title: item.title,
                headerLeft: () => (
                    <TouchableOpacity onPress={() => router.back()}>
                        <Ionicons name="arrow-back" size={24} color="black" style={{ marginLeft: 16 }} />
                    </TouchableOpacity>
                )
            }} />
            <ScrollView>
                <Image source={{ uri: item.image }} className="w-full h-80" />

                <View className="p-6">
                    <View className="flex-row justify-between items-center mb-4">
                        <Text className="text-2xl font-bold text-gray-900">{item.title}</Text>
                        <Text className="text-xl font-bold text-blue-600">{item.price}</Text>
                    </View>

                    <Text className="text-gray-600 leading-6 mb-8 text-lg">
                        {item.description}
                    </Text>

                    <TouchableOpacity className="bg-blue-500 py-4 rounded-xl items-center shadow-md">
                        <Text className="text-white font-bold text-lg">Buy Now</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
}
