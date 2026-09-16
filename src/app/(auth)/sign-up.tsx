import { Link } from 'expo-router'
import { Text, View } from 'react-native'

const SingUp = () => {
    return (
        <View>
            <Text>SingUp</Text>
            <Link href="/(auth)/sign-up">Sign Up</Link>
        </View>
    )
}

export default SingUp