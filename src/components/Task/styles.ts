import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: '#262626',
    borderRadius: 8,
    paddingLeft: 12,
    paddingTop: 12,
    paddingRight: 8,
    paddingBottom: 12,
    alignItems: 'center',
    textAlign: 'center',
    gap: 8,
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 8,
  },
  text: {
    flex: 1,
    color: '#F2F2F2',
    fontSize: 16,
    maxWidth: 235,
    textAlign: 'left',
  },
})