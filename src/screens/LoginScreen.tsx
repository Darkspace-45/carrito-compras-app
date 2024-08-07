import React, { useState } from 'react'
import { StatusBar, Text, View } from 'react-native'
import { TitleComponent } from '../components/TitleComponent'
import { BodyComponent } from '../components/BodyComponent'
import { PRIMARY_COLOR } from '../commons/constants'
import { styles } from '../../theme/appTheme'
import { InputComponent } from '../components/InputComponent'
import { ButtonComponent } from '../components/ButtonComponent'
import Snackbar from 'react-native-snackbar'

interface FormLogin {
  email: string;
  password: string;
}

export const LoginScreen = () => {

  //hook useState: cambiar el estado del formulario
  const [formLogin, setFormLogin] = useState<FormLogin>({
    email: '', 
    password: ''
  });

  //hook useState: permitir que sea visible/no visible el contenido del password
  const [hiddenPassword, setHiddenPassword] = useState<boolean>(true);

  //función para actualizar el estado del formulario
  const handleSetValues = (name: string, value: string) => {
    //cambiar el estado del FormLogin
    //... operador de propagación | spread: crear una copia del objeto
    setFormLogin({
      ...formLogin,
      [name]: value
    }); 
  }

  //función para iniciar sesión
  const handleLogin = () => {
    console.log(formLogin);
  }

  return (
    <View>
      <StatusBar backgroundColor={PRIMARY_COLOR} />
      <TitleComponent title='Iniciar Sesión' />
      <BodyComponent>
        <View>
          <Text style={styles.titleHeaderBody}>Bienvenido de Nuevo!</Text>
          <Text style={styles.textBody}>Realiza tus compra de manera rápida y segura</Text>
        </View>
        <View style={styles.contentInput}>
          <InputComponent placeholder='Correo' 
            handleSetValues={handleSetValues} 
            name='email'
            isPassword={false}
            setHiddenPassword={() => setHiddenPassword(!hiddenPassword)} />
          <InputComponent placeholder='Contraseña' 
            handleSetValues={handleSetValues} 
            name='password' 
            secureTextEntry 
            setHiddenPassword={() => setHiddenPassword(!hiddenPassword)} 
            isPassword={hiddenPassword} />
        </View>
        <ButtonComponent textButton='Acceder' onPress={handleLogin}/>
      </BodyComponent>
    </View>
  )
}