import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ImageDetails from '../componenets/ImageDetails';

const ImageScreen =  () => {
    return <View>
        <ImageDetails 
        title="forest" 
        imageSource={require('../../assets/forest.jpg')}
        imageScore={9}>
        </ImageDetails>

        <ImageDetails 
        title="beach" 
        imageSource={require('../../assets/beach.jpg')}
        imageScore={7}>
        </ImageDetails>

        <ImageDetails 
        title="mountain" 
        imageSource={require('../../assets/mountain.jpg')}
        imageScore={8}>
        </ImageDetails>
    </View>
};


const style = StyleSheet.create({});

export default ImageScreen;