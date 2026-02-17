import { Stack, useRouter, useSegments } from "expo-router";
import { useEffect } from "react";
import { FoodTypeProvider } from "../core/food/FoodTypeContext";
import { OrderProvider } from "../core/order/OrderContext";
import { SandwichProvider } from "../Restaurants/pan-pita/hooks/SanducheContext";
import { BurgerProvider } from "../Restaurants/mordida-mixta/hooks/BurgerContext";
import { AuthProvider, useAuth } from '../lib/modules/auth/AuthProvider'; 
import { usePushNotifications } from '../lib/core/notifications/usePushNotifications';

function AppContent() {
  const { session, loading } = useAuth();
  const segments = useSegments();
  const router = useRouter();
  
  // 1. Iniciamos el sistema de notificaciones con el ID del usuario
  const userId = session?.user?.id; 
  usePushNotifications(userId);

  // 2. 🛡️ PRIVACIDAD: Efecto de Protección de Rutas (El que recomendó el profe)
  useEffect(() => {
    if (loading) return; // Esperamos a que Supabase nos diga si hay alguien logueado

    const inAuthGroup = segments[0] === "(auth)";

    if (!session && !inAuthGroup) {
      // ⛔ Si NO hay sesión y NO estamos en login -> Mandar a Login
      // Asegúrate de que el nombre sea exacto: '/(auth)/login' o '/(auth)/Login'
      router.replace("/(auth)/Login"); 
    } else if (session && inAuthGroup) {
      // ✅ Si HAY sesión y el usuario intenta entrar a login -> Mandar al inicio
      router.replace("/"); 
    }
  }, [session, loading, segments]);

  // 3. Sistema circulatorio de Providers (Tus menús y pedidos)
  return (
    <FoodTypeProvider>
      <BurgerProvider>
        <SandwichProvider>
          <OrderProvider>
            <Stack screenOptions={{ headerShown: false }} />
          </OrderProvider>
        </SandwichProvider>
      </BurgerProvider>
    </FoodTypeProvider>
  );
}

export default function RootLayout() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}