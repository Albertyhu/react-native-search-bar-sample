import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState, useMemo, useContext} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {FetchUsers} from './component/users.js';
import SearchBar from './component/search.js';
import {NavigationContainer} from '@react-navigation/native';
import {MyContext} from './component/contextItem.js';
import RootStack from './screens/rootStack.js';

function App() {
const [data, setData] = useState(null);
useEffect(()=>{
    FetchUsers(setData)
}, [])

const context = {
getData: ()=>{
    return data;
},
}

  return (
  <MyContext.Provider value = {context}>
      <NavigationContainer>
            <RootStack />
        </NavigationContainer>
    </MyContext.Provider>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },


});
