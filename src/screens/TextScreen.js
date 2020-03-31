import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const TextScreen = () => {
    const [name, setName] = useState('');
    return (
    <View>
        <Text>Enter Name:</Text>
        <TextInput style={style.input}
            autoCapitalize="none"
            autoCorrect={false}
            value={name}
            onChangeText={newValue => setName(newValue)}
            />
            {name.length < 4 ? <Text>Password must be 4 characters</Text> : null}
        {/* <Text>my name is {name}</Text> */}
        {/* {false ? <Text>That was true</Text> : null} */}
    </View>
    );
};


const style=StyleSheet.create({
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1,
        
    }
});

export default TextScreen;
