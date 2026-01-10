import { Link } from "expo-router";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";

const DATA = [
    { id: "1", title: "Modern Living Room", price: "$450", image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=500&auto=format&fit=crop&q=60" },
    { id: "2", title: "Minimalist Kitchen", price: "$1200", image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=500&auto=format&fit=crop&q=60" },
    { id: "3", title: "Cozy Bedroom", price: "$850", image: "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=500&auto=format&fit=crop&q=60" },
    { id: "4", title: "Outdoor Patio", price: "$320", image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=500&auto=format&fit=crop&q=60" },
      { id: "5", title: "Cozy Bedroom", price: "$850", image: "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=500&auto=format&fit=crop&q=60" },
];

export default function Home() {
    return (
        <View className="flex-1 bg-gray-50">
            <View className="px-4 py-6">
                <Text className="text-3xl font-bold text-gray-900">Discover</Text>
                <Text className="text-gray-500 mt-1">Find the best furniture for your home</Text>
            </View>

            <FlatList
                data={DATA}
                keyExtractor={(item) => item.id}
                contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 20 }}
                renderItem={({ item }) => (
                    <Link href={`/details/${item.id}`} asChild>
                        <TouchableOpacity className="bg-white rounded-2xl mb-4 overflow-hidden shadow-sm">
                            <Image source={{ uri: item.image }} className="w-full h-48" />
                            <View className="p-4">
                                <Text className="text-lg font-semibold text-gray-900">{item.title}</Text>
                                <Text className="text-blue-600 font-bold mt-1">{item.price}</Text>
                            </View>
                        </TouchableOpacity>
                    </Link>
                )}
            />
        </View>
    );
}
