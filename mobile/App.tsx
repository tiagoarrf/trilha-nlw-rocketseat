import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello World!</Text>
      <Button title='Press' style={styles.button}></Button>
      <StatusBar style="auto" backgroundColor='#3433' />
    </View>
  );
}

interface ButtonProps{
  title: string,
  style?: object
}

function Button(props: ButtonProps) {
  return (
    <TouchableOpacity>
      <Text>
        {props.title}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: 'blue',
    fontSize: 33
  },
  button: {
    borderColor: 'black',
    backgroundColor: 'red'
    
  }

});
