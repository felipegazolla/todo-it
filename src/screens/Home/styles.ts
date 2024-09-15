import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#0D0D0D',
      paddingTop: 80,
      alignItems: 'center',
      fontFamily: 'Inter'
    },
  form: {
    marginTop: 40,
    width: 327,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  input: {
      width: 271,
      height: 54,
      backgroundColor: '#262626',
      borderRadius: 6,
      padding: 16,
      color: '#FFFFFF',
      fontSize: 16,
  },
  button: {
    backgroundColor: '#1E6F9F',
    color: '#FFFFFF',
    width: 52,
    height: 54,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6
  },
  backgroundTasks: {
    backgroundColor: '#1A1A1A',
    width: '100%',
    marginTop: 190,
    height: '100%',
    position: 'absolute',
    zIndex: -1
  },
  tasks: {
    marginTop: 56,
    marginLeft: 24,
    marginRight: 24,
  },
  created: {
    color: '#4EA8DE',
    fontWeight: 'bold',
    fontSize: 16,
  },
  counter: {
    flexDirection: 'row',
    color: '#D9D9D9',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
  done: {
    color: '#8284FA',
    fontWeight: 'bold',
    fontSize: 16,
  },
  countertasks: {
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  backgroudnCounter: {
    backgroundColor: '#333333',
    borderRadius: 50,
    width: 25,
    height: 19,
  },
  desirecounters: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center'
  },
  separator: {
    height: 1,
    width: '100%',
    backgroundColor: '#333333',
    marginTop: 40,
  },
  empty: {
    alignItems: 'center',
    marginTop: 56,
  },
  textemptybold: {
    color: '#808080',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 40,
  },
  textempty: {
    color: '#808080',
    fontSize: 16,

  },
})