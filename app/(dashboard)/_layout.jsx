import { Tabs } from "expo-router"
import { Colors } from "../../theme/Colors"
import { useColorScheme } from "react-native"
import { Ionicons } from "@expo/vector-icons";
import UserOnly from "../../components/auth/UserOnly";

const DashboardLayout = () => {
    const theme = Colors[useColorScheme()] ?? Colors.light;
  return (
    <UserOnly>
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: theme.navBg,
                    paddingTop: 5,
                    height: 70,
                },
                tabBarActiveTintColor: theme.title,
                tabBarInactiveTintColor: theme.text,
                tabBarActiveBackgroundColor: theme.card,
            }}
        >
            
            <Tabs.Screen 
                name="profile" 
                options={{
                    title: "Profile",
                    tabBarIcon: ( {focused} ) => (
                        <Ionicons 
                            name={focused ? "person" : "person-outline"} 
                            size={24} 
                            color={focused ? theme.iconColorFocused : theme.iconColor} 
                        />
                    )
                }} 
            />
            <Tabs.Screen 
                name="books" 
                options={{
                    title: "Books",
                    tabBarIcon: ( {focused} ) => (
                        <Ionicons 
                            name={focused ? "book" : "book-outline"} 
                            size={24} 
                            color={focused ? theme.iconColorFocused : theme.iconColor} 
                        />
                    )
                }} />
            <Tabs.Screen 
                name="create" 
                options={{
                    title: "Create",
                    tabBarIcon: ( {focused} ) => (
                        <Ionicons 
                            name={focused ? "create" : "create-outline"} 
                            size={24} 
                            color={focused ? theme.iconColorFocused : theme.iconColor} 
                        />
                    )
                }} 
            />
        </Tabs>
    </UserOnly>
  )
}

export default DashboardLayout