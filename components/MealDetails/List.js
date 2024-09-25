import { StyleSheet, Text, View } from "react-native";

function List({ data }) {
  return data.map((dataPoint, index) => (
    <View style={styles.listItem} key={index}>
      <Text style={styles.itemText}>{dataPoint}</Text>
    </View>
  ));
}

export default List;

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4,
    marginHorizontal: 12,
    backgroundColor: "gray",
  },
  itemText: {
    textAlign: "center",
  },
});
