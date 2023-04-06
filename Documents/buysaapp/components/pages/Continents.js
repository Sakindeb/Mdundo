import { parseString } from 'xml2js';
import React, { useState, useEffect } from 'react';
import { View, Text, Pressable, Image, StyleSheet , Dimensions, SafeAreaView, ScrollView} from 'react-native';

const iconColor = "#46A637";
const primaryColor = "#212340";


const { width } = Dimensions.get('window');
const gap = 12;
const itemPerRow = 2;
const totalGapSize = (itemPerRow - 1) * gap;
const windowWidth = width;
const childWidth = (windowWidth - totalGapSize) / itemPerRow;

const styles = StyleSheet.create({
    container:{
      flexDirection:"row",
      flexWrap:"wrap",
      justifyContent:"space-evenly",
      alignItems:"center",
      flex:1
    },
    menucard:{
        backgroundColor:"whitesmoke", 
        height:100,
        width:'40%',
        margin:10,
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        borderColor:"black",
        borderBottomWidth:0.4,
        color:primaryColor,
        fontFamily:"Lato-Regular",
        borderRadius:9,
        elevation:3,
        shadowColor:primaryColor
    },
});

const url = 'http://webservices.oorsprong.org/websamples.countryinfo/CountryInfoService.wso?WSDL';

const request = `
    <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:web="http://www.oorsprong.org/websamples.countryinfo">
        <soapenv:Header/>
        <soapenv:Body>
            <web:ListOfContinentsByName/>
        </soapenv:Body>
    </soapenv:Envelope>
`;

const Continents = () => {
  const [continents, setContinents] = useState([]);

  const getContinents = () => {
    fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'text/xml;charset=UTF-8',
          'SOAPAction': 'http://www.oorsprong.org/websamples.countryinfo/ListOfContinentsByName'
        },
        body: request
      })
      .then(response => response.text())
      .then(data => {
        parseString(data, (error, result) => {
          if (error) {
            console.error(error);
          } else {
            setContinents(result['soap:Envelope']['soap:Body'][0]['m:ListOfContinentsByNameResponse'][0]['m:ListOfContinentsByNameResult'][0]['m:tContinent']);
          }
        });
      })
      .catch(error => {
        console.error(error);
      });
  };
  

  useEffect(() => {
    getContinents();
  }, []);

  return (

    <View style={styles.container}>
         {continents.map(continent => (
            <Pressable style={styles.menucard} onPress={()=>{}}>
                <Image
                    style={{ width: 50, height: 50, borderRadius:10}}
                    source={{uri: 'https://buysa.s3.af-south-1.amazonaws.com/continents/'+continent['m:sCode']+'.png'}}
                />
                <Text key={continent['m:sCode']}> {continent['m:sCode']} {continent['m:sName']}</Text>
            </Pressable>)
        )}
     </View>
  );
};


export default Continents;

