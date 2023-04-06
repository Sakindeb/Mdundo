import Card from "../../widgets/Card"
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View ,ScrollView, TouchableOpacity, ActivityIndicator} from 'react-native';
import FAB from "../../widgets/FAB";
import { useNavigation } from '@react-navigation/native';
import {Dimensions} from 'react-native';

export default function ListUsers() {
  const [users, setUsers] = useState([]);
  const [visible, setVisible] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [windowHeight, setWindowHeight] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);

  const navigation = useNavigation();

  function handlePress(userid) {
    console.log(userid);
    navigation.navigate('ReadStaff', { itemId: userid, otherParam: 'some value' });
  }

  useEffect(() => {
      fetch('https://crudcrud.com/api/b7b6cf0863384a46ab32d41ea3b24eff/zamara')
        .then(
            res => res.json()
        ).then(
            data => setUsers(data)
        ).catch(
            err => console.log(err)
        ).finally(
            setIsLoading(false)
        )

    }, []);

  useEffect(() => {
    // const windowWidth = Dimensions.get('window').width;
    setWindowHeight(Dimensions.get('window').height);
    setWindowWidth(Dimensions.get('window').width);
    console.log(windowHeight);
}, [])

  return (
    <View>
        <ScrollView>
             {users.length > 0? 
                users.map((user, index) => 
                <TouchableOpacity onPress={() => {handlePress(user._id)}}>
                  <Card firstName = {user.staffname} index={index}></Card>
                </TouchableOpacity>):
              (<View style={{flex:1, alignItems:"center", justifyContent:"center", height:windowHeight}}>
                <ActivityIndicator size="large" color="#0000ff"/>
              </View>
              )
            } 
                  
        </ScrollView>
        <FAB onPress={null} title="Add" />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


     