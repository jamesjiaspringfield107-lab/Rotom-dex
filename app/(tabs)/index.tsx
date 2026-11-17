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

export default function PokedexHomeScreen() {
  const router = useRouter();

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

      {/* 2. Pokémon of the Day Card */}
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
        <View style={styles.potdInfo}>
          <Text style={styles.potdTag}>Pokémon of the Day</Text>
          <Text style={styles.potdName}>Bulbasaur #001</Text>
          <View style={styles.potdTypeBadge}>
            <Text style={styles.potdTypeText}>Grass / Poison</Text>
          </View>
        </View>
        <Image
          source={{
            uri: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
          }}
          style={styles.potdImage}
        />
      </TouchableOpacity>

      {/* 3. Explore by Type */}
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

      {/* 4. Pokédex Quick Stats Bar */}
      <View style={styles.statsCard}>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>151</Text>
          <Text style={styles.statLabel}>Kanto Dex</Text>
        </View>
        <View style={styles.statDivider} />
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>Online</Text>
          <Text style={styles.statLabel}>PokéAPI Sync</Text>
        </View>
        <View style={styles.statDivider} />
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>v3.1</Text>
          <Text style={styles.statLabel}>Rotom OS</Text>
        </View>
      </View>
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
    backgroundColor: "#e8f5e9",
    borderRadius: 18,
    padding: 16,
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20,
    borderWidth: 1,
    borderColor: "#c8e6c9",
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  potdInfo: {
    flex: 1,
  },
  potdTag: {
    fontSize: 11,
    color: "#2e7d32",
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  potdName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1b5e20",
    marginTop: 4,
  },
  potdTypeBadge: {
    backgroundColor: "#63bc5d",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 10,
    alignSelf: "flex-start",
    marginTop: 8,
  },
  potdTypeText: {
    color: "#ffffff",
    fontSize: 11,
    fontWeight: "bold",
  },
  potdImage: {
    width: 80,
    height: 80,
  },
  sectionTitle: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#1c1c1e",
    marginTop: 24,
    marginBottom: 12,
  },
  typePill: {
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 20,
    marginRight: 10,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.12,
    shadowRadius: 3,
    elevation: 2,
  },
  typePillText: {
    color: "#ffffff",
    fontSize: 13,
    fontWeight: "bold",
    letterSpacing: 0.3,
  },

  statsCard: {
    flexDirection: "row",
    backgroundColor: "#f2f2f7",
    borderRadius: 16,
    padding: 16,
    marginTop: 24,
    alignItems: "center",
    justifyContent: "space-around",
    borderWidth: 1,
    borderColor: "#e5e5ea",
  },
  statItem: {
    alignItems: "center",
  },
  statNumber: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#1c1c1e",
  },
  statLabel: {
    fontSize: 11,
    color: "#8e8e93",
    marginTop: 2,
    fontWeight: "600",
  },
  statDivider: {
    width: 1,
    height: 24,
    backgroundColor: "#d1d1d6",
  },
});
