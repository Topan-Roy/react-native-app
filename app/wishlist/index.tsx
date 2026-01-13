import { Ionicons } from "@expo/vector-icons";
import { Stack } from "expo-router";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";

const WISHLIST_DATA = [
  {
    id: "1",
    title: "Modern Living Room",
    price: "$450",
    image:
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=500&auto=format&fit=crop&q=60",
  },
  {
    id: "2",
    title: "Modern Living Room",
    price: "$450",
    image:
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=500&auto=format&fit=crop&q=60",
  },
  {
    id: "3",
    title: "Cozy Bedroom",
    price: "$850",
    image:
      "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=500&auto=format&fit=crop&q=60",
  },
  {
    id: "4",
    title: "Cozy Bedroom",
    price: "$850",
    image:
      "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=500&auto=format&fit=crop&q=60",
  },
];

export default function Wishlist() {
  return (
    <View className="flex-1 bg-gray-50 mt-10">
      <Stack.Screen options={{ title: "My Wishlist", headerShown: false }} />
      {WISHLIST_DATA.length > 0 ? (
        <FlatList
          data={WISHLIST_DATA}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ padding: 16 }}
          renderItem={({ item }) => (
            <View className="bg-white rounded-2xl mb-4 overflow-hidden shadow-sm flex-row">
              <Image source={{ uri: item.image }} className="w-28 h-28" />
              <View className="p-4 flex-1 justify-between">
                <View>
                  <Text className="text-lg font-semibold text-gray-900">
                    {item.title}
                  </Text>
                  <Text className="text-blue-600 font-bold mt-1">
                    {item.price}
                  </Text>
                </View>
                <TouchableOpacity className="self-end">
                  <Ionicons name="trash-outline" size={20} color="#ef4444" />
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
      ) : (
        <View className="flex-1 items-center justify-center p-6">
          <Ionicons name="heart-outline" size={80} color="#d1d5db" />
          <Text className="text-xl font-bold text-gray-900 mt-4">
            Your Wishlist is Empty
          </Text>
          <Text className="text-gray-500 text-center mt-2">
            Save items you love here to find them easily later.
          </Text>
        </View>
      )}
    </View>
  );
}
