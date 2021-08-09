import React from "react";
import { TouchableOpacity, Text, StyleSheet} from 'react-native'

export function Button({onPress}){
    return (
        <TouchableOpacity 
        style={styles.button} 
        onPress={onPress}
        >
            <Text style={styles.buttontext}>Adicionar</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button:{
        backgroundColor:"#FE4C0E",
        padding: 20,
        borderRadius: 7,
        alignItems: 'center',
        marginTop: 20

    },
    buttontext:{
        color: '#fff',
        fontSize: 17,
        fontWeight: 'bold'
,    },
})