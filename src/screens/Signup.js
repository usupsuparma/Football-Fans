import React, {useState, useContext} from 'react';
import {
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {Container} from '../components';
import {Formik} from 'formik';
import * as yup from 'yup';
import {Input, Icon, Button} from 'react-native-elements';
import {Notifier, Easing, NotifierComponents} from 'react-native-notifier';
import {colors} from '../config';
import HttpClient from '../network/HttpClient';
import NetworkConfig from '../network/NetworkConfig';

const API = require('../API');

export default function Signup(props) {
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(values) {
    setIsLoading(true);
    // todo this old code
    // API.post('register', {
    //   email: values.email,
    //   password: values.password,
    //   first_name: values.firstName,
    //   last_name: values.lastName,
    //   phone_number: values.number,
    //   country: 'NG',
    //   group_id: 1,
    //   club_id: 1,
    // })
    //   .then((json) => {
    //     console.log(json);
    //     setIsLoading(false);
    //     //show toast
    //     Notifier.showNotification({
    //       title:
    //         json.status === 'successful' ? 'Success' : 'Something went wrong',
    //       description:
    //         json.status === 'successful'
    //           ? json.message
    //           : 'Email already exists',
    //       Component: NotifierComponents.Alert,
    //       componentProps: {
    //         alertType: json.status === 'successful' ? 'success' : 'error',
    //       },
    //       duration: 3000,
    //       showAnimationDuration: 800,
    //       showEasing: Easing.bounce,
    //       onHidden: () => console.log('Hidden'),
    //       onPress: () => console.log('Press'),
    //       hideOnPress: true,
    //     });
    //
    //     props.navigation.navigate('Signin');
    //   })
    //   .catch((err) => {
    //     setIsLoading(false);
    //     console.error(err);
    //   });
  }

  const registerResponse = async () => {
    const response = await HttpClient.Request.post(
      NetworkConfig.BASE_URL + 'api/auth/login',
    )
      .jsonBody(payload)
      .call();
    return response.json();
  };

  return (
    // <Container>
    <View style={{flex: 1, padding: 20, backgroundColor: 'white'}}>
      <ScrollView
        style={{backgroundColor: 'white'}}
        showsVerticalScrollIndicator={false}>
        <Image
          source={require('../images/ffb.png')}
          style={{height: 100, width: 100}}
        />
        {/* <Text style={styles.welcome}>Welcome to</Text> */}
        <Text style={styles.ffb}>{'Create a new \n account'}</Text>

        <View style={styles.formContainer}>
          <View>
            <Formik
              initialValues={{
                password: '',
                confirmPassword: '',
                firstName: '',
                lastName: '',
                email: '',
                number: '',
              }}
              onSubmit={handleSubmit}
              validationSchema={yup.object().shape({
                password: yup
                  .string()
                  .matches(
                    /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                    'Password must be minimum of eight characters, contain at least one letter and one number',
                  )
                  .required('Password is required'),
                confirmPassword: yup
                  .string()
                  .oneOf([yup.ref('password'), null], 'Passwords must match')
                  .required('Please confirm password'),
                firstName: yup
                  .string()
                  .required('Please enter your first name'),
                lastName: yup.string().required('Please enter your last name'),
                email: yup
                  .string()
                  .email('Please enter a valid email')
                  .required('Email address is required'),
                number: yup
                  .string()
                  .min(11)
                  .required('Phone number is required'),
              })}>
              {({
                values,
                handleChange,
                errors,
                setFieldTouched,
                touched,
                isValid,
                handleSubmit,
              }) => (
                <>
                  <Input
                    value={values.email}
                    onChangeText={handleChange('email')}
                    onBlur={() => setFieldTouched('email')}
                    placeholder="Enter e-mail address"
                    leftIcon={<Icon name="email" size={20} type="material" />}
                    errorStyle={{color: 'red'}}
                    // errorMessage='ENTER A VALID ERROR HERE'
                    inputStyle={styles.input}
                    inputContainerStyle={styles.inputWrapper}
                    containerStyle={styles.inputContainer}
                    keyboardType="email-address"
                  />
                  {touched.email && errors.email && (
                    <Text style={{marginLeft: 10, fontSize: 10, color: 'red'}}>
                      {errors.email}
                    </Text>
                  )}
                  <Input
                    value={values.firstName}
                    placeholder="Enter first name"
                    onChangeText={handleChange('firstName')}
                    onBlur={() => setFieldTouched('firstName')}
                    leftIcon={
                      <Icon
                        name="account-card-details"
                        size={20}
                        type="material-community"
                      />
                    }
                    errorStyle={{color: 'red'}}
                    // errorMessage='ENTER A VALID ERROR HERE'
                    inputStyle={styles.input}
                    inputContainerStyle={styles.inputWrapper}
                    containerStyle={styles.inputContainer}
                    underlineColorAndroid="transparent"
                  />
                  {touched.firstName && errors.firstName && (
                    <Text style={{marginLeft: 10, fontSize: 10, color: 'red'}}>
                      {errors.firstName}
                    </Text>
                  )}
                  <Input
                    value={values.lastName}
                    placeholder="Enter last name"
                    onChangeText={handleChange('lastName')}
                    onBlur={() => setFieldTouched('lastName')}
                    leftIcon={
                      <Icon
                        name="account-card-details"
                        size={20}
                        type="material-community"
                      />
                    }
                    errorStyle={{color: 'red'}}
                    // errorMessage='ENTER A VALID ERROR HERE'
                    inputStyle={styles.input}
                    inputContainerStyle={styles.inputWrapper}
                    containerStyle={styles.inputContainer}
                    underlineColorAndroid="transparent"
                  />
                  {touched.lastName && errors.lastName && (
                    <Text style={{marginLeft: 10, fontSize: 10, color: 'red'}}>
                      {errors.lastName}
                    </Text>
                  )}
                  <Input
                    value={values.number}
                    placeholder="Enter phone number"
                    onChangeText={handleChange('number')}
                    onBlur={() => setFieldTouched('number')}
                    leftIcon={<Icon name="phone" size={20} type="material" />}
                    errorStyle={{color: 'red'}}
                    // errorMessage='ENTER A VALID ERROR HERE'
                    inputStyle={styles.input}
                    inputContainerStyle={styles.inputWrapper}
                    containerStyle={styles.inputContainer}
                    underlineColorAndroid="transparent"
                    keyboardType="phone-pad"
                  />
                  {touched.number && errors.number && (
                    <Text style={{marginLeft: 10, fontSize: 10, color: 'red'}}>
                      {errors.number}
                    </Text>
                  )}
                  <Input
                    value={values.password}
                    placeholder="Enter password"
                    onChangeText={handleChange('password')}
                    onBlur={() => setFieldTouched('password')}
                    leftIcon={
                      <Icon
                        name="lock"
                        size={20}
                        type="material"
                        style={styles.inputIcon}
                      />
                    }
                    errorStyle={{color: 'red'}}
                    // errorMessage={true ? "" : "Password field can't be empty"}
                    secureTextEntry
                    inputStyle={styles.input}
                    inputContainerStyle={styles.inputWrapper}
                    containerStyle={styles.inputContainer}
                  />
                  {touched.password && errors.password && (
                    <Text style={{marginLeft: 10, fontSize: 10, color: 'red'}}>
                      {errors.password}
                    </Text>
                  )}
                  <Input
                    value={values.confirmPassword}
                    placeholder="Confirm password"
                    onChangeText={handleChange('confirmPassword')}
                    onBlur={() => setFieldTouched('confirmPassword')}
                    leftIcon={
                      <Icon
                        name="lock"
                        size={20}
                        type="material"
                        style={styles.inputIcon}
                      />
                    }
                    errorStyle={{color: 'red'}}
                    // errorMessage={true ? "" : "Password field can't be empty"}
                    secureTextEntry
                    inputStyle={styles.input}
                    inputContainerStyle={styles.inputWrapper}
                    containerStyle={styles.inputContainer}
                  />
                  {touched.confirmPassword && errors.confirmPassword && (
                    <Text style={{marginLeft: 10, fontSize: 10, color: 'red'}}>
                      {errors.confirmPassword}
                    </Text>
                  )}
                  <Button
                    onPress={handleSubmit}
                    disabled={!isValid}
                    title="Register Now"
                    loading={isLoading}
                    buttonStyle={styles.button}
                    containerStyle={styles.buttonContainer}
                    titleStyle={styles.buttonTitle}
                  />
                </>
              )}
            </Formik>
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignSelf: 'center',
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 12}}>Already have an account?</Text>
            <TouchableOpacity
              style={{marginLeft: 10}}
              onPress={() => {
                props.navigation.navigate('Signin');
              }}>
              <Text style={{color: colors.orange, fontSize: 12}}>Sign in</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
    // </Container>
  );
}

const styles = {
  welcome: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  ffb: {
    fontSize: 22,
    marginTop: 10,
    fontWeight: 'normal',
    color: colors.orange,
  },
  formContainer: {
    marginTop: 20,
  },
  input: {
    fontSize: 14,
  },
  inputContainer: {
    backgroundColor: '#F9F9F9',
    borderRadius: 15,
    marginVertical: 10,
    paddingVertical: 5,
  },
  inputWrapper: {
    borderBottomWidth: 0,
  },
  button: {
    backgroundColor: colors.primary,
    height: 50,
    borderRadius: 15,
  },
  buttonContainer: {
    marginVertical: 10,
  },
  buttonTitle: {
    fontSize: 15,
    fontWeight: '100',
    letterSpacing: 0,
    color: 'white',
  },
};
