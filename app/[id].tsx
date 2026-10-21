import { useLocalSearchParams } from "expo-router";
import { Image, StyleSheet, Text, View } from "react-native";

export default function PokemonDetailWIPScreen() {
  const { id, name, imageUrl } = useLocalSearchParams<{
    id: string;
    name: string;
    imageUrl?: string;
  }>();

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image
          style={styles.PokemonImg}
          source={
            imageUrl
              ? { uri: imageUrl }
              : require("../assets/images/Rotom_Error_WIP.jpg")
          }
        />
        {name ? <Text style={styles.PokemonName}>{name}</Text> : null}
        <Text style={styles.icon}>🛠️</Text>
        <Text style={styles.title}>Work In Progress</Text>
        <Text style={styles.subtitle}>
          S
          {`Details for this Pokémon\n No.#${id?.toString().padStart(3, "0")}\n are still in WIP.`}
        </Text>
        <Text style={styles.subtitle_1}>
          {
            "This is also a test for screen lifecycle,\n when how data would fetch and put inside this template screen (eg. the id, imageUrl, and the names)"
          }
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    paddingHorizontal: 20,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 80,
  },
  icon: {
    fontSize: 150,
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333333",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 15,
    color: "#111112",
    textAlign: "center",
    lineHeight: 22,
  },
  subtitle_1: {
    paddingTop: 15,
    fontSize: 15,
    color: "#8e8e93",
    textAlign: "center",
    lineHeight: 22,
  },
  PokemonImg: {
    height: 140,
    width: 140,
    alignSelf: "center",
  },
  PokemonName: {
    fontSize: 22,
    fontWeight: "bold",
    textTransform: "capitalize",
    marginBottom: 8,
    alignSelf: "center",
  },
});
