import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

export default function PokedexHomeScreen() {
  return (
    <ScrollView style={styles.container}>
      {/* Rotom Greeting Banner */}
      <View style={styles.rotomBanner}>
        <View style={styles.rotomTextContainer}>
          <Text style={styles.greetingTitle}>Bzz-td!</Text>
          <Text style={styles.greetingSubtitle}>
            Ready to explore, Trainer!
          </Text>
          <Text style={styles.rotomBadge}>Rotom Dex Active</Text>
        </View>
        <Image
          source={{
            uri: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/479.png",
          }}
          style={styles.rotomImage}
          resizeMode="contain"
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  rotomBanner: {
    flexDirection: "row",
    backgroundColor: "#ff5252",
    padding: 16,
  },
  rotomTextContainer: {
    flex: 1,
  },
  greetingTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#ffffff",
  },
  greetingSubtitle: {
    fontSize: 14,
    color: "#ffffff",
  },
  rotomBadge: {
    fontSize: 12,
    color: "#ffffff",
  },
  rotomImage: {
    width: 60,
    height: 60,
  },
});
