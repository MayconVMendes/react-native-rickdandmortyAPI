import React, { useState, useEffect } from "react";
import { View, Text, SafeAreaView, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import MyTextInput from "../../TextInput";
import api from "../../../services/api";
import { styles } from "./style";

const HomeScreen = () => {
  const [isData, setIsdata] = useState();
  const [isNameUser, setIsNameUser] = useState();
  const [isNameUserAsync, setIsNameUserAsync] = useState();
  const [isValidate, setIsValidate] = useState(false);
  const [isValidateText, setIsValidateText] = useState(false);
  const navigation = useNavigation();

  const fetchWeatherData = async () => {
    try {
      const response = await api.get();
      setIsdata(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchWeatherData();
  }, []);

  const recoverName = async () => {
    const nameUser = await AsyncStorage?.getItem("myName");
    setIsNameUserAsync(nameUser);

    if(!isData) {
      fetchWeatherData();
    }
    
  };

  useEffect(() => {
    setTimeout(()=> {
      if (!isNameUser) {
        recoverName();
      }
    },1000)
  })

  useEffect(() => {
    if (!isValidate) {
      if (isNameUserAsync) {
        setIsNameUser(isNameUserAsync);
        setIsValidate(true);
        setIsValidateText(true);
      }
    }
  });

  const saveName = async () => {
    await AsyncStorage.setItem("myName", isNameUser);
    alert("Nome gravado com sucesso!");
    recoverName();
  };

  return (
    <View style={styles.containerCentral}>
      {isValidateText && (<Text  style={styles.titleTela}>Bem vindo {" " + isNameUserAsync}</Text>)}
      <Text  style={styles.titleTela}>Tudo sobre Rick and Morty</Text>

      {isValidateText ? (
        <>
          {isData && (
            <>
              <Text>Selecione umas das visualizações</Text>

              <Pressable
              style={styles.btns}
                onPress={() => {
                  navigation.navigate('Personagens');
                }}
              >
                <Text style={styles.textBtns}>Visualizar por Personagens</Text>
              </Pressable>
              <Pressable
              style={styles.btns}
                onPress={() => {
                  navigation.navigate("Localizações");
                }}
              >
                <Text style={styles.textBtns}>Visualizar por Localizações</Text>
              </Pressable>
              <Pressable
              style={styles.btns}
                onPress={() => {
                  navigation.navigate("Episódios");
                }}
              >
                <Text style={styles.textBtns}>Visualizar por episódios</Text>
              </Pressable>
              <Pressable
              style={styles.btns}
                onPress={() => {
                  AsyncStorage.clear()
                  setIsdata();
                  setIsNameUser();
                  setIsValidateText(false);
                }}
              >
                <Text style={styles.textBtns}>Resetar nome</Text>
              </Pressable>
            </>
          )}
        </>
      ) : (
        <>
          <SafeAreaView>
            <MyTextInput
              placeholder="Digite seu nome"
              value={isNameUser}
              onChangeText={(name) => {
                setIsNameUser(name);
              }}
            />
          </SafeAreaView>
          <SafeAreaView style={styles.centerViewBtn}>
            <Pressable
              style={styles.btn}
              onPress={() => {
                saveName();
                setIsValidateText(true);
              }}
            >
              <Text style={styles.textBtn}>Salvar</Text>
            </Pressable>
          </SafeAreaView>
        </>
      )}
    </View>
  );
};

export default HomeScreen;
