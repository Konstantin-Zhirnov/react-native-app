import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { THEME } from '../theme'

export default FlatButton = ({ text, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.buttom}>
                <Text style={styles.buttomText}>{text}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttom: {
        borderRadius: 8,
        paddingVertical: 14,
        paddingHorizontal: 10,
        backgroundColor: THEME.MAIN_COLOR
    },
    buttomText: {
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 16,
        textAlign: 'center'
    }
})