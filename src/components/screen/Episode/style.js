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
    display: "grid",
    flexDirection: "column",
    justifyContent: "center",
    width: '100%',
    gap: 20,
    alignItems: 'center'
  },
  boxCard: {
    width: '80%',
    height: 90,
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
