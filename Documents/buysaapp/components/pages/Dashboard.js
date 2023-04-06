import { useState, useEffect } from "react";
import {View, Text, Image, FlatList ,SafeAreaView, Button, StyleSheet, ScrollView, Pressable} from "react-native";
import { useNavigation } from '@react-navigation/native';
import {Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Divider from "../widgets/Divider";
import { useRoute } from '@react-navigation/native';


const iconColor = "#46A637";
const primaryColor = "#212340";

const styles = StyleSheet.create({
    text: {
        fontFamily: 'Lato-Regular',
        fontSize: 16,
    },

    subtitletext: {
        fontFamily: 'Lato-Regular',
        fontSize: 16,
    },

    viewdivs:{
        flex:1,
        flexDirection:"row",
        justifyContent:"space-around",
        alignItems:"center"
    },
    icondiv:{
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center"
    },
    heading:{
        marginLeft:10,
        fontFamily:"Lato-Regular",
        color:primaryColor,
        fontWeight:"200",
        fontSize:14
    },
    menucard:{
        backgroundColor:"whitesmoke", 
        height:100,
        width:100, 
        margin:20,
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        borderColor:primaryColor,
        borderBottomWidth:0.3,
        color:primaryColor,
        fontFamily:"Lato-Regular",
        borderRadius:9,
        elevation:4,
        shadowColor:primaryColor,
    }
});

const Dashboard = () => {
    const route = useRoute();
    const [personal, setPersonal] = useState({});
    const navigation = useNavigation();
    const [windowHeight, setWindowHeight] = useState(0);
    const [windowWidth, setWindowWidth] = useState(0);

    const {itemId, otherParam } = route.params;

    function handlePress(userid) {
        console.log(userid);
        navigation.navigate('ListStaff', { itemId: userid, otherParam: 'some value' });
    }

    function handleContinents(userid) {
        console.log(userid);
        navigation.navigate('Continents', { itemId: userid, otherParam: 'some value' });
    }


    useEffect(() => {
        // const windowWidth = Dimensions.get('window').width;
        setWindowHeight(Dimensions.get('window').height);
        setWindowWidth(Dimensions.get('window').width);
        console.log(windowHeight);
        console.log("I ran");
        fetch('https://dummyjson.com/users/'+itemId)
            .then(res => res.json())
            .then(data => {
                setPersonal(data);
            })
            .then(err => console.log(err))
    }, [])


    return(
        <ScrollView>
            <View style={{flexDirection:"column", height:windowHeight*0.17, alignItems:"center", justifyContent:"space-around", backgroundColor:"white",}}>
                <View style={{flexDirection:"row", alignItems:"center", justifyContent:"space-around", width:windowWidth}}>
                    {/* <Button title="Staff" onPress={handlePress}></Button> */}
                    <View style={styles.icondiv}>
                        <Icon name="home" size={30} color={iconColor} />
                        <Text style={styles.subtitletext}>Home</Text>
                    </View>
                    
                    <Image
                        style={{ width: 90, height: 90, borderRadius:90}}
                        source={{uri: personal.image}}
                    />
                     <View style={styles.icondiv}>
                        <Icon name="user" size={30} color={iconColor} />
                        <Text  style={styles.subtitletext}>Sign Out</Text>
                    </View>
                    {/* <Button title="Staff" onPress={handlePress2}></Button> */}
                </View>
                <View>
                    <Text style={styles.text}>Welcome, {personal.firstName} {personal.lastName}</Text>
                </View>
            </View>
            <View style={{flexDirection:"column"}}>

                <View style={{flexDirection:"row", justifyContent:"space-around", backgroundColor:"white"}}>
                    <Pressable style={styles.menucard} onPress={()=>{handlePress()}}>
                        <Image
                            style={{ width: 50, height: 50, borderRadius:10}}
                            source={{uri: 'https://buysa.s3.af-south-1.amazonaws.com/continents/staff.webp',}}
                        />
                        <Text>Staff</Text>
                    </Pressable>
                    <Pressable style={styles.menucard} onPress={()=>{handleContinents()}}>
                        <Image
                            style={{ width: 50, height: 50, borderRadius:10}}
                            source={{uri: 'https://buysa.s3.af-south-1.amazonaws.com/continents/AF.png',}}
                        />
                        <Text>Continents</Text>
                    </Pressable>
                    <Pressable style={styles.menucard} onPress={()=>{handlePress()}}>
                        <Image
                            style={{ width: 50, height: 50, borderRadius:10}}
                            source={{uri: 'https://buysa.s3.af-south-1.amazonaws.com/continents/company.png',}}
                        />
                        <Text>Company</Text>
                    </Pressable>
                </View>

                <View>
                    <View style={{margin:20}}>
                        <View style={{flexDirection:"row", alignItems:"center"}}>
                            <Icon name="envelope" size={20} color={iconColor} />
                            <Text style={styles.heading}>Email</Text>
                        </View>
                        <Text>{personal.email}</Text>
                    </View>
                    <View style={{margin:20}}>
                        <View style={{flexDirection:"row", alignItems:"center"}}>
                            <Icon name="phone" size={20} color={iconColor} />
                            <Text style={styles.heading}>Phone</Text>
                        </View>
                        <Text>{personal.phone}</Text>
                    </View>
                </View>

             

                <View style={styles.viewdivs}>
                    <View style={{backgroundColor:"orange", flex:0.5, margin:10,borderRadius:9, flexDirection:"column", justifyContent:"center"}}>
                        <Text style={{fontSize:20, color:"white", fontWeight:"bold", margin:10, }}>Height</Text>
                        <View style={{flexDirection:"row", alignItems:"flex-end", margin:10, }}>
                            <Text style={{fontSize:60, color:"white", fontWeight:"bold"}}>{personal.height}</Text>
                            <Text style={{fontSize:20, color:"white", fontWeight:"bold"}}>CM</Text>
                        </View>
                    </View>
                    <View style={{backgroundColor:primaryColor, flex:0.5, margin:10, borderRadius:9, flexDirection:"column", justifyContent:"center"}}>
                        <Text style={{fontSize:20, color:"white", fontWeight:"bold", margin:10, }}>Weight</Text>
                        <View style={{flexDirection:"row", alignItems:"flex-end", margin:10, }}>
                            <Text style={{fontSize:60, color:"white", fontWeight:"bold"}}>{personal.weight}</Text>
                            <Text style={{fontSize:20, color:"lightgreen", fontWeight:"bold"}}>Kgs</Text>
                        </View>
                    </View>
                </View>

        

                <View style={{flexDirection:"column"}}>
                    <View style={{margin:20}}>
                            <View style={{flexDirection:"row", alignItems:"center"}}>
                                <Icon name="calendar" size={20} color={iconColor} />
                                <Text style={styles.heading}>Birth Date</Text>
                            </View>
                            <View style={{flexDirection:"row", alignItems:"center"}}>
                                <Text>{personal.birthDate}</Text>
                                <Text style={{fontWeight:"bold", color:primaryColor}}>({personal.age} years old)</Text>
                            </View>
                    </View>
                    <View style={{margin:20}}>
                        <View style={{flexDirection:"row", alignItems:"center"}}>
                            <Icon name="eye" size={20} color={iconColor} />
                            <Text style={styles.heading} >Eye Color</Text>
                        </View>
                        <View  style={{flexDirection:"row", alignItems:"center"}}>
                            <View style={{width:20, height:20, backgroundColor:`${personal.eyeColor}`.toLowerCase()}}></View>
                            <Text style={{marginLeft:10}}>{personal.eyeColor}</Text>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}

export default Dashboard;

