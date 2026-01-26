🍔 Multi-Restaurant 3D Configurator
React Native + Expo + Three.js (Fiber)
Una aplicación móvil interactiva diseñada con React Native que permite a los usuarios personalizar sus pedidos en un entorno 3D inmersivo. Los clientes pueden armar hamburguesas y sándwiches ingrediente por ingrediente, viendo los cambios en tiempo real y calculando el costo dinámicamente.

## 🚀 Características Principales
Configurador 3D Realista: Visualización de ingredientes mediante modelos GLTF con iluminación y sombras en tiempo real.

Modos de Visualización: * Modo Creación: Los ingredientes se separan para permitir una edición cómoda y clara.

Modo Final: Los ingredientes se compactan y el modelo comienza una rotación de exhibición (60 FPS).

Lógica de Negocio Inteligente: * Protección de estructura (no puedes quitar el pan base o la tapa).

Cálculo de precios dinámico basado en el tipo y tamaño del ingrediente.

Arquitectura Multi-Contexto: Gestión de estados independiente para el flujo de Sándwiches, Hamburguesas y Extras (Complementos).

Interfaz de Usuario "Awesome": Componentes reutilizables y personalizados con retroalimentación visual táctil.

## 🛠️ Stack Tecnológico
Framework: Expo (React Native)

Motor 3D: React Three Fiber & Drei

Animaciones: React Spring (para el efecto "pop-in" de los ingredientes).

Lenguaje: TypeScript (con tipado estricto para configuraciones visuales).

## 📂 Estructura del Proyecto (Lógica Core)
La aplicación se divide en tres pilares fundamentales:

### 1. Gestión de Estado (Context API)
Utilizamos diferentes proveedores para asegurar que la data sea consistente:

OrderProvider: Maneja el carrito global y los complementos (papas, bebidas).

BurgerProvider / SandwichProvider: Controlan la "receta" actual, manejando IDs únicos para cada rodaja o ingrediente añadido.

### 2. Motores de Renderizado (Ingredient3D)
Cada ingrediente es un componente autónomo que:

Carga su modelo .glb usando Expo-Asset.

Aplica escalas y rotaciones personalizadas mediante un objeto de configuración que utiliza el operador satisfies.

Incluye un "Botón de Eliminación" en el espacio 3D con detección de colisiones (onClick).

### 3. Sistema de Configuración
Para escalar la app fácilmente, usamos diccionarios de datos:

INGREDIENTS: Precios, iconos y rutas de archivos.

visualConfig: Ajustes finos de posición Y y escala para que cada modelo encaje perfectamente sobre el anterior.

## 💡 Detalles Técnicos Destacados
### El Operador satisfies
Utilizamos satisfies Record<IngredientName | "default", VisualConfig> para garantizar que cada ingrediente tenga obligatoriamente una configuración de escala y posición, evitando errores de renderizado en tiempo de ejecución.

### Animaciones fuera del Loop de React
Para la rotación fluida a 60 FPS, utilizamos el hook useFrame de Fiber. Esto permite manipular las propiedades de las mallas 3D directamente a través de refs, evitando re-renderizados costosos de React y manteniendo la app ligera.

## 🎮 Instalación y Uso
Clonar el repo:

Bash
git clone https://github.com/tu-usuario/tu-repo.git
Instalar dependencias:

Bash
npm install
Ejecutar en modo desarrollo:

Bash
npm run web -- --tunnel
Abrir en Expo Go: Escanea el código QR con tu móvil Android o iOS.

Nota: Esta aplicación fue desarrollada enfocándose en la modularidad. Es muy sencillo añadir nuevos restaurantes o ingredientes simplemente actualizando los archivos de configuración de datos.