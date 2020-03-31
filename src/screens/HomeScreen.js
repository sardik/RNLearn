import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity} from "react-native";

const HomeScreen = ({navigation}) => {
  return (
    <View>
        <Text style={styles.text}>Hi All</Text>
        <Button
          onPress={() => navigation.navigate('Component')}
          title="Go to Component Demo"
          style={styles.marginButton}
> 
        </Button>

        <Button
          style={styles.marginButton}
          title="Go to Image Demo"
          onPress={() => navigation.navigate('Image')}>
        </Button>

        <Button
          style={styles.marginButton}
          title="Go to Counter Demo"
          onPress={() => navigation.navigate('Counter')}>
        </Button>

        <Button
          style={styles.marginButton}
          title="Go to Counter with Reducer Demo"
          onPress={() => navigation.navigate('CounterWithReducer')}>
        </Button>

        <Button
          style={styles.marginButton}
          title="Go to ColorScreen Demo"
          onPress={() => navigation.navigate('Color')}>
        </Button>

        <Button
          style={styles.marginButton}
          title="Go to SquareScreen Demo"
          onPress={() => navigation.navigate('Square')}>
        </Button>

        <Button
          style={styles.marginButton}
          title="Go to SquareScreen with Reducer Demo"
          onPress={() => navigation.navigate('SquareWithReducer')}>
        </Button>

        <Button
          style={styles.marginButton}
          title="Go to Text Screen Demo"
          onPress={() => navigation.navigate('Text')}>
        </Button>

        <Button
          style={styles.marginButton}
          title="Go to Box Screen Demo"
          onPress={() => navigation.navigate('Box')}>
        </Button>

        {/* <TouchableOpacity
          onPress={()=> console.log('List Pressed')}>
          <Text>Go to List Demo</Text>
        </TouchableOpacity> */}
    </View>
    
  );
  
};

const styles = StyleSheet.create({
  marginButton:{
    margin: 10
  },
  text: {
    fontSize: 30,
    margin:10
  }
});

export default HomeScreen;