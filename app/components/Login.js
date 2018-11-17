import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import LoginForm from './LoginForm';
import Logo from './Logo';
import SignupSection from './SignupSection';
import ButtonSubmit from './ButtonSubmit';


export default class Login extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Logo />
                <LoginForm />
                <SignupSection />
                <ButtonSubmit />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#000000',
    },
    loginContainer:{
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center',
    },
    logo: {
        position: 'absolute',
        width: 300,
        height: 100,
        padding: 20
    },
    text: {
        fontSize: 18,
        color: '#ffffff'
    }
});
