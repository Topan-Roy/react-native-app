import { Ionicons } from "@expo/vector-icons";
import { Link, useRouter } from "expo-router";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { useCart } from "../../contexts/CartContext";

export default function Cart() {
    const router = useRouter();
    const { cartItems, removeFromCart, updateQuantity, clearCart, getCartTotal, getCartCount } = useCart();

    if (cartItems.length === 0) {
        return (
            <View className="flex-1 bg-gray-50">
                <View className="px-4 py-6">
                    <Text className="text-3xl font-bold text-gray-900">Cart</Text>
                    <Text className="text-gray-500 mt-1">Your shopping cart</Text>
                </View>

                <View className="flex-1 items-center justify-center px-4">
                    <Ionicons name="cart-outline" size={80} color="#e5e7eb" />
                    <Text className="text-gray-400 mt-4 text-center text-lg font-semibold">
                        Your cart is empty
                    </Text>
                    <Text className="text-gray-300 mt-2 text-center text-sm">
                        Add items to your cart to see them here
                    </Text>
                    <Link href="/(tabs)" asChild>
                        <TouchableOpacity className="bg-blue-500 px-6 py-3 rounded-xl mt-6">
                            <Text className="text-white font-semibold">Start Shopping</Text>
                        </TouchableOpacity>
                    </Link>
                </View>
            </View>
        );
    }

    return (
        <View className="flex-1 bg-gray-50">
            <View className="px-4 py-6 flex-row justify-between items-center">
                <View>
                    <Text className="text-3xl font-bold text-gray-900">Cart</Text>
                    <Text className="text-gray-500 mt-1">{getCartCount()} items</Text>
                </View>
                <TouchableOpacity onPress={clearCart}>
                    <Text className="text-red-500 font-semibold">Clear All</Text>
                </TouchableOpacity>
            </View>

            <FlatList
                data={cartItems}
                keyExtractor={(item) => item.id}
                contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 100 }}
                renderItem={({ item }) => (
                    <View className="bg-white rounded-2xl mb-4 overflow-hidden shadow-sm flex-row">
                        <Image source={{ uri: item.image }} className="w-24 h-24" />
                        <View className="flex-1 p-4">
                            <Text className="text-base font-semibold text-gray-900" numberOfLines={1}>
                                {item.title}
                            </Text>
                            <Text className="text-gray-500 text-sm mt-1">{item.category}</Text>
                            <Text className="text-blue-600 font-bold mt-2">{item.price}</Text>
                        </View>
                        <View className="p-4 justify-between items-end">
                            <TouchableOpacity onPress={() => removeFromCart(item.id)}>
                                <Ionicons name="trash-outline" size={20} color="#ef4444" />
                            </TouchableOpacity>
                            <View className="flex-row items-center bg-gray-100 rounded-lg">
                                <TouchableOpacity
                                    className="px-3 py-1"
                                    onPress={() => updateQuantity(item.id, item.quantity - 1)}
                                >
                                    <Ionicons name="remove" size={16} color="#6b7280" />
                                </TouchableOpacity>
                                <Text className="px-3 font-semibold text-gray-900">{item.quantity}</Text>
                                <TouchableOpacity
                                    className="px-3 py-1"
                                    onPress={() => updateQuantity(item.id, item.quantity + 1)}
                                >
                                    <Ionicons name="add" size={16} color="#6b7280" />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                )}
            />

            <View className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4">
                <View className="flex-row justify-between items-center mb-4">
                    <Text className="text-gray-600 text-base">Total</Text>
                    <Text className="text-2xl font-bold text-gray-900">{getCartTotal()}</Text>
                </View>
                <TouchableOpacity
                    className="bg-blue-500 py-4 rounded-xl items-center shadow-md"
                    onPress={() => router.push('/checkout/' as any)}
                >
                    <Text className="text-white font-bold text-base">Checkout</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
