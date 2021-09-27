import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';



export default function Home({navigation}) {
  return (
    <View style={styles.container}>

<Image style={styles.imageLogo} source={require('../../../assets/logo.png')} />

     

        <View style={styles.viewbtn}>

          <View style={styles.btnview}>

            <TouchableOpacity style={styles.button} 
            onPress={()=>navigation.navigate('List')}
            >
               
              <View style={styles.circulebtn}>
                 
                <Icon name="book" size={30} color="#808080" />
                 
              </View>
               
            </TouchableOpacity>

            <Text style={styles.textButton}>Revisar Conteúdo</Text>

          </View>

          <View style={styles.btnview}>   

            <TouchableOpacity style={styles.button}
            onPress={()=>navigation.navigate('Web')}
            >
               
            <View style={styles.circulebtn}>
                 
                 <Icon name="align-justify" size={30} color="#808080" />
                  
            </View>
                
            </TouchableOpacity>

            <Text style={styles.textButton}>Iniciar Prova</Text>
            
          </View>  

        </View>

        <View style={styles.viewbtn}>

          <View style={styles.btnview}>  

        
            <TouchableOpacity style={styles.button}>
               
            <View style={styles.circulebtn}>
                 
                 <Icon name="paste" size={30} color="#808080" />
                  
            </View>
                
            </TouchableOpacity>

            <Text style={styles.textButton}>Continuar Prova</Text>
            

          </View>  

          <View style={styles.btnview}>  

            <TouchableOpacity style={styles.button}>
               
            <View style={styles.circulebtn}>
                 
                 <Icon name="check-square" size={30} color="#808080" />
                  
            </View>
                
            </TouchableOpacity>

            <Text style={styles.textButton}>Questões Marcadas</Text>

          </View>   

        </View>

     </View>
      
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DCDCDC',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button:{
   alignItems: 'center',
   justifyContent: 'center',
   margin: 20, 
   width: 90,
   height:90,
   backgroundColor: '#2E8B57',
   borderRadius: 20,
  },
  viewbtn:{
    flexDirection: 'row',
  },
   btnview:{
    alignItems: 'center',
   justifyContent: 'center',
  },
  circulebtn:{
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#DCDCDC',
    width: 60,
    height:60,
    borderRadius: 30,
  },
  imageLogo:{
    width: 130,
    height: 130,
    borderRadius: 65,
    marginBottom: 20,
    marginTop: -40,
  }
});
