
import { Pressable, StyleSheet, Text } from "react-native";
import { IconComponentProvider, Icon } from "@react-native-material/core";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useNavigation } from '@react-navigation/native';

import React from "react";
  

const iconColor = "#46A637";
const primaryColor = "#212340";

const FAB = (props) => {
    const navigation = useNavigation();

    function handlePress() {
        navigation.navigate('CreateStaff', { itemId: {"staffemail":"macsakini"}, otherParam: 'some value' });
    }

    return (
        <IconComponentProvider IconComponent={MaterialCommunityIcons}>
        <Pressable style={styles.container}
            onPress={handlePress}>
                <Icon name="plus" size={20} color="white"/>
            <Text style={styles.title}>New User</Text>
        </Pressable>
        </IconComponentProvider>
    );
};
  
export default FAB;
  
const styles = StyleSheet.create({
    container: {
        flexDirection:"row",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 50,
        position: "absolute",
        bottom: 30,
        right: 20,
        backgroundColor: primaryColor,
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    title: {
        marginLeft:5,
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
    },
});