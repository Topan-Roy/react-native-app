import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { useState } from "react";
import { FlatList, Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useCart } from "../../contexts/CartContext";

const ALL_ITEMS = [
    { id: "1", title: "Modern Living Room", price: "$450", category: "Living Room", image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=500&auto=format&fit=crop&q=60" },
    { id: "2", title: "Minimalist Kitchen", price: "$1200", category: "Kitchen", image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=500&auto=format&fit=crop&q=60" },
    { id: "3", title: "Cozy Bedroom", price: "$850", category: "Bedroom", image: "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=500&auto=format&fit=crop&q=60" },
    { id: "4", title: "Outdoor Patio", price: "$320", category: "Outdoor", image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=500&auto=format&fit=crop&q=60" },
    { id: "5", title: "Elegant Dining Table", price: "$680", category: "Dining", image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=500&auto=format&fit=crop&q=60" },
    { id: "6", title: "Office Desk Setup", price: "$540", category: "Office", image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=500&auto=format&fit=crop&q=60" },
    { id: "7", title: "Modern Sofa", price: "$920", category: "Living Room", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&auto=format&fit=crop&q=60" },
    { id: "8", title: "Bathroom Vanity", price: "$430", category: "Bathroom", image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=500&auto=format&fit=crop&q=60" },
];

export default function Search() {
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredItems, setFilteredItems] = useState<typeof ALL_ITEMS>([]);
    const { addToCart } = useCart();

    const handleSearch = (text: string) => {
        setSearchQuery(text);

        if (text.trim() === "") {
            setFilteredItems([]);
            return;
        }

        const filtered = ALL_ITEMS.filter(item =>
            item.title.toLowerCase().includes(text.toLowerCase()) ||
            item.category.toLowerCase().includes(text.toLowerCase())
        );

        setFilteredItems(filtered);
    };

    const handleAddToCart = (item: typeof ALL_ITEMS[0]) => {
        addToCart(item);
    };

    return (
        <View className="flex-1 bg-gray-50">
            <View className="px-4 pt-6 pb-4">
                <View className="flex-row items-center bg-white rounded-xl px-4 py-3 shadow-sm border border-gray-100">
                    <Ionicons name="search" size={20} color="#9ca3af" />
                    <TextInput
                        placeholder="Search items..."
                        className="flex-1 ml-2 text-gray-900"
                        value={searchQuery}
                        onChangeText={handleSearch}
                        autoCapitalize="none"
                        autoCorrect={false}
                    />
                    {searchQuery.length > 0 && (
                        <TouchableOpacity onPress={() => handleSearch("")}>
                            <Ionicons name="close-circle" size={20} color="#9ca3af" />
                        </TouchableOpacity>
                    )}
                </View>
            </View>

            {searchQuery === "" ? (
                <View className="flex-1 items-center justify-center px-4">
                    <Ionicons name="search-outline" size={64} color="#e5e7eb" />
                    <Text className="text-gray-400 mt-4 text-center text-base">
                        Find your favorite items by searching above
                    </Text>
                    <Text className="text-gray-300 mt-2 text-center text-sm">
                        Try searching for "modern", "bedroom", or "kitchen"
                    </Text>
                </View>
            ) : filteredItems.length === 0 ? (
                <View className="flex-1 items-center justify-center px-4">
                    <Ionicons name="sad-outline" size={64} color="#e5e7eb" />
                    <Text className="text-gray-400 mt-4 text-center text-base font-semibold">
                        No results found
                    </Text>
                    <Text className="text-gray-300 mt-2 text-center text-sm">
                        Try searching with different keywords
                    </Text>
                </View>
            ) : (
                <View className="flex-1">
                    <View className="px-4 pb-2">
                        <Text className="text-gray-600 text-sm">
                            Found {filteredItems.length} {filteredItems.length === 1 ? 'item' : 'items'}
                        </Text>
                    </View>
                    <FlatList
                        data={filteredItems}
                        keyExtractor={(item) => item.id}
                        contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 20 }}
                        renderItem={({ item }) => (
                            <View className="bg-white rounded-2xl mb-4 overflow-hidden shadow-sm">
                                <Link href={`/details/${item.id}`} asChild>
                                    <TouchableOpacity>
                                        <Image source={{ uri: item.image }} className="w-full h-48" />
                                        <View className="p-4">
                                            <View className="flex-row justify-between items-start">
                                                <View className="flex-1">
                                                    <Text className="text-lg font-semibold text-gray-900">
                                                        {item.title}
                                                    </Text>
                                                    <Text className="text-gray-500 text-sm mt-1">
                                                        {item.category}
                                                    </Text>
                                                </View>
                                                <Text className="text-blue-600 font-bold text-lg">
                                                    {item.price}
                                                </Text>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                </Link>
                                <TouchableOpacity
                                    className="absolute bottom-4 right-4 bg-blue-500 w-12 h-12 rounded-full items-center justify-center shadow-lg"
                                    onPress={() => handleAddToCart(item)}
                                >
                                    <Ionicons name="cart" size={24} color="white" />
                                </TouchableOpacity>
                            </View>
                        )}
                    />
                </View>
            )}
        </View>
    );
}
