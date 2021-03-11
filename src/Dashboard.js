import React from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image,
    TouchableOpacity,
    Pressable,
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
                    darkShadowColor={Colors.blackColor}
                    lightShadowColor='white'
                    style={styles.heaerEndSection}
                >
                    <View style={[styles.dot]} />
                    <View style={[styles.red]} />
                    <View style={[styles.green]} />
                    <View style={[styles.yellow]} />

                </Neomorph>

            </View>
            <Text style={styles.headerDate}>Tuseday | <Text style={{ color: Colors.blackColor, fontWeight: 'bold' }}>March 12</Text> </Text>

            <View style={{ marginTop: perfectSize(66) }}>
                <View style={{ flexDirection: "row", alignItems: 'center', justifyContent: 'space-around' }}>
                    <Neomorph
                        swapShadows
                        style={styles.menuItems}
                    >
                        <TouchableOpacity style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between', marginTop: perfectSize(18) }}>
                            <Neomorph
                                swapShadows
                                style={styles.menuIcons}
                            >
                                <Image
                                    source={Images.Wifi}
                                    style={[styles.icon, { tintColor: Colors.blueDotColor }]}
                                />
                            </Neomorph>
                            <Neomorph
                                swapShadows
                                style={styles.menuIcons}
                            >
                                <Image
                                    source={Images.Bluetooth}
                                    style={[styles.icon, { tintColor: Colors.headerTextColor }]}
                                />
                            </Neomorph>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between', marginTop: perfectSize(18) }}>
                            <Neomorph
                                swapShadows
                                style={styles.menuIcons}
                            >
                                <Image
                                    source={Images.Notification}
                                    style={[styles.icon, { tintColor: Colors.headerTextColor }]}
                                />
                            </Neomorph>
                            <Neomorph
                                swapShadows
                                style={styles.menuIcons}
                            >
                                <Image
                                    source={Images.AlarmClock}
                                    style={[styles.icon, { tintColor: Colors.blueDotColor }]}
                                />
                            </Neomorph>
                        </TouchableOpacity>
                    </Neomorph>






                    <Neomorph
                        shadowRadius
                        style={styles.menuItems}
                    >
                        <Text style={{ fontWeight: 'bold', fontSize: perfectSize(14), marginTop: perfectSize(23) }}>Animals</Text>
                        <Text style={[styles.headerText, { fontSize: perfectSize(10) }]}>Maroon 5</Text>
                        <Neomorph
                            swapShadows
                            style={{

                                height: perfectSize(8),
                                width: perfectSize(140),
                                borderWidth: 1,
                                borderRadius: 23,
                                backgroundColor: Colors.backgroundColor,
                                borderColor: Colors.headerTextColor,
                                shadowRadius: 10,
                                marginTop: perfectSize(23)
                            }}
                        >
                            <TouchableOpacity style={{ height: '100%', width: '50%', backgroundColor: Colors.yellowDotColor }} />
                            <TouchableOpacity style={{ flexDirection: 'row', marginTop: perfectSize(23), alignItems: 'center', justifyContent: 'space-around' }}>
                                <Image
                                    source={Images.Fastbackward}
                                    style={[styles.icon, { tintColor: Colors.headerTextColor }]}
                                />

                                <Image
                                    source={Images.Pause}
                                    style={[styles.icon, { tintColor: Colors.yellowDotColor }]}
                                />



                                <Image
                                    source={Images.Fastforward}
                                    style={[styles.icon, { tintColor: Colors.headerTextColor }]}
                                />

                            </TouchableOpacity>


                        </Neomorph>
                    </Neomorph>
                </View>


                <View style={{ flexDirection: "row", alignItems: 'center', justifyContent: 'space-around', marginTop: perfectSize(23) }}>
                    <View

                        style={styles.menuItems}
                    >
                        <TouchableOpacity style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between', marginTop: perfectSize(18) }}>
                            <Neomorph
                                swapShadows
                                style={[styles.menuIcons, { borderRadius: perfectSize(18) }]}
                            >
                                <Image
                                    source={Images.Rain}
                                    style={[styles.icon, { tintColor: Colors.blueDotColor, height: perfectSize(56), width: perfectSize(56) }]}
                                />
                            </Neomorph>
                            <Neomorph
                                swapShadows
                                style={[styles.menuIcons, { borderRadius: perfectSize(18), height: perfectSize(56), width: perfectSize(56) }]}
                            >
                                <Text style={{ color: Colors.blackColor, fontWeight: 'bold' }}>85 F</Text>
                            </Neomorph>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between', marginTop: perfectSize(18) }}>
                            <Neomorph
                                swapShadows
                                style={[
                                    styles.menuIcons,
                                    {
                                        width: perfectSize(150),
                                        borderRadius: perfectSize(18),
                                        height: perfectSize(80),

                                    }]}
                            >
                                <Text style={{ fontWeight: 'bold', fontSize: perfectSize(14) }}>Bangladesh</Text>
                                <Text style={[styles.headerText, { fontSize: perfectSize(10) }]}>White House</Text>

                            </Neomorph>

                        </TouchableOpacity>
                    </View>






                    <View

                        style={[styles.menuItems, { flexDirection: 'row', justifyContent: 'space-around' }]}
                    >


                        <Neomorph
                            inner
                            style={{
                                height: perfectSize(150),
                                width: perfectSize(56),
                                backgroundColor: Colors.backgroundColor,
                                shadowRadius: 10,
                                borderRadius: perfectSize(18),
                                marginTop: perfectSize(39)

                            }}
                        >
                            <View
                                style={{
                                    height: '40%',
                                    width: '100%',

                                    backgroundColor: Colors.yellowDotColor,
                                    borderTopLeftRadius: perfectSize(5),
                                    borderTopRightRadius: perfectSize(5),
                                    position: 'absolute',
                                    bottom: 0,
                                    borderBottomLeftRadius: perfectSize(18),
                                    borderBottomRightRadius: perfectSize(18)
                                }}
                            >
                                <Text style={{
                                    fontSize: perfectSize(18),
                                    color: 'white',
                                    fontWeight: 'bold',
                                    top: '56%',

                                    textAlign: 'center'
                                }}>40%</Text>
                            </View>

                        </Neomorph>

                        <Neomorph
                            inner
                            style={{
                                height: perfectSize(150),
                                width: perfectSize(56),
                                backgroundColor: Colors.backgroundColor,
                                shadowRadius: 10,
                                borderRadius: perfectSize(18),
                                marginTop: perfectSize(39)

                            }}
                        >
                            <View
                                style={{
                                    height: '60%',
                                    width: '100%',

                                    backgroundColor: Colors.yellowDotColor,
                                    borderTopLeftRadius: perfectSize(5),
                                    borderTopRightRadius: perfectSize(5),
                                    position: 'absolute',
                                    bottom: 0,
                                    borderBottomLeftRadius: perfectSize(18),
                                    borderBottomRightRadius: perfectSize(18)
                                }}
                            >
                                <Image
                                    source={Images.SpeakerFilledAudioTool}
                                    style={{ height: perfectSize(23), width: perfectSize(23), alignSelf: 'center', top: '67%', tintColor: 'white' }}
                                />

                            </View>

                        </Neomorph>



                    </View>
                </View>
                <Text style={{
                    textAlign: 'center',
                    marginTop: perfectSize(100),
                    fontWeight: 'bold',
                    fontSize: perfectSize(23),
                    letterSpacing: perfectSize(5)
                }}>4:58 AM</Text>
                <View style={{ alignSelf: 'center', flexDirection: 'row', justifyContent: 'space-around', width: perfectSize(67) }}>
                    <View style={[styles.dot]} />
                    <View style={[styles.red]} />
                    <View style={[styles.green]} />
                    <View style={[styles.yellow]} />

                </View>


            </View>
            <View style={styles.end}>
                <Neomorph swapShadows style={styles.end}>
                    <Neomorph 
                    swapShadows 
                    style={{
                        height:perfectSize(40),
                        width:perfectSize(40),
                        backgroundColor:Colors.backgroundColor,
                        shadowRadius:10,
                        borderRadius:19,
                        alignItems:'center',
                        marginTop:-5,
                        justifyContent:'center'
                        }}>
                        <Image
                            source={Images.Settings}
                            style={styles.endIcon}
                        />

                    </Neomorph>
                    <Neomorph 
                    swapShadows 
                    style={{
                        height:perfectSize(40),
                        width:perfectSize(40),
                        backgroundColor:Colors.backgroundColor,
                        shadowRadius:10,
                        borderRadius:19,
                        alignItems:'center',
                        marginTop:-5,
                        justifyContent:'center'
                        }}>
                        <Image
                            source={Images.Email}
                            style={styles.endIcon}
                        />

                    </Neomorph>
                    <Neomorph 
                    swapShadows 
                    style={{
                        height:perfectSize(40),
                        width:perfectSize(40),
                        backgroundColor:Colors.backgroundColor,
                        shadowRadius:10,
                        borderRadius:19,
                        alignItems:'center',
                        marginTop:-5,
                        justifyContent:'center'
                        }}>
                        <Image
                            source={Images.Menu}
                            style={styles.endIcon}
                        />

                    </Neomorph>
                    <Neomorph 
                    swapShadows 
                    style={{
                        height:perfectSize(40),
                        width:perfectSize(40),
                        backgroundColor:Colors.backgroundColor,
                        shadowRadius:10,
                        borderRadius:19,
                        alignItems:'center',
                        marginTop:-5,
                        justifyContent:'center'
                        }}>
                        <Image
                            source={Images.PhoneCall}
                            style={styles.endIcon}
                        />

                    </Neomorph>

                </Neomorph>

            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.backgroundColor,
        marginTop: -90

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
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'

    },
    hearNotifactionIcon: {
        height: perfectSize(18),
        width: perfectSize(19),
        tintColor: Colors.headerTextColor,
    },
    dot: {

        height: 10,
        width: 10,
        borderRadius: 23,
        backgroundColor: Colors.blueDotColor
    },
    red: {
        height: 10,
        width: 10,
        borderRadius: 23,
        backgroundColor: Colors.redDotColor,
    },
    green: {
        height: 10,
        width: 10,
        borderRadius: 23,
        backgroundColor: Colors.greenDotColor

    },
    yellow: {
        height: 10,
        width: 10,
        borderRadius: 23,
        backgroundColor: Colors.yellowDotColor
    },
    headerDate: {
        color: Colors.headerTextColor,
        textAlign: 'right',
        fontSize: perfectSize(18),
        right: perfectSize(36),
        marginTop: perfectSize(14)
    },
    menuItems: {
        height: perfectSize(156),
        width: perfectSize(150),
        backgroundColor: Colors.backgroundColor,
        shadowRadius: 10,
        borderRadius: 23,
        alignItems: 'center',


    },
    menuIcons: {
        height: perfectSize(50),
        width: perfectSize(50),
        backgroundColor: Colors.backgroundColor,
        shadowRadius: 10,
        borderRadius: 23,
        marginRight: 10,
        marginLeft: 10,
        alignItems: 'center',
        justifyContent: 'center'


    },
    menuIcons2: {
        height: perfectSize(50),
        width: perfectSize(50),
        backgroundColor: Colors.backgroundColor,
        shadowRadius: 10,
        borderRadius: 23,
        marginRight: 10,
        marginLeft: 10

    },
    icon: {
        height: perfectSize(25),
        width: perfectSize(25)
    },
    end: {
        height: perfectSize(50),
        width: perfectSize(300),
        alignSelf: 'center',
        backgroundColor: Colors.backgroundColor,
        shadowRadius: 10,
        borderRadius: 23,
        marginTop: perfectSize(23),
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row'
    },
    endIcon:
    {
        height: perfectSize(18),
        width: perfectSize(18),
       tintColor:Colors.headerTextColor
    }

})