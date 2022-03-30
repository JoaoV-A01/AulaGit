import React from 'react';
import{View,Image,Text,TouchableOpacity,StyleSheet} from 'react-native';
import { Ionicons} from '@expo/vector-icons';


export default function Cabecalho(){
    return(

        <View style={estilo.header}>
            <TouchableOpacity>
            <Ionicons name="menu" size={24} color="white" />
            </TouchableOpacity>
            <Text style ={estilo.Texto}> Play Store </Text>
            <TouchableOpacity>
            <Ionicons name="ios-search-sharp" size={24} color="white" />
            </TouchableOpacity>
        </View>

    )
}
const estilo = StyleSheet.create({
    header:{
        backgroundColor:'#002333',
        borderRadius:2,
        marginTop:8,
        width:'99,9%',
        padding:20,
        margin:2,
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom:20
    
    },
    Texto:{
        color:'white',
        marginLeft:-120,
        fontSize:20,
        fontWeight:'bold'
    }
})
