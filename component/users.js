import React from 'react';
import {View, Style, Text, TextInput} from 'react-native';

export const FetchUsers = async (setData) =>{

    await fetch('https://jsonplaceholder.typicode.com/users/')
    .then(response => response.json())
    .then(setData)
    .catch(e => {
        console.log(e.message)
    })

 }

