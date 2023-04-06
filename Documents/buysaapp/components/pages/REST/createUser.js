import { useState, useEffect, useCallback } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Dimensions, Pressable , ToastAndroid} from 'react-native';
import { useRoute } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';


const iconColor = "#46A637";
const primaryColor = "#212340";


const CreateUser = () => {
    const route = useRoute();
    const {itemId, otherParam } = route.params;
    const [windowHeight, setWindowHeight] = useState(0);
    const [windowWidth, setWindowWidth] = useState(0);

    const [staffnumber, setStaffnumber] = useState("");
    const [staffname, setStaffname] = useState("");
    const [staffemail, setStaffemail] = useState("");
    const [department, setDepartment] = useState("");
    const [salary, setSalary] = useState("")

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
          flexDirection: 'column'
        },
        containername: {
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            marginTop:10,
            marginLeft:10,
            marginRight:10
        },
        name: {
          fontSize: 18,
          fontWeight: 'light',
          fontFamily:"Lato-regular",
          margin:20
        },
    
        subtitletext: {
            fontSize: 14,
            fontWeight: 'bold',
            fontFamily:"Lato-regular",
            color:primaryColor,
            marginBottom:10,
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
            width:windowWidth-20,
            height: 50,
            backgroundColor: '#f2f2f2',
            borderRadius: 10,
            paddingLeft: 15,
            marginBottom: 15,
            fontFamily:"Lato-Regular",
          },
          button: {
            flexDirection:"row",
            width: 150,
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
            marginLeft:10
          },
    });

    const showToast = () => {
      ToastAndroid.show('New User Successfully Created', ToastAndroid.SHORT);
    };

    const executeNewUser = useCallback(() => { 
        fetch('https://crudcrud.com/api/b7b6cf0863384a46ab32d41ea3b24eff/zamara', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                staffnumber : staffnumber,
                staffname: staffname,
                staffemail: staffemail,
                department:department,
                salary:salary
            })
            }
        ).then(
            res => console.log(res.json())
        ).finally(
          ()=>{
           showToast();
          }
        )
    }, [salary]);


    useEffect(() =>{
        setWindowHeight(Dimensions.get('window').height);
        setWindowWidth(Dimensions.get('window').width);
        console.log(windowHeight);
    }, []);


    return(
        <View style={styles.container}>
            <View style={styles.containername}>
                <Text style={styles.subtitletext}>Staff Name</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Staff Name"
                    onChangeText={newText => setStaffname(newText)}
                    defaultValue={staffname}></TextInput>
            </View>
            <View style={styles.containername}>
                <Text style={styles.subtitletext}>Staff Number</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Staff Number"
                    onChangeText={newText => setStaffnumber(newText)}
                    defaultValue={staffnumber}></TextInput>
            </View>
            <View style={styles.containername}>
                <Text style={styles.subtitletext}>Staff Email</Text>
                <TextInput 
                    style={styles.input}
                    placeholder="Email"
                    onChangeText={newText => setStaffemail(newText)}
                    defaultValue={staffemail}></TextInput>
            </View>            
            <View style={styles.containername}>
                <Text style={styles.subtitletext}>Department</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Department"
                    onChangeText={newText => setDepartment(newText)}
                    defaultValue={department}></TextInput>
                <Text style={styles.subtitletext}>Salary</Text>
            </View>
            <View style={styles.containername}>
                <TextInput 
                    style={styles.input}
                    placeholder="Salary"
                    onChangeText={newText => setSalary(newText)}
                    defaultValue={salary}></TextInput>
            </View>
            <View style={{flexDirection:"row", alignItems:"center", justifyContent:"center"}}>
            <Pressable style={styles.button} onPress={() => executeNewUser()}>
                <Icon name="plus" size={20} color={iconColor} />
                 <Text style={styles.buttonText}>Create Staff</Text>
            </Pressable>
            </View>
        </View>
    )
}


export default CreateUser;