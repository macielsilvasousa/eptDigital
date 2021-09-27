import React, {Component} from 'react';
import { View, TouchableOpacity, Text, StyleSheet, LayoutAnimation, Platform, UIManager} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

export default class Accordian extends Component{

    constructor(props)
     {
        
        super(props);

        this.state = { 
          data: props.data,
          expanded : false,
        }

        //console.log(this.props.data +' <=> ' + this.state.expanded  )

        if (Platform.OS === 'android') {
            UIManager.setLayoutAnimationEnabledExperimental(true);
        }
    }
  
  render() {

    return (
       <View>
            
            <TouchableOpacity  style={styles.row} onPress={()=>this.toggleExpand()}>

                <Text style={[styles.title, styles.font]}>{this.props.title}</Text>

                <Icon name={true ? 'keyboard-arrow-up' : 'keyboard-arrow-down'} size={30} />

            </TouchableOpacity>

            <View style={styles.parentHr}/>
            {
                true &&
                <View style={styles.child}>
                    <Text>{this.props.data}</Text>    
                </View>
            }
            
       </View>
    )
  }

  toggleExpand=()=>{
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);

     this.setState({expanded : !this.state.expanded})

   
  }

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
        width:'100%'
    },
    child:{
        padding:16,
    }
    
});