import { library } from "@fortawesome/fontawesome-svg-core";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

library.add(fas, far);

export default function App() {
  const [iconToShow, setIconToShow] = useState(false);

  return (
    <View style={styles.container}>
      <FontAwesomeIcon
        icon={iconToShow ? "bell" : "bell-slash"}
        size={50}
        color="black"
      />
      <TouchableOpacity
        onPress={() => {
          setIconToShow((prev) => !prev);
        }}
      >
        <Text>Change icon</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
