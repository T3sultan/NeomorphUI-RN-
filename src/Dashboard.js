import React from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image
} from 'react-native';
import { Neomorph } from 'react-native-neomorph-shadows';
import perfectSize from './theme/Screen';
import Images from './theme/Images';
import Colors from './theme/Colors';

export default function Dashboard() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Gmail</Text>
                <Text style={styles.headerText}>Images</Text>
                <Text style={styles.headerText}>|</Text>
                <Image
                    source={Images.Bell}
                    style={styles.hearNotifactionIcon}
                />
                <Neomorph
                    darkShadowColor='black'
                    lightShadowColor='white'
                    style={styles.heaerEndSection}
                >
                 <View style={[styles.dot]}/>
                 <View style={[styles.red]}/>
                 <View style={[styles.green]}/>
                 <View style={[styles.yellow]}/>

                </Neomorph>

            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.backgroundColor

    },
    header: {
        height: perfectSize(50),
        width: '100%',
        marginTop: perfectSize(100),
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    headerText: {
        color: Colors.headerTextColor,
        fontSize: perfectSize(12)

    },
    heaerEndSection:
    {
        height: perfectSize(30),
        width: perfectSize(90),
        backgroundColor: Colors.backgroundColor,
        shadowRadius: 10,
        borderRadius: perfectSize(23),
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    hearNotifactionIcon:{
        height: perfectSize(18),
        width: perfectSize(19),
        tintColor: Colors.headerTextColor,
    },
    dot:{
        
        height:10,
        width:10,
        borderRadius:23,
        backgroundColor:Colors.blueDotColor
    },
    red:{
        height:10,
        width:10,
        borderRadius:23,
        backgroundColor:Colors.redDotColor,
       

    },
    green:{
        height:10,
        width:10,
        borderRadius:23,
        backgroundColor:Colors.greenDotColor

    },
    yellow:{
        height:10,
        width:10,
        borderRadius:23,
        backgroundColor:Colors.yellowDotColor
    }
    
})