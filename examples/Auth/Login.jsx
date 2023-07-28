import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: '#23272f',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#17f702',
    textAlign: 'left',
    marginLeft: -110,
  },
  form: {
    borderWidth: 1,
    borderColor: '#fff',
    width: 300,
    paddingHorizontal: 10,
    marginTop: 10,
    marginBottom: 20,
    borderRadius: 8,
  },
  button: {
    backgroundColor: '#17f702',
    width: 300,
    padding: 10,
    alignItems: 'center',
    borderRadius: 8,
  },
  btnTxt: {
    color: '#000',
  },
});

const Login = ({setIsLoggedIn}) => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const loginHandler = () => {
    setIsLoggedIn(userName && password ? true : false);
  };
  return (
    <View style={styles.view}>
      {/* <Text style={styles.text}>Username</Text> */}
      <TextInput
        value={userName}
        style={styles.form}
        onChangeText={newText => setUserName(newText)}
        placeholder="Enter Username"
      />

      {/* <Text style={styles.text}>Password</Text> */}
      <TextInput
        value={password}
        style={styles.form}
        onChangeText={newPassword => setPassword(newPassword)}
        placeholder="Enter Password"
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={loginHandler}>
        <Text style={styles.btnTxt}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
