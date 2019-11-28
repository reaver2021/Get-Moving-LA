import React from 'react';
import {
    styleSheet,
    Text,
    View,
    ImageBackground
} from 'react';

// import profileContainer from './app/components/Profile';

import profileContainer from '../images/losangelesview.jpg';

class Profile extends React.Component{
    render(){
        return (
            // <ImageBackground
            // source={require('../images/losangelesview.jpg')}
            // style={styles.container}>

            //     <View style= {styles.overlayContainer}>
                
            //     <View style= {styles.top}>
            //         <Text style={styles.header}>P R O F I L E</Text>
            //    </View>

            //    <View style= {styles.profileContainer}>
            //        {/* <profileContainer />  //Sign In// */}
            //        {/* <profileContainer />   //Create Account// */}
            //     </View>

            //     </View>

            // </ImageBackground>
            <p>test</p>
            );
        }
    }

    const styles = {
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
    };


export default Profile;