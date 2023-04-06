import React,{ useState, useEffect } from "react";
import {Card} from "../../widgets/Card";
import { StyleSheet, Text, View,  Alert, Image, Pressable, ToastAndroid} from 'react-native';
import { useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

const iconColor = "#46A637";
const primaryColor = "#212340";

const styles = StyleSheet.create({
    card: {
      backgroundColor: '#fff',
      borderRadius: 10,
      padding: 10,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 4,
      elevation: 5,
    },
    container: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
    },
    containername: {
        flexDirection: 'column',
        marginBottom:20,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },

    name: {
      fontSize: 18,
      fontWeight: 'bold',
      fontFamily:"Lato-regular",
      marginLeft:20
    },

    subtitletext: {
        fontSize: 14,
        fontWeight: 'bold',
        // fontFamily:"Lato-regular",
        marginLeft:10,
        color:primaryColor
    },
    showcasediv:{
        margin:20,
        flexDirection:"row",
        alignItems:"flex-end",
        justifyContent:"center"
    }
});

const ReadUser = () => {
    const route = useRoute();
    const navigation = useNavigation();
    
    const [staff, setStaff] = useState([]);
    const {itemId, otherParam } = route.params;

    let url = 'https://crudcrud.com/api/b7b6cf0863384a46ab32d41ea3b24eff/zamara/'+itemId;

    const execute = () => { 
        fetch(url)
        .then(res => res.json())
        .then(
            data => {
                setStaff(data); 
            }
        )
    }

    const showToast = () => {
        ToastAndroid.show('User Successfully Delete', ToastAndroid.SHORT);
    };


    const deleteUser = (itemId) => {
        Alert.alert(
            'Delete Staff', 'Are you sure you want to delete the staff?', [
            {
              text: 'Cancel',onPress: () => console.log('Cancel Pressed'), style: 'cancel',
            },
            {text: 'Delete', onPress: () => {executeDelete(itemId)}, style:'alert'},
        ]);
    }

    const updateUser = (staff) => {
        Alert.alert('Update Staff', 'Are you sure you want to update the staff?',[ 
            {
              text: 'Cancel',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel',
            },
            {text: 'Update', onPress: () => {
                navigation.navigate('UpdateStaff', { itemId: staff._id, staff: staff });
            }},
          ]);
    }

    const executeDelete = (itemId) => {
        fetch('https://crudcrud.com/api/b7b6cf0863384a46ab32d41ea3b24eff/zamara/'+itemId, { method: 'DELETE'}
        ).then(
            res => console.log(res.json())
        ).finally(()=>{
            showToast();
            navigation.replace('ListStaff', { itemId: userid, otherParam: 'some value' });
        }
        )
    }

    useEffect(() => {
        execute();
    }, [])


    return (
        <View>
            <View>
                <View style={{flexDirection:"row", margin:20}}>
                    <Image
                        style={{ width: 90, height: 90, borderRadius:90}}
                        source={{uri: 'https://www.w3schools.com/howto/img_avatar2.png',}}
                    />
                    <View style={{flexDirection:"column", justifyContent:"space-between"}}>
                    <View style={{}}>
                        <Text style={styles.name}>{staff.staffname}</Text>
                        <Text style={{marginLeft:20}}>@{staff.staffnumber}</Text>
                    </View>
                    <Text style={styles.name}>{staff.department}</Text>
                    </View>
                </View>

                <View style={styles.containername}>
                    <View style={styles.showcasediv}>
                        <Icon name="building" size={20} color={iconColor} />
                        <Text style={styles.subtitletext}>Department</Text>
                    </View>
                    <Text style={styles.name}>{staff.department}</Text>
                </View>

                
                <View style={styles.containername}>
                    <View style={styles.showcasediv}>
                        <Icon name="envelope" size={20} color={iconColor} />
                        <Text style={styles.subtitletext}>Email</Text>
                    </View>
                    <Text style={styles.name}>{staff.staffemail}</Text>
                </View>

                
                <View style={styles.containername}>
                    <View style={styles.showcasediv}>
                        <Icon name="money" size={20} color={iconColor} />
                        <Text style={styles.subtitletext}>Salary</Text>
                    </View>
                    <Text style={styles.name}>{staff.salary}</Text>
                </View>
                <View style={styles.container}>
                    <Pressable onPress={()=>{deleteUser(staff._id)}} style={{flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
                        <Icon name="trash" size={30} color={iconColor} />
                        <Text>Delete</Text>
                    </Pressable>
                    
                    <Pressable onPress={()=>{updateUser(staff)}} style={{flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
                        <Icon name="edit" size={30} color={iconColor} />
                        <Text>Update</Text>
                    </Pressable>
                </View>
            </View> 
        </View>
       
    )
}

export default ReadUser;