import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

const ListScreen = () =>{

    const friends = [
        {name : "Friends 1", age : 20},
        {name : "Friends 2", age : 20},
        {name : "Friends 3", age : 20},
        {name : "Friends 4", age : 20},
        {name : "Friends 5", age : 20},
        {name : "Friends 6", age : 20},
        {name : "Friends 7", age : 20}
    ];
    return (
        <FlatList 
            keyExtractor={friend => friend.name}
            data={friends} 
            renderItem={({item}) => {
                return <Text style={styles.textStyle}>{item.name} - Age {item.age}</Text>
            }}/>
    );
};

const styles = StyleSheet.create({
    textStyle:{
        marginVertical: 50
    }
});

export default ListScreen;