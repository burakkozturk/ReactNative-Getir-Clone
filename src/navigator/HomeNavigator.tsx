import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../screens/HomeScreen'
import { Image } from 'react-native'

const Stack = createStackNavigator()
function HomeNavigator() {
    return (

        <Stack.Navigator>

            <Stack.Screen
//5C3EBC
                name='Home'
                component={HomeScreen}
                options={{
                    headerStyle:{backgroundColor:'#5C3EBC'}, 
                    headerTitle: () => (
                        <Image
                            resizeMode="contain"
                            style={{ width: 70, height: 30 }}
                            source={require("../../assets/getirlogo.png")}
                        />
                    ),
                }}
            />

        </Stack.Navigator>

    )
}

export default HomeNavigator