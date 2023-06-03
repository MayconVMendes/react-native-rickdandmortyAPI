import * as React from 'react';
import { View, TextInput } from 'react-native';
import { styles } from './style';

const MyTextInput = ({ value, onChangeText, placeholder }) => {
  return (
    <View>
      <TextInput
        style={styles.input}
        placeholderTextColor="black"
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
      />
    </View>
  );
};

export default MyTextInput;
