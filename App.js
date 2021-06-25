/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, { useState } from 'react';
 import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
 
 export default function App() {
   const [count, setCount] = useState(0);
 
   function aumentar() {
     setCount(count + 1);
 
   }
   function diminuir() {
     setCount(count - 1);
 
   }
 
   return (
     <View style={styles.container}>
 
       <Text style={styles.textTop}>Contador de Pessoas</Text>
 
       <View style={styles.containerText}>
       <Text style={styles.text}>{count}</Text>
       </View>
       <View style={styles.containerbutton}>
       <TouchableOpacity styles={styles.button} onPress={aumentar}>
         <Text style={styles.textbutton}>+</Text>
       </TouchableOpacity>
       </View>
       <View style={styles.containerbutton}>
       <TouchableOpacity styles={styles.Button} onPress={diminuir}>
         <Text style={styles.textbutton}>-</Text>
       </TouchableOpacity>
       </View>
     </View>
 
 
 
   )
 }
 
 const styles = StyleSheet.create({
   container: {
     flex: 1,
     backgroundColor: '#836FFF',
     justifyContent: 'center',
     
   },
   containerText: {
     width:160,
     height:90,
     margin:30,
     left:70,
     marginTop: 30,
     borderRadius:20,
     backgroundColor: '#fff',
     justifyContent: 'center',
     flexDirection:'row',
 
   },
   text: {
     top: 3,
     fontSize: 25,
     margin: 15,
     marginTop:25,
     color: 'black',
     textAlign: 'center',
 
   },
   textbutton: {
     top: 3,
     fontSize: 25,
     margin: 15,
     marginTop:10,
     color: 'black',
     textAlign: 'center',
 
   },
   textTop: {
     top: 3,
     fontSize: 30,
     margin: 15,
     marginTop: 10,
     color: '#fff',
     textAlign: 'center',
 
   },
   containerbutton: {
     width:200,
     height:60,
     margin:30,
     left:50,
     marginTop:0,
     borderRadius:10,
     backgroundColor: '#696969',
     justifyContent: 'center',
     flexDirection:'row',
 
   }
 });