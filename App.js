import {View, Text, StyleSheet} from "react-native";
import React, {Component} from "react";
export default function App(){
    return(
        <View style={css.container}>
            <View style={css.purple}>
                <Text style={cssFont.Text}>Purple: #C9C9FF</Text>
            </View>
            <View style={css.blue}>
                <Text style={cssFont.Text}>Blue: #3D85C6</Text>
            </View>
            <View style={css.green}>
                <Text style={cssFont.Text}>Green: #96CC96</Text>
            </View>
            <View style={css.yellow}>
                <Text style={cssFont.Text}>Yellow: #F4B940</Text>
            </View>
        </View>
    )
}

const css = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        margin: 20,
    },
    purple:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#C9C9FF',
        width: '100%',
        margin: 10,
        borderRadius: 20
    },
    blue:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#3D85C6',
        width: '100%',
        margin: 10,
        borderRadius: 20
    },
    green:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#96CC96',
        width: '100%',
        margin: 10,
        borderRadius: 20
    },
    yellow:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F4B940',
        width: '100%',
        margin: 10,
        borderRadius: 20
    }
})

const cssFont = StyleSheet.create({
    Text:{
        fontWeight: 'bold'
    }
})