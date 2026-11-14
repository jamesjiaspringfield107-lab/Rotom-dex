import { useRouter } from "expo-router";
import {
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function PokedexHomeScreen() {
  const router = useRouter();

  const POKEMON_TYPES = [
    { name: "Fire", color: "#ff9c54" },
    { name: "Water", color: "#4d90d5" },
    { name: "Grass", color: "#63bc5d" },
    { name: "Electric", color: "#f3d23b" },
    { name: "Psychic", color: "#f97176" },
    { name: "Ghost", color: "#5269ac" },
    { name: "Dragon", color: "#0a6dc4" },
    { name: "Fairy", color: "#ec8fe6" },
  ];

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      {/* 1. Rotom Greeting Banner */}
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

      {/* 2. Pokémon of the Day Card (Baseline Feature) */}
      <TouchableOpacity
        style={styles.potdCard}
        activeOpacity={0.8}
        onPress={() =>
          router.push({
            pathname: "/[id]",
            params: {
              id: "1",
              name: "Bulbasaur",
              imageUrl:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
            },
          })
        }
      >
        {/* 3. Explore by Type (Baseline Feature) */}
        <Text style={styles.sectionTitle}>Explore by Type</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {POKEMON_TYPES.map((type) => (
            <TouchableOpacity
              key={type.name}
              style={[styles.typePill, { backgroundColor: type.color }]}
              onPress={() =>
                Alert.alert(
                  `${type.name} Type`,
                  `Filtering Poképedia by ${type.name} type is coming soon!`,
                )
              }
            >
              <Text style={styles.typePillText}>{type.name}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <View style={styles.potdInfo}>
          <Text style={styles.potdTag}>Pokémon of the Day</Text>
          <Text style={styles.potdName}>Bulbasaur #001</Text>
          <Text style={styles.potdTypeText}>Grass / Poison</Text>
        </View>
        <Image
          source={{
            uri: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
          }}
          style={styles.potdImage}
        />
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  content: {
    padding: 16,
    paddingBottom: 30,
  },
  rotomBanner: {
    flexDirection: "row",
    backgroundColor: "#ff3b30",
    borderRadius: 22,
    padding: 20,
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "#ff6b6b",
    shadowColor: "#ff3b30",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 6,
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
    marginTop: 2,
    fontWeight: "500",
  },
  rotomBadge: {
    fontSize: 11,
    color: "#ffffff",
    backgroundColor: "rgba(255, 255, 255, 0.25)",
    alignSelf: "flex-start",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 10,
    marginTop: 10,
    fontWeight: "700",
    overflow: "hidden",
  },
  rotomImage: {
    width: 75,
    height: 75,
  },
  potdCard: {
    flexDirection: "row",
    backgroundColor: "#f2f2f7",
    padding: 16,
    marginTop: 20,
    alignItems: "center",
    justifyContent: "space-between",
  },
  potdInfo: {
    flex: 1,
  },
  potdTag: {
    fontSize: 12,
  },
  potdName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  potdTypeText: {
    fontSize: 12,
  },
  potdImage: {
    width: 70,
    height: 70,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
  },
  typePill: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    marginRight: 8,
  },
  typePillText: {
    color: "#ffffff",
    fontWeight: "bold",
  },
});
