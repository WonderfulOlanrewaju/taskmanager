import React from 'react';

import {
    SafeAreaView,
    StyleSheet,
    Button,
    View,
    Image,
    Text,
    StatusBar,
    TextInput
} from 'react-native';

import {Link} from 'react-router-native';

import {
    Colors
} from 'react-native/Libraries/NewAppScreen';

 const Login = () => {
    const [count, setCount] = React.useState(1);
    const handlePress = () => {
        setCount(count + 1)
    }
    return (
        <>
            <SafeAreaView>
                <View style={{ width: "80%", marginHorizontal: 'auto', justifyContent: 'center', alignSelf: 'center', marginTop: 75 }}>
                    <Text style={{
                        fontSize: 20,
                        textAlign: 'center'
                    }}>Task Manager</Text>
                    <Text
                        style={{
                            fontSize: 14,
                            textAlign: 'center',
                            marginVertical: 20
                        }}
                    >Welcome back the {count} time.</Text>
                    <View style={{
                        marginHorizontal: "auto"
                    }}>
                        <Image
                            style={{
                                height: 200,
                                width: 200,
                                borderRadius: 100,
                                borderWidth:5,
                                borderColor:"#4299E1",
                                alignSelf: 'center'
                            }}
                            source={{ uri: "https://bizze.s3.us-east-2.amazonaws.com/1598516508068/profilePicture/boye%20edited.jpg" }} />
                    </View>
                    <Text
                        style={{
                            fontSize: 16,
                        }}
                    >Sign In</Text>
                    <TextInput
                        placeholder="Email"
                        style={{
                            backgroundColor: "#E2E8F0",
                            borderRadius: 10,
                            borderColor: 'purple',
                            width: "100%",
                            marginVertical: 10,
                            paddingHorizontal: 10
                        }} />
                    <TextInput
                        placeholder="Password"
                        style={{
                            backgroundColor: '#E2E8F0',
                            borderColor: 'purple',
                            borderRadius: 10,
                            color: "white",
                            width: "100%",
                            marginVertical: 10,
                            paddingHorizontal: 10
                        }} />
                    <View
                        style={{
                            marginVertical: 20,
                            borderRadius: 20,
                            backgroundColor: "#38B2AC"
                        }}
                    >
                        <Button
                            title='Login'
                            onPress={handlePress}
                            style={{
                                marginVertical: 20,
                                borderRadius: 20,
                                backgroundColor: "#38B2AC"
                            }}
                        />
                    </View>
                    <View
                        style={{
                            flex: 1,
                            flexDirection: 'row',
                            justifyContent: 'space-between'
                        }}
                    >
                        <View>
                            <Text>Have no Account ? </Text>
                        </View>
                        <View>
                            <Link 
                            to='/signup'
                            underlayColor="purple"
                            style= {
                                {
                                    flex: 1,
                                    alignItems: "center",
                                }
                            }
                            >
                                <Text>Sign up Now</Text>
                            </Link>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        </>
    );
};

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: Colors.lighter,
    },
    engine: {
        position: 'absolute',
        right: 0,
    },
    body: {
        backgroundColor: Colors.white,
    },
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
        color: Colors.black,
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
        color: Colors.dark,
    },
    highlight: {
        fontWeight: '700',
    },
    footer: {
        color: Colors.dark,
        fontSize: 12,
        fontWeight: '600',
        padding: 4,
        paddingRight: 12,
        textAlign: 'right',
    },
});

export default Login