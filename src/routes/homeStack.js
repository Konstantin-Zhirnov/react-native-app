import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/home'
import ReviewDetails from '../screens/reviewDetails'
import { THEME } from '../theme'
import { Platform } from 'react-native'
import Header from '../shared/header'

const Stack = createStackNavigator();

export const HomeStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: Platform.OS === 'android' ? THEME.MAIN_COLOR : '#fff'
                },
                headerTintColor: Platform.OS === 'android' ? '#fff' : THEME.MAIN_COLOR
            }}
        >
            <Stack.Screen
                name="Home"
                component={Home}
                options={({ navigation }) => ({
                    headerTitle: () => <Header navigation={navigation} title='Отель «Loft Garden»'/>                    
                })}
            />
            <Stack.Screen
                name="ReviewDetails"
                component={ReviewDetails}
                options={({ route }) => ({
                    headerTitle: route.params.title
                })}
            />
        </Stack.Navigator>
    );
}