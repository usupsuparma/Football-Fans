import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {Container} from '../components';
import {Input, Icon, Button} from 'react-native-elements';
import {Formik} from 'formik';
import * as yup from 'yup';
import {Notifier, Easing, NotifierComponents} from 'react-native-notifier';
import {colors} from '../config';
import HttpClient from '../network/HttpClient';
import NetworkConfig from '../network/NetworkConfig';
import ApiService from '../network/ApiService';

const API = require('../API');

function SecureTextButton({onPress, isSecureTextEntry}) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Icon
        name={isSecureTextEntry ? 'eye' : 'eye-off'}
        type="material-community"
        color="gray"
        size={18}
      />
    </TouchableWithoutFeedback>
  );
}

export default function Signin(props) {
  const [isSecureTextEntry, setIsSecureTextEntry] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const passwordInput = useRef();

  function toggleSecureTextEntry() {
    setIsSecureTextEntry(!isSecureTextEntry);
  }

  async function handleSubmit(values) {
    setIsLoading(true);
    // todo this is old code

    // API.post('authenticate', {
    //   email: values.email,
    //   password: values.password,
    // })
    //   .then((json) => {
    //     console.log(json);
    //     setIsLoading(false);
    //     //show toast
    //     Notifier.showNotification({
    //       title:
    //         json.status === 'successful' ? 'Success' : 'Something went wrong',
    //       description: json.status === 'successful' ? json.message : '',
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
    //   })
    //   .catch((err) => {
    //     setIsLoading(false);
    //     console.error(err);
    //   });
    try {
      let payload = {
        email: values.email,
        password: values.password,
      };
      const json = await ApiService.Login(payload);
      console.log(json);
      setIsLoading(false);
      //show toast
      Notifier.showNotification({
        title:
          json.status === 'successful' ? 'Success' : 'Something went wrong',
        description: json.status === 'successful' ? json.message : '',
        Component: NotifierComponents.Alert,
        componentProps: {
          alertType: json.status === 'successful' ? 'success' : 'error',
        },
        duration: 3000,
        showAnimationDuration: 800,
        showEasing: Easing.bounce,
        onHidden: () => console.log('Hidden'),
        onPress: () => console.log('Press'),
        hideOnPress: true,
      });
    } catch (e) {
      console.log(e);
      setIsLoading(false);
    }
  }

  return (
    // <Container>
    <View style={{padding: 20, flex: 1, backgroundColor: 'white'}}>
      <ScrollView
        style={{backgroundColor: 'white'}}
        showsVerticalScrollIndicator={false}>
        <Image
          source={require('../images/ffb.png')}
          style={{height: 100, width: 100}}
        />
        <Text style={styles.welcome}>Welcome to</Text>
        <Text style={styles.ffb}>Football Fans Book</Text>

        <View style={styles.formContainer}>
          <Formik
            initialValues={{email: '', password: ''}}
            onSubmit={handleSubmit}
            validationSchema={yup.object().shape({
              email: yup
                .string()
                // .email()
                .required('Username is required'),
              password: yup.string().required('Password is required'),
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
                  placeholder="Enter email"
                  onBlur={() => setFieldTouched('email')}
                  onSubmitEditting={() => {
                    console.log('I got here');
                    passwordInput.focus();
                  }}
                  leftIcon={<Icon name="person" size={20} type="material" />}
                  errorStyle={{color: 'red'}}
                  // errorMessage=
                  inputStyle={styles.input}
                  inputContainerStyle={styles.inputWrapper}
                  containerStyle={styles.inputContainer}
                  underlineColorAndroid="transparent"
                  keyboardType="email-address"
                />
                {touched.email && errors.email && (
                  <Text style={{marginLeft: 10, fontSize: 10, color: 'red'}}>
                    {errors.email}
                  </Text>
                )}
                <Input
                  ref={passwordInput}
                  value={values.password}
                  onChangeText={handleChange('password')}
                  onBlur={() => setFieldTouched('password')}
                  placeholder="Enter password"
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
                  rightIcon={
                    <SecureTextButton
                      isSecureTextEntry={isSecureTextEntry}
                      onPress={toggleSecureTextEntry}
                    />
                  }
                  secureTextEntry={isSecureTextEntry}
                  inputStyle={styles.input}
                  inputContainerStyle={styles.inputWrapper}
                  containerStyle={styles.inputContainer}
                />
                {touched.password && errors.password && (
                  <Text style={{marginLeft: 10, fontSize: 10, color: 'red'}}>
                    {errors.password}
                  </Text>
                )}
                <TouchableOpacity style={{alignSelf: 'flex-end'}}>
                  <Text style={{color: colors.orange, fontSize: 12}}>
                    Forgot Password?
                  </Text>
                </TouchableOpacity>

                <Button
                  onPress={handleSubmit}
                  disabled={!isValid}
                  title="Sign In"
                  loading={isLoading}
                  buttonStyle={styles.button}
                  containerStyle={styles.buttonContainer}
                  titleStyle={styles.buttonTitle}
                />
              </>
            )}
          </Formik>
          <View
            style={{
              flexDirection: 'row',
              alignSelf: 'center',
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 12}}>Not a member?</Text>
            <TouchableOpacity
              style={{marginLeft: 10}}
              onPress={() => {
                props.navigation.navigate('Signup');
              }}>
              <Text style={{color: colors.orange, fontSize: 12}}>Join now</Text>
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
    fontSize: 18,
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
    paddingVertical: 10,
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
