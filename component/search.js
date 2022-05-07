import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Text, TextInput, FlatList, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {FetchUsers} from './users.js';
import ProfilePage from '../screens/userprofile.js';

const RenderItem = ({item}, navigation) =>{

const goToUser = () =>{
    navigation.navigate('ProfilePage', {userName: item.username})
}

    return(
    <TouchableOpacity onPress = {goToUser}>
        <View style = {styles.resultRow}>
            <Text>{item.name}</Text>
        </View>
    </TouchableOpacity>
    )
}

const SearchBar = props =>{
    const {userdata} = props;
    const navi = useNavigation();
    const [data, setData] = useState(null)
    const [displayResults, setDisplay] = useState(false);
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    const handleTextChange = event =>{
        setQuery(event)
    }

    const searchByCriteria = (obj, criteria) =>{
        switch(criteria){
            case "name":{
                return obj.name.toLowerCase().search(query.toLowerCase())
            }
            case "street":{
                return obj.address.street.toLowerCase().search(query.toLowerCase())
            }
            case "username":{
                return obj.username.toLowerCase().search(query.toLowerCase())
            }
            default:
                return -1
        }

    }

    const filterData = () =>{
    if(userdata){
        let newArray = userdata.filter(val => searchByCriteria(val, "name") > -1
        || searchByCriteria(val, "username") > -1
        || searchByCriteria(val, "street") > -1)
        setResults(newArray.map(val => val));
        }
    }

    useEffect(()=>{
       // FetchUsers(setData);
    }, [])

    useEffect(()=>{
            filterData();
        if(results.length > 0 && query.length > 0){
            setDisplay(true)
        }
        else{

            setDisplay(false)
            }
    }, [query])

    return(
        <View style = {styles.searchContainer}>
            <View style = {styles.inputContainer}>
                <TextInput value = {query} onChangeText = {handleTextChange} styles = {styles.textInput} placeholder = "Search"/>
            </View>
            {displayResults &&
            <View>
                <FlatList
                    data={results}
                     keyExtractor={item => item.id}
                     renderItem={item => RenderItem(item, navi)}
                />
            </View>
            }
        </View>
    )
}

export default SearchBar;



 const styles = StyleSheet.create({
 searchContainer:{
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
 },
 textInput:{
    borderWidth: 2,
    borderColor: "#000000",
    paddingVertical: 10,
    paddingLeft: 5,
 },
 inputContainer: {
 borderWidth: 2,
 width: '80%',
 },
 resultRow: {
     marginVertical: 10,
     marginHorizontal: 10,
 },
 })