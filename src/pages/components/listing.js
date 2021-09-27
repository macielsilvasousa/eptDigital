import React,{useState} from 'react';
import { View, TouchableOpacity, Text, StyleSheet, LayoutAnimation} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

export default function Accordian(props) {

const [expanded ,setExpanded]= useState(false);
        
return (
        <View>
                
            <TouchableOpacity  style={styles.row}

                onPress={()=> {

                                LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);     
                                
                                setExpanded(!expanded)
                            
                                }
                
                        }

            >

                <Text style={[styles.title, styles.font]}>{props.title}</Text>

                <Icon name={expanded ? 'keyboard-arrow-up' : 'keyboard-arrow-down'} size={30} />

            </TouchableOpacity>

            <View style={styles.parentHr}/>
            {
                expanded &&
                <View style={styles.child}>       
                    <Text>{props.data}</Text>    
                </View>
            }
            
        </View>
  );  
}


const styles = StyleSheet.create({
    title:{
        fontSize: 14,
        fontWeight:'bold',
    },
    row:{
        flexDirection: 'row',
        justifyContent:'space-between',
        height:56,
        paddingLeft:25,
        paddingRight:18,
        alignItems:'center',        
    },
    parentHr:{
        height:1,
        width:'100%',
        backgroundColor: '#000000'
    },
    child:{
        padding:16,
        backgroundColor: 'rgba(0,100,0, 0.2)'
    }
    
});