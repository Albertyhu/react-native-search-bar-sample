import React, {useEffect, useContext, useState} from 'react'
import {createStackNavigator} from '@react-navigation/stack';
import ProfilePage  from './userprofile.js';
import Home from './home.js';

const Stack = createStackNavigator ();

const RootStack = (props, {navigation}) =>{
    return(
        <Stack.Navigator>
            <Stack.Screen name = "Home" component={Home} navigation = {navigation} />
            <Stack.Screen name = "ProfilePage" component={ProfilePage} navigation = {navigation} options = {{title: 'Profile Page'}} />
        </Stack.Navigator>
    )
}

export default RootStack;