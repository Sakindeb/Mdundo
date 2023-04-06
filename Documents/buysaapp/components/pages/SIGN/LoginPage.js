import { useState, useEffect } from "react";
// import { TextInput } from "react-native-gesture-handler";
import {View, Text, TextInput, Image, StyleSheet, TouchableOpacity, ImageBackground, ToastAndroid} from "react-native";
import { useNavigation } from '@react-navigation/native';

const iconColor = "#46A637";
const primaryColor = "#212340";

const LoginPage = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [personal, setPersonal] = useState({});
    const navigation = useNavigation();


    const loginFunc = () => {
        fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: username,
                password: password,
                // expiresInMins: 60, // optional
            })
            })
            .then(res => res.json())
            .then(data => {
                setPersonal(data);
                handlePress(data.id);
            })
            .then(err => console.log(err))
            .finally(
                showToast()
            );
    }

    const showToast = () => {
        ToastAndroid.show('Login successful!', ToastAndroid.SHORT);
    };

    function handlePress(userid) {
        console.log(userid);
        navigation.replace('Zamara', { itemId: userid, otherParam: 'some value' });
    }

    return(
        <ImageBackground source={{uri:"https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"}} style={styles.background}>

        <View style={styles.container}>
            <Image
                style={{ width: 90, height: 90, borderRadius:90, marginBottom:30}}
                source={{uri: 'https://www.w3schools.com/howto/img_avatar2.png',}}
            />
            <View style={styles.inputContainer}>
                <TextInput 
                    style={styles.input}
                    placeholder="Username"
                    onChangeText={newText => setUsername(newText)}
                    defaultValue={username}>
                </TextInput>

                <TextInput 
                    style={styles.input}
                    placeholder="Password"
                    onChangeText={newText => setPassword(newText)}
                    defaultValue={password}>
                </TextInput>
            </View>
            <TouchableOpacity style={styles.button} onPress={loginFunc}>
                <Text style={{...styles.buttonText }}>Login</Text>
            </TouchableOpacity>
            <View style={{flexDirection:"row", justifyContent:"space-between", alignItems:"flex-start",  width: 290}}>
                <Text style={{color:iconColor, marginTop:20}}>Forgot password?</Text>
                <Text style={{color:iconColor, marginTop:20}}>New User?</Text>
            </View>
        </View>
        </ImageBackground>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 20, 0.8)',
        // opacity:40,
        alignItems: 'center',
        justifyContent: 'center',
      },
      background: {
        flex: 1,
        resizeMode: 'cover',
      },
      title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 30,
      },
      inputContainer: {
        marginBottom: 30,
      },
      input: {
        width: 300,
        height: 50,
        backgroundColor: '#f2f2f2',
        borderRadius: 10,
        paddingLeft: 15,
        marginBottom: 15,
      },
      button: {
        width: 300,
        height: 50,
        backgroundColor: primaryColor,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
      },
      buttonText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold',
      },
  });
  

export default LoginPage;