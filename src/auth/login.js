import React, { useState, useContext } from 'react'
import { 
    View,
    Text,
    StyleSheet,
    Image,
    ScrollView,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    TouchableOpacity,
    Platform
} from 'react-native';
import Logo from '../assests/logo.png';
import FormInput from '../component/UI/formInput';
import FormButton from '../component/UI/formButton';
import SocialButton from '../component/UI/socialButton';
import { AuthContext } from '../naviagtion/AuthProvider';

const login = (props) =>  {    
    const [email, setemail] = useState();
    const [password, setpassword] = useState();

    const {login} = useContext(AuthContext)

    const onSignUp = () => {
        console.log(loginDetail)
    }

    return (
        <KeyboardAvoidingView>
            <ScrollView scrollEnabled={false}>
                <View style={styles.container}>
                    <Image source={Logo} style={styles.logo}/>
                    <Text style={styles.text}>Movie Zone</Text>
                    
                    <FormInput 
                        labelValue={email}
                        onChangeText={(userEmail) => setemail(userEmail)}
                        placeholderText="Email"
                        iconType="mail"
                        keyboardType="email-address"
                        autoCapitalize="none"
                        autoCorrect={false}
                    />

                    <FormInput 
                        labelValue={password}
                        onChangeText={(userPassword) => setpassword(userPassword)}
                        placeholderText="Password"
                        iconType="lock"
                        secureTextEntry={true}
                    />

                    <FormButton 
                        buttonTitle="Sign In"
                        onPress={() => login(email,password)}
                    />

                    <TouchableOpacity style={styles.forgotButton}>
                        <Text style={styles.navButtonText}>Forgot Password?</Text>
                    </TouchableOpacity>

                    <View>
                        <SocialButton
                            buttonTitle="Sign In with Facebook"
                            btnType="facebook"
                            color="#4867aa"
                            backgroundColor="#e6eaf4"
                        />

                        <SocialButton
                            buttonTitle="Sign In with Google"
                            btnType="google"
                            color="#de4d41"
                            backgroundColor="#f5e7ea"
                        />
                    </View>

                    <TouchableOpacity
                        style={styles.forgotButton}
                        onPress={() => props.navigation.navigate('SignUp')}>
                        <Text style={styles.navButtonText}>
                            Don't have an acount? Create here
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container:{
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        paddingTop: 50,
        backgroundColor:'white',
    },
    topHolder:{
        flexDirection:'row',
        alignItems:'center'
    },
    logo: {
        height: 100,
        width: 100,
        resizeMode: 'cover',
    },
    text: {
        fontFamily: 'Kufam-SemiBoldItalic',
        fontSize: 28,
        marginBottom: 10,
        color: '#051d5f',
    },
    navButton: {
        marginTop: 15,
    },
    forgotButton: {
        marginVertical: 35,
    },
    navButtonText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#2e64e5',
        fontFamily: 'Lato-Regular',
    },
})


export default login