import React from 'react';
import {View, TextInput} from 'react-native';

 const Signup = () => {
    return (
        <>
            <View>
                <TextInput placeholder='Email' />
            </View>
            <View>
                <TextInput placeholder='Password' />
            </View>
            <View>
                <TextInput placeholder='Confirm Password' />
            </View>
        </>
    )
}

export default Signup