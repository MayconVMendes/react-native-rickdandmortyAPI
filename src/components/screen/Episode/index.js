import React, { useState, useEffect } from "react";
import { View, Text, SafeAreaView, ScrollView, Image } from "react-native";
import { styles } from "./style";
import api from "../../../services/api";

export default function Episode() {
  const [isData, setIsdata] = useState();
  const MAX_LENGTH = 25;
  const ELLIPSIS = "...";

  const fetchWeatherData = async () => {
    try {
      const response = await api.get("/episode");
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
              <SafeAreaView style={styles.containerNames}>
                <Text style={{ fontWeight: "bold" }}>Nome:</Text>
                <Text numberOfLines={1} ellipsizeMode="tail">
                  {truncateText(data?.name, MAX_LENGTH)}
                </Text>
              </SafeAreaView>

              <SafeAreaView style={styles.containerNames}>
                <Text style={{ fontWeight: "bold" }}>Episódio:</Text>
                <Text numberOfLines={1} ellipsizeMode="tail">
                  {truncateText(data?.episode, MAX_LENGTH)}
                </Text>
              </SafeAreaView>

              <SafeAreaView style={styles.containerNames}>
                <Text style={{ fontWeight: "bold" }}>Data de exibição:</Text>
                <Text>{truncateText(data?.air_date, MAX_LENGTH)}</Text>
              </SafeAreaView>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
}
