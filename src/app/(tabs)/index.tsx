import '@/global.css';
import { Link } from "expo-router";
import { Pressable, Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Text >
        Hello NativeWind!!
      </Text>

      <Link href="/onboarding" asChild>
        <Pressable className="mt-4 rounded bg-red-500 p-4">
          <Text className="text-white">Go to Onboarding</Text>
        </Pressable>
      </Link>

      <Link href={{
        pathname: '/subscriptions/[id]',
        params: { id: 'claude' }
      }} asChild>
        <Pressable className="mt-4 rounded bg-red-500 p-4">
          <Text className="text-white">Go to Subscription Details</Text>
        </Pressable>
      </Link>

    </View>
  )
}
