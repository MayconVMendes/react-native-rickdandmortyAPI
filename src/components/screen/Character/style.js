import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  scroll: {
    display: "flex",
    alignContent: "center",
    width: "100%",
    height: "100%",
    marginTop: 20,
    marginBottom: 20,
  },
  containerCentral: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
  },
  boxCard: {
    width: 160,
    height: 230,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 10,
    padding: 7,
  },
  containerNames: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    width: '100%'
  }
});
