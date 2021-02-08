import React from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';

const App: React.FC = () =>{
  return ( 
    
    <SafeAreaView>
      <Text style={styles.text}>Hello World</Text>
      <Text style={styles.text}>This is my first React Native experience.
     </Text>
     <Text style={styles.text}>Thanks to my friend "Ilda Neta"
     </Text>
    </SafeAreaView>
  
  );
};

const styles = StyleSheet.create({

  text: {
 
    fontSize:30,
    marginVertical:10,
    marginHorizontal:10,
    fontFamily: 'Montserrat-Regular',
        
  },

});

export default App;
