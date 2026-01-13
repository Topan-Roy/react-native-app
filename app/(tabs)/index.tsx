import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { useCart } from "../../contexts/CartContext";
const DATA = [
  {
    id: "1",
    title: "Modern Living Room",
    price: "$450",
    category: "Living Room",
    image:
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=500&auto=format&fit=crop&q=60",
  },
  {
    id: "2",
    title: "Minimalist Kitchen",
    price: "$1200",
    category: "Kitchen",
    image:
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=500&auto=format&fit=crop&q=60",
  },
  {
    id: "3",
    title: "Cozy Bedroom",
    price: "$850",
    category: "Bedroom",
    image:
      "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=500&auto=format&fit=crop&q=60",
  },
  {
    id: "4",
    title: "Outdoor Patio",
    price: "$320",
    category: "Outdoor",
    image:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=500&auto=format&fit=crop&q=60",
  },
  {
    id: "5",
    title: "Elegant Dining Table",
    price: "$680",
    category: "Dining",
    image:
      "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=500&auto=format&fit=crop&q=60",
  },
  {
    id: "6",
    title: "Office Desk Setup",
    price: "$540",
    category: "Office",
    image:
      "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=500&auto=format&fit=crop&q=60",
  },
  {
    id: "7",
    title: "Modern Sofa",
    price: "$920",
    category: "Living Room",
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&auto=format&fit=crop&q=60",
  },
  {
    id: "8",
    title: "Bathroom Vanity",
    price: "$430",
    category: "Bathroom",
    image:
      "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=500&auto=format&fit=crop&q=60",
  },
];
export default function Home() {
  const { addToCart } = useCart();
  const handleAddToCart = (item: (typeof DATA)[0]) => {
    addToCart(item);
  };
  return (
    <View className="flex-1 bg-gray-50">
      <View className="px-4 py-6">
        <Text className="text-3xl font-bold text-gray-900">Discover</Text>
        <Text className="text-gray-500 mt-1">
          Find the best furniture for your home
        </Text>
      </View>
      <FlatList
        data={DATA}
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
                      <Text className="text-blue-600 font-bold mt-1">
                        {item.price}
                      </Text>
                    </View>
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
  );
}
