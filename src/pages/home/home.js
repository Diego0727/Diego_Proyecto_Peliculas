import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import FooterScreen from '../footer/footer';
import HeaderScreen from '../header/header';
import Series from '../series/series';
import Peliculas from '../peliculas/peliculas';

export default function Home() {
    const [selectedCategory, setSelectedCategory] = useState('Peliculas');

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    let componentToRender;

    if (selectedCategory === 'Peliculas') {
        componentToRender = <Peliculas />;
    } else {
        componentToRender = <Series />;
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <HeaderScreen />
            </View>
            <View style={[styles.categoria,]}>
                <Picker
                    selectedValue={selectedCategory}
                    style={styles.picker}
                    onValueChange={(itemValue) => handleCategoryChange(itemValue)}
                >
                    <Picker.Item style={styles.pickerItem} label="Peliculas" value="Peliculas" />
                    <Picker.Item style={styles.pickerItem} label="Series" value="Series" />
                </Picker>
            </View>
            <View style={styles.content}>
                {componentToRender}
            </View>
            <View style={styles.footer}>
                <FooterScreen />
            </View>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
    },
    header: {
        backgroundColor: '#fff',
        height: '10%'
    },
    categoria: {
        height: '8%',
        backgroundColor: '#0587f2'
    },
    content: {
        height: '62%'
    },
    footer: {
        height: '20%',
    },
    picker: {
        backgroundColor: '#0587f2',
        paddingHorizontal: 10,
        height: '100%',
        width: '70%',
        color: '#fff'
    },
    pickerItem: {

    }
});