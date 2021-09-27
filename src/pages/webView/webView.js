import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { WebView } from 'react-native-webview';



export default function Web() {
  return (    
          
       <WebView
        source={{ uri: 'https://docs.google.com/forms/d/e/1FAIpQLSdQAjH7Lg1gr8nY95ASW_008FjQjmhxZ5tz1mxmMst7dVlXZA/viewform' }}
        style={{ marginTop: 20, flex: 1 }}
      />     
    
  );
}


