import { Ionicons } from "@expo/vector-icons";
import { Link, Stack } from "expo-router";
import { useState } from "react";
import { ScrollView, Switch, Text, TouchableOpacity, View } from "react-native";

export default function Settings() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isNotificationsEnabled, setIsNotificationsEnabled] = useState(true);

    return (
        <View className="flex-1 bg-gray-50">
            <Stack.Screen options={{ title: "Settings", headerShown: true }} />
            <ScrollView>
                <View className="mt-4">
                    <SectionTitle title="Account" />
                    <Link href="/settings/edit" asChild>
                        <SettingItem icon="person-outline" label="Edit Profile" />
                    </Link>
                    <SettingItem icon="language-outline" label="Language" value="English" />
                </View>

                <View className="mt-4">
                    <SectionTitle title="Preferences" />
                    <SettingToggle
                        icon="moon-outline"
                        label="Dark Mode"
                        value={isDarkMode}
                        onValueChange={setIsDarkMode}
                    />
                    <SettingToggle
                        icon="notifications-outline"
                        label="Notifications"
                        value={isNotificationsEnabled}
                        onValueChange={setIsNotificationsEnabled}
                    />
                </View>

                <View className="mt-4">
                    <SectionTitle title="Security" />
                    <Link href="/settings/password" asChild>
                        <SettingItem icon="lock-closed-outline" label="Change Password" />
                    </Link>
                    <Link href="/settings/privacy" asChild>
                        <SettingItem icon="shield-checkmark-outline" label="Privacy Policy" />
                    </Link>
                </View>

                <View className="mt-4 mb-10">
                    <SectionTitle title="Support" />
                    <Link href="/settings/help" asChild>
                        <SettingItem icon="help-circle-outline" label="Help Center" />
                    </Link>
                    <SettingItem icon="information-circle-outline" label="About App" value="v1.0.0" />
                </View>
            </ScrollView>
        </View>
    );
}

function SectionTitle({ title }: { title: string }) {
    return (
        <Text className="px-4 py-2 text-xs font-bold text-gray-500 uppercase tracking-widest">
            {title}
        </Text>
    );
}

function SettingItem({ icon, label, value, ...props }: { icon: any, label: string, value?: string, [key: string]: any }) {
    return (
        <TouchableOpacity {...props} className="flex-row items-center bg-white px-4 py-4 border-b border-gray-100">
            <Ionicons name={icon} size={22} color="#4b5563" />
            <Text className="flex-1 ml-4 text-gray-700 text-base">{label}</Text>
            {value && <Text className="mr-2 text-gray-400">{value}</Text>}
            <Ionicons name="chevron-forward" size={18} color="#d1d5db" />
        </TouchableOpacity>
    );
}


function SettingToggle({ icon, label, value, onValueChange }: { icon: any, label: string, value: boolean, onValueChange: (v: boolean) => void }) {
    return (
        <View className="flex-row items-center bg-white px-4 py-3 border-b border-gray-100">
            <Ionicons name={icon} size={22} color="#4b5563" />
            <Text className="flex-1 ml-4 text-gray-700 text-base">{label}</Text>
            <Switch
                value={value}
                onValueChange={onValueChange}
                trackColor={{ false: "#d1d5db", true: "#3b82f6" }}
                thumbColor={"#ffffff"}
            />
        </View>
    );
}
