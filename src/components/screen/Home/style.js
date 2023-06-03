import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  containerCentral: {
    display: 'flex',
    textAlign: 'center',
    alignItems: 'center'
  },
  titleTela: {
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'center',
    marginTop: '4%',
    marginBottom: '4%',
    color: '#48D1CC',
    textShadowColor: '#00FF00', 
    textShadowOffset: { width: 1, height: 1 }, 
    textShadowRadius: 5,
  },
  btn: {
    backgroundColor: '#48D1CC',
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#00FF00',
    width: 150,
    height: 40,
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    marginTop: 10,
  },
  btns: {
    backgroundColor: '#48D1CC',
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#00FF00',
    width: 210,
    height: 40,
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    marginTop: 12,
    padding: 5
  },
  textBtn: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  textBtns: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
  },
});
