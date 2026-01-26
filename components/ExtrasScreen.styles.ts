//"Manual de Estilo" compartido
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
  },
  header: {
    paddingTop: 60,
    paddingBottom: 30,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: "900",
    color: "#FFFFFF",
    marginBottom: 5,
  },
  headerSubtitle: {
    fontSize: 16,
    color: "#FFFFFF",
    opacity: 0.9,
  },
  scrollView: {
    flex: 1,
  },
  section: {
    marginTop: 20,
    marginHorizontal: 20,
  },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderRadius: 16,
    marginBottom: 12,
  },
  sectionEmoji: {
    fontSize: 40,
    marginRight: 12,
  },
  sectionHeaderText: {
    flex: 1,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "800",
    color: "#FFFFFF",
    marginBottom: 2,
  },
  sectionDescription: {
    fontSize: 14,
    color: "#FFFFFF",
    opacity: 0.9,
  },
  sizesContainer: {
    gap: 12,
  },
  sizeButton: {
    borderRadius: 16,
    overflow: "hidden",
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  sizeButtonGradient: {
    padding: 16,
    backgroundColor: "#FFFFFF",
    position: "relative",
  },
  sizeBadge: {
    position: "absolute",
    top: 12,
    right: 12,
    fontSize: 20,
  },
  sizeLabel: {
    fontSize: 18,
    fontWeight: "700",
    color: "#2c3e50",
    marginBottom: 4,
  },
  sizePrice: {
    fontSize: 24,
    fontWeight: "900",
    marginBottom: 12,
  },
  addButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignSelf: "flex-start",
  },
  addButtonText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "700",
  },
  selectedSection: {
    marginTop: 30,
    marginHorizontal: 20,
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 20,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  selectedHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
    paddingBottom: 16,
    borderBottomWidth: 2,
    borderBottomColor: "#e9ecef",
  },
  selectedTitle: {
    fontSize: 20,
    fontWeight: "800",
    color: "#2c3e50",
  },
  totalPrice: {
    fontSize: 24,
    fontWeight: "900",
    color: "#11998e",
  },
  selectedItem: {
    marginBottom: 12,
  },
  selectedItemContent: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    backgroundColor: "#f8f9fa",
    borderRadius: 12,
  },
  selectedItemEmoji: {
    fontSize: 30,
    marginRight: 12,
  },
  selectedItemInfo: {
    flex: 1,
  },
  selectedItemName: {
    fontSize: 16,
    fontWeight: "700",
    color: "#2c3e50",
  },
  selectedItemSize: {
    fontSize: 13,
    color: "#7f8c8d",
    marginTop: 2,
  },
  selectedItemPrice: {
    fontSize: 18,
    fontWeight: "800",
    color: "#2c3e50",
    marginRight: 12,
  },
  removeButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#e74c3c",
    justifyContent: "center",
    alignItems: "center",
  },
  removeButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
  },
  footer: {
    padding: 20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  continueButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    paddingVertical: 16,
    borderRadius: 16,
    gap: 10,
  },
  continueButtonText: {
    fontSize: 18,
    fontWeight: "800",
    color: "#FFFFFF",
  },
  continueButtonArrow: {
    fontSize: 20,
    color: "#FFFFFF",
  },
});