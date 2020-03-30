import React from 'react';
import {Text, StyleSheet, View} from 'react-native';


const ComponentScreen = () => {
    const greeting = <Text>hai</Text>;

    return (
    <View>
        <Text style={styles.textStyle}>Hallo</Text>
        {greeting}
    </View>
    );
    
};


const styles = StyleSheet.create({
    textStyle:{
        fontSize : 30
    }
});

export default ComponentScreen;