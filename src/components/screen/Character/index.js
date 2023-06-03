import React, { useState, useEffect } from "react";
import { View, Text, SafeAreaView, ScrollView, Image } from "react-native";
import { styles } from "./style";
import api from "../../../services/api";

export default function Character() {
  const [isData, setIsdata] = useState();
  const MAX_LENGTH = 14;
  const ELLIPSIS = "...";

  const fetchWeatherData = async () => {
    try {
      const response = await api.get("/character");
      setIsdata(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchWeatherData();
  }, []);

  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + ELLIPSIS;
    }
    return text;
  };

  return (
    <ScrollView style={styles.scroll}>
      <View style={styles.containerCentral}>
        {isData?.results.map((data) => {
          return (
            <View key={data.id} style={styles.boxCard}>
              <Image
                source={{ uri: data.image }}
                style={{
                  width: 140,
                  height: 140,
                  borderRadius: 5,
                  marginTop: -20,
                }}
              />

              <SafeAreaView style={styles.containerNames}>
                <Text style={{ fontWeight: "bold" }}>Nome:</Text>
                <Text numberOfLines={1} ellipsizeMode="tail">
                  {truncateText(data?.name, MAX_LENGTH)}
                </Text>
              </SafeAreaView>

              <SafeAreaView style={styles.containerNames}>
                <Text style={{ fontWeight: "bold" }}>Sexo:</Text>
                <Text numberOfLines={1} ellipsizeMode="tail">
                  {truncateText(data?.gender, MAX_LENGTH)}
                </Text>
              </SafeAreaView>

              <SafeAreaView style={styles.containerNames}>
                <Text style={{ fontWeight: "bold" }}>Especie:</Text>
                <Text>{truncateText(data?.species, MAX_LENGTH)}</Text>
              </SafeAreaView>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
}
