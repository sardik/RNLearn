import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity} from "react-native";

const HomeScreen = ({navigation}) => {
  return (
    <View>
        <Text style={styles.text}>Hi All</Text>
        <Button
          style={styles.marginButton}
          onPress={() => navigation.navigate('Component')}
          title="Go to Component Demo"> 
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
          title="Go to ColorScreen Demo"
          onPress={() => navigation.navigate('Color')}>
        </Button>

        <Button
          style={styles.marginButton}
          title="Go to SquareScreen Demo"
          onPress={() => navigation.navigate('Square')}>
        </Button>

        {/* <TouchableOpacity
          onPress={()=> console.log('List Pressed')}>
          <Text>Go to List Demo</Text>
        </TouchableOpacity> */}
    </View>
    
  );
  
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  },
  marginButton:{
    marginTop:10
  }
});

export default HomeScreen;