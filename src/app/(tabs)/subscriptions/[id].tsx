import { Link, useLocalSearchParams } from 'expo-router';
import { Pressable, Text, View } from 'react-native';

const SubscriptionDetails = () => {
    const { id } = useLocalSearchParams<{ id: string }>();
    return (
        <View className="flex-1 items-center justify-center bg-background">
            <Text>SubscriptionDetails: {id}</Text>
            <Link href="/" asChild>
                <Pressable className="mt-4 rounded bg-red-500 p-4">
                    <Text className="text-white">Go Back</Text>
                </Pressable>
            </Link>
        </View>
    )
}

export default SubscriptionDetails