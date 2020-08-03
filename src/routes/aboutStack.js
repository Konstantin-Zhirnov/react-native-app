import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import About from '../screens/about'
import { THEME } from '../theme'
import { Platform } from 'react-native'
import Header from '../shared/header'

const Stack = createStackNavigator();

export const AboutStack = () => {
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
                    name="About"
                    component={About}
                    options={({ navigation }) => ({
                        headerTitle: () => <Header navigation={navigation} title='Информация об отеле'/>,
                    })}
                />                
            </Stack.Navigator>
    );
}