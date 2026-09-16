import { tabs } from "@constants/data"
import { colors, components } from '@constants/theme'
import { Tabs } from "expo-router"
import { Image, StyleSheet, View } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"

const tabBar = components.tabBar

const TabIcon = ({ focused, icon }: TabIconProps) => {
    return (
        <View style={styles.iconSlot}>
            <View style={[styles.pill, focused && styles.activePill]}>
                <Image source={icon} resizeMode="contain" style={styles.glyph} />
            </View>
        </View>
    )
}

const TabLayout = () => {
    const insets = useSafeAreaInsets();
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    position: 'absolute',
                    bottom: Math.max(insets.bottom, tabBar.horizontalInset),
                    height: tabBar.height,
                    marginHorizontal: tabBar.horizontalInset,
                    borderRadius: tabBar.radius,
                    backgroundColor: colors.primary,
                    borderTopWidth: 0,
                    elevation: 0,
                },
                tabBarItemStyle: {
                    paddingVertical: tabBar.height / 2 - tabBar.iconFrame / 1.6
                },
                tabBarIconStyle: {
                    width: tabBar.iconFrame,
                    height: tabBar.iconFrame,
                    alignItems: 'center'
                }
            }}
        >
            {tabs.map((tab) => (
                <Tabs.Screen
                    key={tab.name}
                    name={tab.name}
                    options={{
                        title: tab.title,
                        tabBarIcon: ({ focused }) => (
                            <TabIcon focused={focused} icon={tab.icon} />
                        )
                    }} />
            ))}
        </Tabs>
    )
}

export default TabLayout;

const styles = StyleSheet.create({
    iconSlot: {
        width: tabBar.iconFrame,
        height: tabBar.iconFrame,
        alignItems: 'center',
        justifyContent: 'center',
    },
    pill: {
        width: 40,
        height: 40,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    activePill: {
        backgroundColor: colors.accent,
    },
    glyph: {
        width: 24,
        height: 24,
    },
})