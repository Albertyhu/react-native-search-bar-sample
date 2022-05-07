import React, {useEffect, useState} from 'react';
import {View, Text, InputText, StyleSheet} from 'react-native';
import {MyContext} from '../component/contextItem.js';

const ProfilePage = (props, {route, navigation} )=>{
const {getData} = React.useContext(MyContext);
//const [data, setData] = useState(null)
const [user, setUser] = useState(null);
const fetchProfile = () =>{
    var newProfile = getData().filter(val => val.username === props.route.params.userName)
    setUser(newProfile[0]);
}

/*
useEffect(()=>{
    var newData = getData();
    setData(newData.map(val => val));
}, [])*/

useEffect(()=>{
    if(!props.route.params?.userName){
        return;
    }
    fetchProfile();

},[props.route.params?.userName])

return(
<View>
{user &&
    <Text>{user.name}</Text>
}
</View>
)
}

export default ProfilePage;