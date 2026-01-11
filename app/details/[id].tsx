import { Ionicons } from "@expo/vector-icons";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import { Alert, Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useCart } from "../../contexts/CartContext";

const DATA = [
    { id: "1", title: "Modern Living Room", price: "$450", category: "Living Room", image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=500&auto=format&fit=crop&q=60" },
    { id: "2", title: "Minimalist Kitchen", price: "$1200", category: "Kitchen", image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=500&auto=format&fit=crop&q=60" },
    { id: "3", title: "Cozy Bedroom", price: "$850", category: "Bedroom", image: "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=500&auto=format&fit=crop&q=60" },
    { id: "4", title: "Outdoor Patio", price: "$320", category: "Outdoor", image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=500&auto=format&fit=crop&q=60" },
    { id: "5", title: "Elegant Dining Table", price: "$680", category: "Dining", image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=500&auto=format&fit=crop&q=60" },
    { id: "6", title: "Office Desk Setup", price: "$540", category: "Office", image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=500&auto=format&fit=crop&q=60" },
    { id: "7", title: "Modern Sofa", price: "$920", category: "Living Room", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&auto=format&fit=crop&q=60" },
    { id: "8", title: "Bathroom Vanity", price: "$430", category: "Bathroom", image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=500&auto=format&fit=crop&q=60" },
];

export default function Details() {
    const { id } = useLocalSearchParams();
    const router = useRouter();
    const { addToCart } = useCart();

    const item = DATA.find((i) => i.id === id);

    const handleAddToCart = () => {
        if (item) {
            addToCart(item);
        }
    };

    const handleBuyNow = () => {
        Alert.alert(
            "Purchase",
            `Proceeding to checkout for ${item?.title}`,
            [{ text: "OK" }]
        );
    };

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

                    <View className="mb-4">
                        <Text className="text-gray-500 text-sm mb-2">Category</Text>
                        <Text className="text-gray-700 text-base font-semibold">{item.category}</Text>
                    </View>

                    <Text className="text-gray-600 leading-6 mb-8 text-base">
                        A beautiful {item.category.toLowerCase()} piece that will transform your space.
                        High-quality materials and elegant design make this a perfect addition to your home.
                    </Text>

                    <View className="flex-row gap-3">
                        <TouchableOpacity
                            className="flex-1 bg-white border-2 border-blue-500 py-4 rounded-xl items-center shadow-sm flex-row justify-center"
                            onPress={handleAddToCart}
                        >
                            <Ionicons name="cart-outline" size={20} color="#3b82f6" />
                            <Text className="text-blue-500 font-bold text-base ml-2">Add to Cart</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            className="flex-1 bg-blue-500 py-4 rounded-xl items-center shadow-md"
                            onPress={handleBuyNow}
                        >
                            <Text className="text-white font-bold text-base">Buy Now</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}
