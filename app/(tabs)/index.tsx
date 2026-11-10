import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

export default function PokedexHomeScreen() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ padding: 16, paddingBottom: 32 }}
      showsVerticalScrollIndicator={false}
    >
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
    padding: 20,
    borderRadius: 22,
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "#ff5252",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  rotomTextContainer: {
    flex: 1,
  },
  greetingTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#ffffff",
  },
  greetingSubtitle: {
    fontSize: 14,
    color: "#ffebee",
  },
  rotomBadge: {
    fontSize: 10,
    color: "#ffffff",
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    marginTop: 8,
    alignSelf: "flex-start",
    overflow: "hidden",
    fontWeight: "bold",
  },
  rotomImage: {
    width: 75,
    height: 75,
  },
});
