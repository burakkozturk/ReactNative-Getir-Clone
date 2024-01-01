import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../screens/HomeScreen'
import CategoryFilterScreen from '../screens/CategoryFilterScreen'
import { Image, Text } from 'react-native'

const Stack = createStackNavigator()
function HomeNavigator() {
    return (

        <Stack.Navigator>

            <Stack.Screen
                //5C3EBC
                name='Home'
                component={HomeScreen}
                options={{
                    headerStyle: { backgroundColor: '#5C3EBC' },
                    headerTitle: () => (
                        <Image
                            resizeMode="contain"
                            style={{ width: 70, height: 30 }}
                            source={require("../../assets/getirlogo.png")}
                        />
                    ),
                }}
            />

            <Stack.Screen
                name='CategoryDetails'
                component={CategoryFilterScreen}
                options={{
                    headerTintColor:'white',
                    headerBackTitleVisible:false,
                    headerStyle: { backgroundColor: '#5C3EBC' },
                    headerTitle: () => (
                        <Text style={{color:'white', fontSize:18, fontWeight:'bold' }}>
                            Ürünler
                        </Text>
                    ),
                }}
            />

        </Stack.Navigator>

    )
}

export default HomeNavigator