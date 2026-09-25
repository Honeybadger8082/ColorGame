import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';

const TapSquare = (props) => {
  const [myColor, setColor] = useState('pink');
  if (props.offSquare == true) {
    return (
    <Pressable onPress = {() => {
      props.whenPressed();
    }}>
      <View style={[styles.styleSquare, {backgroundColor: myColor}]}>
        <Text> ahhh </Text>
      </View>
    </Pressable>
  )
  } else {
    return (
    <Pressable onPress = {() => {
      props.whenPressed();
    }}>
      <View style={[styles.styleSquare]}>
        <Text> ahhh </Text>
      </View>
    </Pressable>
  )
  }
  
} 



export default function App() {
  const [point, setPoint] = useState(0);

  const countPoint = () => {
  return (
    setPoint(point+1)
  );
}

  const loser = () => {
    return(
      setPoint(point-1)
    );
  }
  return (
    <View style={styles.container}>
      <TapSquare whenPressed={countPoint} offSquare={true}/>
      <TapSquare whenPressed={loser} offSquare={false}/>
      
      <Text> Points: {point} </Text>
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
    width: 150,
    height: 150,
    backgroundColor: 'red',
    padding: 5,
    borderRadius: 10,
  },
});
