//Librería de Componentes Atómicos
import { View, Text, StyleSheet, ViewStyle, TextStyle } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

// ═══════════════════════════════════════════════════════════════════
// 🎯 SECTION HEADER - Encabezado de sección con gradiente
// ═══════════════════════════════════════════════════════════════════

interface SectionHeaderProps {
  title: string;
  badge?: string;
  subtitle?: string;
  gradient?: [string, string];
}

export function SectionHeader({
  title,
  badge,
  subtitle,
  gradient = ["#ffffff", "#f8f9fa"],
}: SectionHeaderProps) {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.titleRow}>
        <Text style={styles.title}>{title}</Text>
        {badge && (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{badge}</Text>
          </View>
        )}
      </View>

      {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
    </View>
  );
}

// ═══════════════════════════════════════════════════════════════════
// 💳 PRICE CARD - Tarjeta de precio con elevación
// ═══════════════════════════════════════════════════════════════════

interface PriceCardProps {
  label: string;
  amount: number;
  color?: string;
  containerStyle?: ViewStyle;
}

export function PriceCard({
  label,
  amount,
  color = "#7C4DFF",
  containerStyle,
}: PriceCardProps) {
  return (
    <View style={[styles.priceCard, containerStyle]}>
      <Text style={styles.priceLabel}>{label}</Text>
      <Text style={[styles.priceAmount, { color }]}>
        ${amount.toFixed(2)}
      </Text>
    </View>
  );
}

// ═══════════════════════════════════════════════════════════════════
// 🏷️ PRICE TAG - Etiqueta de precio inline
// ═══════════════════════════════════════════════════════════════════

interface PriceTagProps {
  amount: number;
  backgroundColor?: string;
  textColor?: string;
}

export function PriceTag({
  amount,
  backgroundColor = "#7C4DFF",
  textColor = "#ffffff",
}: PriceTagProps) {
  return (
    <View style={[styles.priceTag, { backgroundColor }]}>
      <Text style={[styles.priceTagText, { color: textColor }]}>
        ${amount.toFixed(2)}
      </Text>
    </View>
  );
}

// ═══════════════════════════════════════════════════════════════════
// ℹ️ INFO CARD - Tarjeta informativa con icono
// ═══════════════════════════════════════════════════════════════════

interface InfoCardProps {
  icon: string;
  text: string;
  backgroundColor?: string;
  iconSize?: number;
}

export function InfoCard({
  icon,
  text,
  backgroundColor = "#e8f5e9",
  iconSize = 32,
}: InfoCardProps) {
  return (
    <View style={[styles.infoCard, { backgroundColor }]}>
      <Text style={[styles.infoIcon, { fontSize: iconSize }]}>{icon}</Text>
      <Text style={styles.infoText}>{text}</Text>
    </View>
  );
}

// ═══════════════════════════════════════════════════════════════════
// ✅ SUCCESS HEADER - Encabezado de éxito
// ═══════════════════════════════════════════════════════════════════

interface SuccessHeaderProps {
  title: string;
  emoji?: string;
}

export function SuccessHeader({ title, emoji = "✅" }: SuccessHeaderProps) {
  return (
    <View style={styles.successHeader}>
      <Text style={styles.successEmoji}>{emoji}</Text>
      <Text style={styles.successTitle}>{title}</Text>
    </View>
  );
}

// ═══════════════════════════════════════════════════════════════════
// 📊 SECTION LABEL - Etiqueta de sección con emoji
// ═══════════════════════════════════════════════════════════════════

interface SectionLabelProps {
  emoji: string;
  text: string;
  style?: TextStyle;
}

export function SectionLabel({ emoji, text, style }: SectionLabelProps) {
  return (
    <Text style={[styles.sectionLabel, style]}>
      {emoji} {text}
    </Text>
  );
}

// ═══════════════════════════════════════════════════════════════════
// ➖ DIVIDER - Línea divisoria
// ═══════════════════════════════════════════════════════════════════

interface DividerProps {
  color?: string;
  height?: number;
  marginVertical?: number;
}

export function Divider({
  color = "#e9ecef",
  height = 1,
  marginVertical = 16,
}: DividerProps) {
  return (
    <View
      style={[
        styles.divider,
        { backgroundColor: color, height, marginVertical },
      ]}
    />
  );
}

// ═══════════════════════════════════════════════════════════════════
// 🎨 GRADIENT CONTAINER - Contenedor con gradiente
// ═══════════════════════════════════════════════════════════════════

interface GradientContainerProps {
  colors?: [string, string];
  children: React.ReactNode;
  style?: ViewStyle;
}

export function GradientContainer({
  colors = ["#ffffff", "#f8f9fa"],
  children,
  style,
}: GradientContainerProps) {
  return (
    <LinearGradient colors={colors} style={[styles.gradientContainer, style]}>
      {children}
    </LinearGradient>
  );
}

// ═══════════════════════════════════════════════════════════════════
// 📦 FOOTER INFO - Información del footer
// ═══════════════════════════════════════════════════════════════════

interface FooterInfoProps {
  label: string;
  amount: number;
  amountColor?: string;
}

export function FooterInfo({
  label,
  amount,
  amountColor = "#7C4DFF",
}: FooterInfoProps) {
  return (
    <View style={styles.footerInfo}>
      <Text style={styles.footerLabel}>{label}</Text>
      <Text style={[styles.footerAmount, { color: amountColor }]}>
        ${amount.toFixed(2)}
      </Text>
    </View>
  );
}

// ═══════════════════════════════════════════════════════════════════
// 🎨 STYLES
// ═══════════════════════════════════════════════════════════════════

const styles = StyleSheet.create({
  // Section Header
  headerContainer: {
    marginBottom: 4,
  },
  titleRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
    gap: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: "900",
    color: "#2c3e50",
  },
  badge: {
    backgroundColor: "#FFE082",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  badgeText: {
    fontSize: 12,
    fontWeight: "700",
    color: "#F57C00",
  },
  subtitle: {
    fontSize: 14,
    color: "#7f8c8d",
    lineHeight: 20,
  },

  // Price Card
  priceCard: {
    backgroundColor: "#ffffff",
    borderRadius: 16,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  priceLabel: {
    fontSize: 14,
    color: "#7f8c8d",
    marginBottom: 4,
  },
  priceAmount: {
    fontSize: 36,
    fontWeight: "900",
  },

  // Price Tag
  priceTag: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
  },
  priceTagText: {
    fontSize: 16,
    fontWeight: "800",
  },

  // Info Card
  infoCard: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderRadius: 12,
  },
  infoIcon: {
    marginRight: 12,
  },
  infoText: {
    flex: 1,
    fontSize: 14,
    color: "#2c3e50",
    lineHeight: 20,
  },

  // Success Header
  successHeader: {
    alignItems: "center",
  },
  successEmoji: {
    fontSize: 60,
    marginBottom: 12,
  },
  successTitle: {
    fontSize: 28,
    fontWeight: "900",
    color: "#2c3e50",
  },

  // Section Label
  sectionLabel: {
    fontSize: 14,
    fontWeight: "700",
    color: "#2c3e50",
  },

  // Divider
  divider: {
    width: "100%",
  },

  // Gradient Container
  gradientContainer: {
    flex: 1,
  },

  // Footer Info
  footerInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#f8f9fa",
    padding: 16,
    borderRadius: 12,
  },
  footerLabel: {
    fontSize: 14,
    fontWeight: "600",
    color: "#7f8c8d",
  },
  footerAmount: {
    fontSize: 24,
    fontWeight: "900",
  },
});