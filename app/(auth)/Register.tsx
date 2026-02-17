import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  ActivityIndicator,
  Alert,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { useAuth } from "../../lib/modules/auth/AuthProvider"; // 👈 Lógica del docente
import { supabase } from "@/lib/core/supabase/client.supabase";

export default function RegisterScreen() {
  const router = useRouter();
  const { signUpWithEmail } = useAuth(); // 👈 Usamos el músculo del AuthProvider

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState(""); // 👈 Para la notificación personalizada
  const [loading, setLoading] = useState(false);

  const handleRegister = async () => {
    if (!email || !password || !firstName) {
      Alert.alert("Campos incompletos", "Por favor, llena todos los campos.");
      return;
    }
  
    setLoading(true);
  
    try {
      // 👇 EXACTAMENTE como el docente
      const data = await signUpWithEmail(email, password);
      const user = data?.user;
        
      if (user) {
      await supabase.from('profiles').insert([
        { id: user.id, email: user.email, first_name: firstName }
    ]);
    }
    
    Alert.alert(
        "¡Registro Exitoso!",
        `Bienvenido ${firstName}. Revisa tu correo.`,
        [{ text: "Ir al Login", onPress: () => router.replace("/(auth)/Login") }]
      );

    } catch (error: any) {
      Alert.alert("Error de Registro", error.message);
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <LinearGradient
      colors={["#FF6B6B", "#FF8E53", "#FFA726"]}
      style={styles.gradient}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.logoContainer}>
            <Text style={styles.logoEmoji}>👨‍🍳</Text>
          </View>
          <Text style={styles.title}>Crear Cuenta</Text>
          <Text style={styles.subtitle}>Únete y empieza a cocinar en 3D</Text>
          <View style={styles.divider} />
        </View>

        {/* Card del formulario */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Tus datos</Text>
          <Text style={styles.cardDescription}>
            Regístrate para recibir notificaciones de tus pedidos
          </Text>

          {/* Input Nombre (CRÍTICO PARA EL TRIGGER) */}
          <View style={styles.inputWrapper}>
            <Text style={styles.inputLabel}>👤 Nombre</Text>
            <TextInput
              placeholder="¿Cómo te llamas?"
              value={firstName}
              onChangeText={setFirstName}
              style={styles.input}
              placeholderTextColor="#B0BEC5"
            />
          </View>

          {/* Input Email */}
          <View style={styles.inputWrapper}>
            <Text style={styles.inputLabel}>📧 Correo electrónico</Text>
            <TextInput
              placeholder="ejemplo@correo.com"
              value={email}
              onChangeText={setEmail}
              style={styles.input}
              autoCapitalize="none"
              keyboardType="email-address"
              placeholderTextColor="#B0BEC5"
            />
          </View>

          {/* Input Password */}
          <View style={styles.inputWrapper}>
            <Text style={styles.inputLabel}>🔒 Contraseña</Text>
            <TextInput
              placeholder="Mínimo 6 caracteres"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              style={styles.input}
              placeholderTextColor="#B0BEC5"
            />
          </View>

          {/* Botón */}
          <TouchableOpacity
            style={[styles.button, loading && styles.buttonDisabled]}
            onPress={handleRegister}
            disabled={loading}
            activeOpacity={0.85}
          >
            <LinearGradient
              colors={loading ? ["#ccc", "#bbb"] : ["#FF6B6B", "#FFA726"]}
              style={styles.buttonGradient}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
            >
              {loading ? (
                <View style={styles.buttonContent}>
                  <ActivityIndicator color="#fff" size="small" />
                  <Text style={styles.buttonText}>Procesando...</Text>
                </View>
              ) : (
                <Text style={styles.buttonText}>Comenzar ahora →</Text>
              )}
            </LinearGradient>
          </TouchableOpacity>
        </View>

        {/* Footer */}
        <TouchableOpacity 
          onPress={() => router.replace("/(auth)/Login")} 
          style={styles.footer}
        >
          <Text style={styles.footerTitle}>¿Ya tienes cuenta?</Text>
          <Text style={styles.footerLink}>Inicia sesión aquí</Text>
        </TouchableOpacity>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: { flex: 1 },
  scrollContent: { flexGrow: 1, padding: 20 },
  header: { alignItems: "center", marginTop: 40, marginBottom: 20 },
  logoContainer: {
    width: 70, height: 70, borderRadius: 35,
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    justifyContent: "center", alignItems: "center",
    marginBottom: 10, elevation: 5,
  },
  logoEmoji: { fontSize: 35 },
  title: { fontSize: 32, fontWeight: "900", color: "#FFFFFF" },
  subtitle: { fontSize: 14, color: "#FFFFFF", opacity: 0.9 },
  divider: { width: 40, height: 4, backgroundColor: "#FFFFFF", borderRadius: 2, marginTop: 10 },
  card: {
    backgroundColor: "#FFFFFF", borderRadius: 20, padding: 24,
    shadowColor: "#000", shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.2, shadowRadius: 10, elevation: 10,
  },
  cardTitle: { fontSize: 22, fontWeight: "800", color: "#2C3E50" },
  cardDescription: { fontSize: 13, color: "#7F8C8D", marginBottom: 20 },
  inputWrapper: { marginBottom: 15 },
  inputLabel: { fontSize: 12, fontWeight: "700", color: "#2C3E50", marginBottom: 5 },
  input: {
    borderWidth: 1, borderColor: "#E0E0E0", borderRadius: 10,
    padding: 12, fontSize: 14, backgroundColor: "#F9F9F9",
  },
  button: { borderRadius: 12, overflow: "hidden", marginTop: 10 },
  buttonDisabled: { opacity: 0.7 },
  buttonGradient: { paddingVertical: 14, alignItems: "center" },
  buttonContent: { flexDirection: "row", alignItems: "center", gap: 8 },
  buttonText: { color: "#FFFFFF", fontSize: 16, fontWeight: "800" },
  footer: { alignItems: "center", marginTop: 20 },
  footerTitle: { color: "#FFFFFF", fontSize: 14 },
  footerLink: { color: "#FFFFFF", fontWeight: "bold", textDecorationLine: "underline" },
});