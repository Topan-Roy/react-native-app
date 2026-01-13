import { Ionicons } from "@expo/vector-icons";
import { Stack, useLocalSearchParams } from "expo-router";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

const ARTICLES = {
  "track-order": {
    title: "How to track my order?",
    content:
      "Once your order has been shipped, you will receive an email with a tracking number. You can use this number on our website or app to see the real-time status of your delivery.\n\nSteps to track:\n1. Open your Profile.\n2. Go to 'Orders'.\n3. Tap on the order you want to track.\n4. Click 'Track Shipment'.",
  },
  returns: {
    title: "Return and Refund Policy",
    content:
      "We offer a 30-day return policy for most items. If you are not satisfied with your purchase, you can return it for a full refund or exchange.\n\nConditions:\n- Item must be in original condition.\n- Original packaging must be included.\n- Proof of purchase is required.",
  },
  account: {
    title: "Changing account information",
    content:
      "Updating your personal information is easy. Go to 'Settings' and select 'Edit Profile'. From there, you can change your name, email, and bio.\n\nTo change your password, go to 'Settings' -> 'Change Password'.",
  },
  payment: {
    title: "Payment methods accepted",
    content:
      "We accept various payment methods to make your shopping experience convenient:\n- Credit/Debit Cards (Visa, Mastercard, Amex)\n- PayPal\n- Apple Pay & Google Pay\n- Cash on Delivery (available in selected regions)",
  },
};

export default function HelpArticle() {
  const { id } = useLocalSearchParams();
  const article = ARTICLES[id as keyof typeof ARTICLES];

  if (!article) {
    return (
      <View className="flex-1 items-center justify-center p-6 bg-white">
        <Ionicons name="alert-circle-outline" size={64} color="#ef4444" />
        <Text className="text-xl font-bold mt-4">Article Not Found</Text>
      </View>
    );
  }

  return (
    <View className="flex-1 bg-white">
      <Stack.Screen options={{ title: "Help Article", headerShown: true }} />

      <ScrollView contentContainerClassName="p-6">
        <Text className="text-2xl font-bold text-gray-900 mb-6">
          {article.title}
        </Text>
        <Text className="text-gray-700 leading-7 text-lg">
          {article.content}
        </Text>

        <View className="mt-12 pt-8 border-t border-gray-100">
          <Text className="text-gray-900 font-bold mb-4">
            Was this article helpful?
          </Text>

          <View className="flex-row">
            <TouchableOpacity className="bg-gray-50 px-6 py-2 rounded-full mr-4 border border-gray-100 flex-row items-center">
              <Ionicons name="thumbs-up-outline" size={18} color="#4b5563" />
              <Text className="ml-2 text-gray-700">Yes</Text>
            </TouchableOpacity>

            <TouchableOpacity className="bg-gray-50 px-6 py-2 rounded-full border border-gray-100 flex-row items-center">
              <Ionicons name="thumbs-down-outline" size={18} color="#4b5563" />
              <Text className="ml-2 text-gray-700">No</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
