import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Alert, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useCart } from "../../contexts/CartContext";

export default function Checkout() {
    const router = useRouter();
    const { cartItems, getCartTotal, clearCartSilently } = useCart();
    const [selectedPayment, setSelectedPayment] = useState<string>("card");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");

    const handlePlaceOrder = () => {
        if (!name || !phone || !address || !city) {
            Alert.alert("Missing Information", "Please fill in all delivery details.");
            return;
        }

        Alert.alert(
            "Order Placed! 🎉",
            `Your order of ${getCartTotal()} has been placed successfully!\n\nDelivery to: ${name}\n${address}, ${city}`,
            [
                {
                    text: "OK",
                    onPress: () => {
                        clearCartSilently();
                        router.push("/(tabs)");
                    },
                },
            ]
        );
    };

    const paymentMethods = [
        { id: "card", name: "Credit/Debit Card", icon: "card-outline" },
        { id: "cash", name: "Cash on Delivery", icon: "cash-outline" },
        { id: "mobile", name: "Mobile Banking", icon: "phone-portrait-outline" },
    ];

    return (
        <View className="flex-1 bg-gray-50">
            <View className="px-4 py-6 bg-white border-b border-gray-200">
                <View className="flex-row items-center">
                    <TouchableOpacity onPress={() => router.back()} className="mr-4">
                        <Ionicons name="arrow-back" size={24} color="#000" />
                    </TouchableOpacity>
                    <Text className="text-2xl font-bold text-gray-900">Checkout</Text>
                </View>
            </View>

            <ScrollView className="flex-1" contentContainerStyle={{ paddingBottom: 120 }}>
                {/* Order Summary */}
                <View className="bg-white p-4 mb-2">
                    <Text className="text-lg font-bold text-gray-900 mb-3">Order Summary</Text>
                    {cartItems.map((item) => (
                        <View key={item.id} className="flex-row justify-between mb-2">
                            <Text className="text-gray-600 flex-1" numberOfLines={1}>
                                {item.title} x {item.quantity}
                            </Text>
                            <Text className="text-gray-900 font-semibold">
                                ${(parseFloat(item.price.replace('$', '')) * item.quantity).toFixed(2)}
                            </Text>
                        </View>
                    ))}
                    <View className="border-t border-gray-200 mt-3 pt-3 flex-row justify-between">
                        <Text className="text-base font-bold text-gray-900">Total</Text>
                        <Text className="text-xl font-bold text-blue-600">{getCartTotal()}</Text>
                    </View>
                </View>

                {/* Delivery Information */}
                <View className="bg-white p-4 mb-2">
                    <Text className="text-lg font-bold text-gray-900 mb-3">Delivery Information</Text>

                    <Text className="text-gray-700 font-semibold mb-2">Full Name</Text>
                    <TextInput
                        className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 mb-4 text-gray-900"
                        placeholder="Enter your full name"
                        value={name}
                        onChangeText={setName}
                    />

                    <Text className="text-gray-700 font-semibold mb-2">Phone Number</Text>
                    <TextInput
                        className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 mb-4 text-gray-900"
                        placeholder="Enter your phone number"
                        value={phone}
                        onChangeText={setPhone}
                        keyboardType="phone-pad"
                    />

                    <Text className="text-gray-700 font-semibold mb-2">Address</Text>
                    <TextInput
                        className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 mb-4 text-gray-900"
                        placeholder="Enter your street address"
                        value={address}
                        onChangeText={setAddress}
                        multiline
                    />

                    <Text className="text-gray-700 font-semibold mb-2">City</Text>
                    <TextInput
                        className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900"
                        placeholder="Enter your city"
                        value={city}
                        onChangeText={setCity}
                    />
                </View>

                {/* Payment Method */}
                <View className="bg-white p-4">
                    <Text className="text-lg font-bold text-gray-900 mb-3">Payment Method</Text>
                    {paymentMethods.map((method) => (
                        <TouchableOpacity
                            key={method.id}
                            className={`flex-row items-center p-4 rounded-xl mb-3 border-2 ${selectedPayment === method.id
                                ? "border-blue-500 bg-blue-50"
                                : "border-gray-200 bg-gray-50"
                                }`}
                            onPress={() => setSelectedPayment(method.id)}
                        >
                            <Ionicons
                                name={method.icon as any}
                                size={24}
                                color={selectedPayment === method.id ? "#3b82f6" : "#6b7280"}
                            />
                            <Text
                                className={`flex-1 ml-3 font-semibold ${selectedPayment === method.id ? "text-blue-600" : "text-gray-700"
                                    }`}
                            >
                                {method.name}
                            </Text>
                            {selectedPayment === method.id && (
                                <Ionicons name="checkmark-circle" size={24} color="#3b82f6" />
                            )}
                        </TouchableOpacity>
                    ))}
                </View>
            </ScrollView>

            {/* Bottom Action */}
            <View className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4">
                <View className="flex-row justify-between items-center mb-3">
                    <Text className="text-gray-600">Total Amount</Text>
                    <Text className="text-2xl font-bold text-gray-900">{getCartTotal()}</Text>
                </View>
                <TouchableOpacity
                    className="bg-blue-500 py-4 rounded-xl items-center shadow-md"
                    onPress={handlePlaceOrder}
                >
                    <Text className="text-white font-bold text-base">Place Order</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
