import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ScrollView, Alert, I18nManager } from 'react-native';
import weatherAPI from './apis/weather';
import { SafeAreaView } from 'react-native-safe-area-context';
import MyCard from './component/MyCard';
import TopArea from './component/TopArea';
import { Headline } from 'react-native-paper';
import { getData, storeData } from './global/asyncStorage';
import fireBase from './apis/fireBase';
import * as Network from 'expo-network';

I18nManager.allowRTL(false);


const App = (props) => {

  const [arr, setArr] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const init = async () => {
      try {
        const { isInternetReachable } = await Network.getNetworkStateAsync();
        if (isInternetReachable) {
          const respone = await fireBase.get("/Weather.json");
          const tempArr = [];
          for (const [key, value] of Object.entries(respone.data)) {
            tempArr.unshift(value);
          }
          setArr(tempArr);
        }
        else {
          const tempArr = await getData('data');
          console.log(tempArr)
          setArr(tempArr);
        }
      } catch (error) {
        console.log(error);
      }
    };
    init();
  }, []);

  const handleGetHttpRequest = async () => {
    try {
      const respone = await weatherAPI.get(searchQuery);
      let objId = await fireBase.post("/Weather.json", respone.data);
      objId = objId.request.response.toString().split(":")[1].split(`"`)[1];
      const finalData = { ...respone.data, id: objId };
      const tempArr = [finalData, ...arr];
      setArr(tempArr);
      handleCleanStates();
      await fireBase.patch(`/Weather/${objId}.json`, { id: objId });
      await storeData(tempArr, 'data');
    } catch (error) {
      Alert.alert("The country does not exists!")
    }

  };

  const handleChangeQuery = (txt) => {
    setSearchQuery(txt);
  };

  const handleCleanStates = () => {
    setSearchQuery("");
  };


  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.container}>
        <TopArea handleGetHttpRequest={handleGetHttpRequest} handleChangeQuery={handleChangeQuery} searchQuery={searchQuery} />
        <ScrollView style={{ flexGrow: 1 }} contentContainerStyle={{ flexGrow: 1 }}>
          {
            arr.length > 0 ?
              arr.map((item, index) => {
                return (
                  <MyCard key={index} name={item.location.name} country={item.location.country} icon={item.current.condition.icon} />
                );
              })
              :
              <View style={{ flexGrow: 1, alignItems: "center", justifyContent: "center" }}>
                <Headline>No Content!</Headline>
              </View>
          }
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});


export default App;
