import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import SearchBar from '../component/search.js'
import {MyContext} from '../component/contextItem.js';

const Home = ({navigation}) =>{
const {getData} = React.useContext(MyContext);
var data = getData();

return(
<View style = {styles.container}>
    <SearchBar userdata={data} />
</View>
)
}

export default Home;

const styles = StyleSheet.create({
container: {
    width:'100%',
},
})