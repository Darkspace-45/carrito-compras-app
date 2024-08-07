import React from 'react'
import { TextInput } from 'react-native-gesture-handler'
import { styles } from '../../theme/appTheme';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface Props {
  placeholder: string;
  secureTextEntry?: boolean;
  keyboardType?: string;
  handleSetValues: (name: string, value: string) => void;
  name: string;
  isPassword: boolean;
  setHiddenPassword: () => void;
  hasIcon?: boolean;
}

export const InputComponent = ({ placeholder, secureTextEntry, handleSetValues, name, isPassword = false, setHiddenPassword, hasIcon }: Props) => {
  return (
    <View>
      {
        (hasIcon)
          ? <Icon
            name={isPassword ? 'visibility' : 'visibility-off'}
            size={24}
            color='black'
            style={styles.iconpassword}
            onPress={setHiddenPassword}
          />
          : null
      }
    <TextInput
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      onChangeText={(value) => handleSetValues(name, value)}
      keyboardType= 'default'
      style={styles.inputText}
    />  
    </View>
  )
}