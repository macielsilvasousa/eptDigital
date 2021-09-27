import React,{useState, useEffect} from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity,TextInput, ActivityIndicator } from 'react-native';
import firebase from '../services/firebaseConnection';
import Accordian from '../components/listing';
import Icon from "react-native-vector-icons/MaterialIcons";


export default function List({navigation}) {
  
  const [lista ,setLista]= useState([]);
  const [listaQuery ,setListaQuery]= useState([]);
  const [ returnList ,setReturnList]= useState(false);
  const [ loading ,setLoading]= useState(true);
  const [search ,setSearch]= useState('');  
  
//Ciclo de Vida
  useEffect(()=> {

    async function dados(){
    
      await firebase.database().ref('bdept').on('value', (snapshot)=>{
     
        snapshot.forEach((chilItem)=>{
          let data ={            
            key: chilItem.key,
            title: chilItem.val().title,
            information: chilItem.val().information,
          }
          setLista(oldArray=>[...oldArray,data])
          setListaQuery(oldArray=>[...oldArray,data])
        });        
        setLoading(false); 
      })

    }

    dados();    
    
  }, []);

 
  //Função de pesquisa

   function filter(){

    //Mensagem caso campo de pesquisa estiver vazio
        if(search === ""){

            alert('Digite uma palavra')

                setSearch('');
                setLista(listaQuery);
                setReturnList(false)
                
                return ;

        }        
        
        //Retirar acentos da palavra pesquisada
        let search1 = search.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
        console.log(listaQuery)
          const list = []              
        
            
          listaQuery.forEach((chilItem)=>{
              
              // verifica da palavra pesquisada esta na lista  
              //Retirar acentos da palavra cada item da lista                                            Case-sensitive
              if(chilItem.information.normalize('NFD').replace(/[\u0300-\u036f]/g, "").indexOf(String(search1.toLocaleLowerCase()))>=0 ||
                chilItem.information.normalize('NFD').replace(/[\u0300-\u036f]/g, "").indexOf(String(search1.toLocaleUpperCase()))>=0 ||
                chilItem.information.normalize('NFD').replace(/[\u0300-\u036f]/g, "").indexOf(String(search1[0].toLocaleUpperCase()+search.substr(1)))>=0 ||
                chilItem.information.normalize('NFD').replace(/[\u0300-\u036f]/g, "").indexOf(String(search1))>=0
                
              ){            

                let data ={ title: chilItem.title , information: chilItem.information }
                list.push(data);                   
                
              }
              

            })
            
            if(list.length === 0){
            
              alert('Palavra não encontrada')

              setSearch('');
              setLista(listaQuery);
              setReturnList(false)
              
              return ;
              
            }        
            setReturnList(true);
            setLista(list); 
            setSearch('');

  }

  //Requerer lista completa
  function initList(){
    setLista(listaQuery);
    setReturnList(false);
  }
  

   //Renderizar lista
  renderAccordians=()=> {   const items = [];
    
    for (item of lista) {
        items.push(
          
            <Accordian 
                title = {item.title}
                data = {item.information}
            />
        );
       
    }
    return items;
}
  

 
  return ( 
   <View style={styles.container}>    
         
         <View style={styles.viewInput}>

                <TextInput
                style={styles.input}            
                placeholder="Pesquisa..."
                value={search}
                onSubmitEditing={filter}
                onChangeText={(item)=> setSearch(item)}             
                />

              <TouchableOpacity style={styles.button} onPress={filter}>              
                    
                    <Icon name="search" size={30} color="#F0F8FF" />             
                   
             </TouchableOpacity>

         </View>

         <View style={styles.areaBtn}>

            { 
              returnList &&
              <TouchableOpacity style={styles.btn} onPress={initList}>

                    <Text style={styles.btnText}>Lista Completa</Text>

            </TouchableOpacity>  
            }       
             
         </View>

         <View style={styles.viewScroll}>
         
            { loading 
               ?
                <ActivityIndicator size={80} color={'#2E8B57'}/>     
               
               :
               
                <ScrollView style={styles.scrollContainer}>             

                    { renderAccordians() }                

                    </ScrollView>
                                           
                         
            
            }

            

        </View>

        <View style={styles.viewBtn}>

              <TouchableOpacity style={styles.btn} onPress={()=>navigation.goBack()}>

              <Text style={styles.btnText}>Voltar</Text>
              
              </TouchableOpacity>   

        </View>     

 </View>  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DCDCDC',   
  },
  scrollContainer:{
  flex: 1,
  width: '100%',
  },
  viewScroll:{
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',      
  },
  btn:{
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,    
  },
  btnText:{
    fontWeight: 'bold'
  },
  viewInput:{
    backgroundColor: 'rgba(46,139,87,0.7)',
    height: 50,
    margin: 10,
    marginTop: 30,    
    borderRadius: 10,
    paddingLeft: 20,
    flexDirection: 'row'    
  },
  input:{
    flex: 1
  },

  viewBtn:{
    height: 50
  },
  button:{
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,    
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,    
    backgroundColor: 'rgb(46,139,87)',    
   },
   areaBtn:{
    alignItems: 'center',
    justifyContent: 'center',
   }
 
});
