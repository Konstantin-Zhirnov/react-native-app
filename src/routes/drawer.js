import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { THEME } from '../theme'
import { HomeStack } from './homeStack'
import { AboutStack } from './aboutStack'

const Drawer = createDrawerNavigator();

export function RootDrawerNavigator() {
    return (
        <NavigationContainer>
            <Drawer.Navigator
                drawerContentOptions={{
                    activeTintColor: THEME.MAIN_COLOR,
                    itemStyle: {
                        marginVertical: 5
                    },
                    labelStyle: {
                        fontFamily: 'nunito-regular',
                        fontSize: 18
                    }
                }}
            >
                <Drawer.Screen
                    options={{
                        drawerLabel: 'Номера',
                        // drawerIcon: () => <Ionicons name="ios-albums" size={24} />
                    }}
                    name="Home"
                    component={HomeStack}
                />
                <Drawer.Screen
                    options={{
                        drawerLabel: 'Об отеле'
                    }}
                    name="About"
                    component={AboutStack}
                />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}