import '@/global.css';
import { colors } from '@constants/theme';
import { Link } from "expo-router";
import { Pressable, Text, View } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Index() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      <View className='flex-1 bg-background p-5'>

        <Text className='text-7xl font-extrabold'>Home</Text>

        <Link href="/onboarding" asChild>
          <Pressable className="mt-4 font-sans-bold rounded bg-primary text-white p-4">
            <Text className="text-white">Go to Onboarding</Text>
          </Pressable>
        </Link>

        <Link href="/onboarding" asChild>
          <Pressable className="mt-4 font-sans-bold rounded bg-primary text-white p-4">
            <Text className="text-white">Go to Sign In</Text>
          </Pressable>
        </Link>

        <Link href="/onboarding" asChild>
          <Pressable className="mt-4 font-sans-bold rounded bg-primary text-white p-4">
            <Text className="text-white">Go to Sign Up</Text>
          </Pressable>
        </Link>

      </View>
    </SafeAreaView>
  )
}
