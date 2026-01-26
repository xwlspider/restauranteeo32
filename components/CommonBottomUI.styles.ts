//"Manual de Estilo" compartido
import { StyleSheet } from "react-native";

export const commonStyles = StyleSheet.create({
  safeArea: { flex: 1 },
  scrollView: { flex: 1 },
  container: { padding: 20 },
  successContainer: { flex: 1, justifyContent: "center", gap: 20 },
  totalCard: { marginBottom: 4 },
  creationSection: { marginBottom: 16 },
  creationHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  creationSubtitle: { fontSize: 13, color: "#7f8c8d" },
  ingredientsSection: { marginBottom: 20, gap: 12 },
  ingredientsScroll: { marginHorizontal: -20 },
  ingredientsContent: { paddingHorizontal: 20 },
  ingredientItem: { padding: 6 },
  footer: { gap: 12 },
});