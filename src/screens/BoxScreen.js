import React from 'react';
import { Text, View, StyleSheet } from 'react-native';


const BoxScreen = () =>  {

    return(
         <View style={styles.parentStyle}>
        {/* <Text style={styles.textOneStyle}>Child #1</Text>
        <Text style={styles.textTwoStyle}>Child #2</Text>
        <Text style={styles.textThreeStyle}>Child #3</Text> */}
        <View style={styles.viewOneStyle}/>
        <View style={styles.viewTwoParent}>
            <View style={styles.viewTwoStyle}/>
        </View>
        <View style={styles.viewThreeStyle}/>
        </View>
    );
};


const styles = StyleSheet.create({
    parentStyle : {
        borderWidth: 3,
        borderColor: 'black',
        // alignItems : 'stretch',
        flexDirection: 'row',
        justifyContent : 'space-between',
        height : 200
    
    },
    viewOneStyle : {
        height : 50,
        width : 50,
        backgroundColor : 'red'
    },

    viewTwoParent : {
        height : 100,
        justifyContent : 'flex-end'
    },

    viewTwoStyle : {
        height : 50,
        width : 50,
        backgroundColor : 'green'
        // top : 50
        // alignSelf : 'flex-end'
    },

    viewThreeStyle : {
        height : 50,
        width : 50,
        backgroundColor : 'purple'
    }
    
    // textOneStyle: {
    //     borderWidth : 1,
    //     borderColor : 'red',
    //     // marginVertical : 20,
    //     // marginHorizontal : 20,
    //     // flex : 4
    //     // alignSelf : 'center'
    // },
    // textTwoStyle: {
    //     borderWidth : 1,
    //     borderColor : 'red',
    //     // marginVertical : 20,
    //     // marginHorizontal : 20,
    //     // flex : 4
    //     // alignSelf : 'stretch'
    //     fontSize : 18,
    //     // position : 'absolute',
    //     // top : 0,
    //     // right : 0,
    //     // left : 0,
    //     // bottom : 0
    //     ...StyleSheet.absoluteFillObject

    // },
    // textThreeStyle: {
    //     borderWidth : 1,
    //     borderColor : 'red',
    //     // marginVertical : 20,
    //     // marginHorizontal : 20,
    //     // flex : 2
    //     // alignSelf : 'center'
    // }
});

export default BoxScreen;