import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    ImageBackground
} from 'react-native';

// import profileContainer from './app/components/Profile';

import profileContainer from './app/components/DowntownLosAngeles.jpg';

export default class App extends React.Component{
    render(){
        return (
            <ImageBackground
            source={require('./app/imgages/DowntownLosAngeles.jpg')}
            style={styles.container}>

                <View style= {styles.overlayContainer}>
                
                <View style= {Style.top}>
                    <Text style={styles.header}>P R O F I L E</Text>
               </View>

               <View style= {styles.profileContainer}>
                   <profileContainer />  //Sign In//
                   <profileContainer />   //Create Account//
                </View>

                </View>

            </ImageBackground>
            );
        }
    }

    const styles = StyleSheet.create({
        container: {
            flex : 1,
            width: '100%',
            height: '100%',
        },
        overlayContainer: {
            flex: 1,
            backgroundColor: 'rgba(47,163,218, .4)'
        },
        top: {
            height: '50%', 
            alignItems: 'center',
            justifyContent: 'center',
        },
        header: {
            color: '#fff', 
            fontsize: 28,
            borderColor: '#fff',
            borderWidth: 2, 
            padding: 20,  //includes padding top and bottom//
            paddingLeft: 40,
            paddingRight: 40, 
            backgroundColor: 'rgba(255,255,255, .1' //.1 adds very much transparacy//
        },
        loginContainer: {
            height: '40%',
            flexDirection: 'row', //allows login/menu container to be aligned//
            flexWrap: 'wrap',  //alows you to stack flex items across multi lines//



        }
    });


