import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { getPokemonAbilities } from "../service/pokemonAPI";
import { AbilityItem } from "../types/pokemon";

export default function PokemonDetailWIPScreen() {
  const { id, name, imageUrl } = useLocalSearchParams<{
    id: string;
    name: string;
    imageUrl?: string;
  }>();

  const [abilities, setAbilities] = useState<AbilityItem[]>([]);
  const [loadingAbilities, setLoadingAbilities] = useState<boolean>(true);

  useEffect(() => {
    let isActive = true;

    const loadAbilities = async () => {
      if (!id) {
        setLoadingAbilities(false);
        return;
      }
      setLoadingAbilities(true);
      const data = await getPokemonAbilities(id);
      if (isActive) {
        setAbilities(data);
        setLoadingAbilities(false);
      }
    };

    loadAbilities();
    return () => {
      isActive = false;
    };
  }, [id]);

  const wipAlrt = (Actionname: string) => {
    Alert.alert(
      `The ${Actionname} is WIP`,
      `This ${Actionname} is still in development`,
    );
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <Image
        style={styles.PokemonImg}
        source={
          imageUrl
            ? { uri: imageUrl }
            : require("../assets/images/Rotom_Error_WIP.jpg")
        }
      />
      {name ? (
        <Text style={styles.PokemonName}>{name}</Text>
      ) : (
        <Text style={styles.PokemonName}>Unknown Pokemon</Text>
      )}
      <Text style={styles.subtitle}>
        {`Details for this Pokémon\n No.#${id ? id.toString().padStart(3, "0") : "???"}`}
      </Text>

      <View style={styles.IconRow}>
        <TouchableOpacity
          style={styles.Icon}
          onPress={() => wipAlrt("Favorite")}
        >
          <Ionicons name="heart-outline" size={18} color="#ff0000" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.Icon}
          onPress={() => wipAlrt("Collection")}
        >
          <Ionicons name="albums-outline" size={18} color="#e88903" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.Icon}
          onPress={() => wipAlrt("Pokemon Cry")}
        >
          <Ionicons name="volume-high-outline" size={18} color="#8d8d8c" />
        </TouchableOpacity>
      </View>

      <View style={styles.sectionCard}>
        <Text style={styles.sectionTitle}>Abilities</Text>
        {loadingAbilities ? (
          <ActivityIndicator size="small" color="#ff3b30" />
        ) : abilities.length > 0 ? (
          <View style={styles.abilitiesWrap}>
            {abilities.map((ability) => (
              <View
                key={`${ability.name}-${ability.isHidden ? "hidden" : "standard"}`}
                style={[
                  styles.abilityBadge,
                  ability.isHidden && styles.hiddenAbilityBadge,
                ]}
              >
                <Text style={styles.abilityText}>{ability.name}</Text>
                {ability.isHidden && (
                  <Text style={styles.hiddenBadgeText}>Hidden</Text>
                )}
              </View>
            ))}
          </View>
        ) : (
          <Text style={styles.emptyText}>No ability data available.</Text>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    paddingHorizontal: 20,
  },
  content: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 32,
  },
  subtitle: {
    fontSize: 15,
    color: "#111112",
    textAlign: "center",
    lineHeight: 22,
    fontWeight: "bold",
    alignSelf: "center",
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
  Icon: {
    padding: 10,
    borderRadius: 8,
    backgroundColor: "#ececed",
  },
  IconRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
    gap: 10,
  },
  sectionCard: {
    width: "100%",
    backgroundColor: "#f2f2f7",
    borderRadius: 16,
    padding: 16,
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#1c1c1e",
    marginBottom: 10,
  },
  abilitiesWrap: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  abilityBadge: {
    backgroundColor: "#e5e5ea",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  hiddenAbilityBadge: {
    backgroundColor: "#fff3cd",
    borderWidth: 1,
    borderColor: "#ffd966",
  },
  abilityText: {
    fontSize: 13,
    fontWeight: "600",
    color: "#1c1c1e",
    textTransform: "capitalize",
  },
  hiddenBadgeText: {
    fontSize: 11,
    fontWeight: "bold",
    color: "#8a5a00",
  },
  emptyText: {
    fontSize: 13,
    color: "#8e8e93",
  },
});
