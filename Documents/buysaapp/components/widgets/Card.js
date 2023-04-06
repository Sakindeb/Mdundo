import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';



const Card = (props) => {
    return(
        <View style={styles.card}>
          <View style={styles.container}>
            <Image
                style={{ width: 50, height: 50, borderRadius:10}}
                source={{uri: 'https://www.w3schools.com/howto/img_avatar2.png',}}
            />
            <Text style={styles.name}>{props.firstName} {props.lastName}</Text>
          </View>
        </View>
    );
}

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
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
    name: {
      fontSize: 18,
      fontWeight: 'light',
      fontFamily:"Lato-regular",
      margin:20
    },
  });

export default Card;