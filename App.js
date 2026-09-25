import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';

const points = 1;

const countPoint = (points) => {
  return (
    points++
  );
}

const TapSquare = (props) => {
  const [myColor, setColor] = useState('pink');
  return (
    <Pressable onPress={countPoint(points)}>
      <View style={[styles.styleSquare, {backgroundColor: myColor}]}>
        <Text> ahhh </Text>
      </View>
    </Pressable>
  )
} 

export default function App() {
  

  return (
    <View style={styles.container}>
      <TapSquare points/>
      
      
      <Text> Points: {points} </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  styleSquare: {
    width: 50,
    height: 50,
    backgroundColor: 'red',
    padding: 5,
    borderRadius: 10,
  },
});
