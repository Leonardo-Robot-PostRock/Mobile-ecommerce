# Products App

Aplicación móvil de gestión de productos desarrollada con [Expo](https://expo.dev) y React Native, con soporte para iOS, Android y Web.

## 🚀 Características

- **Autenticación**: Sistema de login y registro
- **Gestión de Productos**: Visualización y administración de productos
- **Diseño Responsivo**: Interfaz moderna con Tailwind CSS (NativeWind)
- **TypeScript**: Desarrollo seguro y tipado
- **Multiplataforma**: iOS, Android y Web

## 📋 Requisitos Previos

Antes de comenzar, asegúrate de tener instalado:

- **Node.js** (versión 18 o superior) - [Descargar](https://nodejs.org/)
- **npm** (generalmente viene con Node.js)
- **Expo CLI** (opcional, pero recomendado):
  ```bash
  npm install -g expo-cli
  ```

### Para desarrollo en iOS:
- **Xcode** (macOS)
- **iOS Simulator**

### Para desarrollo en Android:
- **Android Studio**
- **Android Emulator**

## 🛠️ Instalación

### 1. Clonar el repositorio

```bash
git clone <url-del-repositorio>
cd products-app
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Configurar variables de entorno

Crear un archivo `.env` en la raíz del proyecto basado en `.env.template`:

```bash
cp .env.template .env
```

Luego, completar las variables necesarias en `.env`:

```dotenv
# Ambiente (development, staging, production)
EXPO_PUBLIC_STAGE=development

# URL base de la API
EXPO_PUBLIC_API_URL=https://api.example.com

# URLs específicas por plataforma (opcional)
EXPO_PUBLIC_API_URL_IOS=https://api-ios.example.com
EXPO_PUBLIC_API_URL_ANDROID=https://api-android.example.com
```

## ▶️ Ejecutar la Aplicación

### Iniciar el servidor de desarrollo

```bash
npm start
```

Se abrirá una interfaz interactiva donde podrás seleccionar cómo ejecutar la app.

### En iOS (macOS)

```bash
npm run ios
```

O presiona `i` en la terminal después de ejecutar `npm start`.

**Requisitos:**
- Tener Xcode instalado
- Haber aceptado la licencia de Xcode

### En Android

```bash
npm run android
```

O presiona `a` en la terminal después de ejecutar `npm start`.

**Requisitos:**
- Tener Android Studio instalado
- Android Emulator corriendo o dispositivo conectado

### En Web

```bash
npm run web
```

O presiona `w` en la terminal después de ejecutar `npm start`.

### Usando Expo Go (Recomendado para principiantes)

1. Descargar la app [Expo Go](https://expo.dev/go) en tu dispositivo móvil
2. Ejecutar: `npm start`
3. Escanear el código QR que aparece en la terminal con tu dispositivo

## 📁 Estructura del Proyecto

```
products-app/
├── app/                    # Rutas y layouts (file-based routing)
│   ├── _layout.tsx        # Layout principal
│   ├── index.tsx          # Pantalla de inicio
│   ├── (products-app)/    # Grupo de rutas de la app
│   │   └── (home)/        # Rutas del home
│   │       └── index.tsx
│   └── auth/              # Rutas de autenticación
│       ├── login/         # Pantalla de login
│       └── register/      # Pantalla de registro
├── assets/                # Recursos estáticos
│   ├── fonts/             # Fuentes personalizadas
│   └── images/            # Imágenes
├── constants/             # Constantes de la app
├── core/                  # Lógica de negocios
│   └── auth/
│       ├── actions/       # Acciones y funciones
│       ├── api/           # Llamadas a API
│       └── interface/     # Interfaces TypeScript
├── presentation/          # Componentes y UI
│   ├── auth/             # Componentes de autenticación
│   └── theme/            # Temas y estilos globales
└── tailwind.config.js    # Configuración de Tailwind
```

## 🔧 Scripts Disponibles

| Script | Descripción |
|--------|-------------|
| `npm start` | Inicia el servidor de desarrollo |
| `npm run ios` | Ejecuta en simulador iOS |
| `npm run android` | Ejecuta en emulador Android |
| `npm run web` | Ejecuta en navegador web |
| `npm run lint` | Ejecuta el linter del proyecto |
| `npm run reset-project` | Resetea el proyecto a estado inicial |

## 🎨 Tecnologías Utilizadas

- **React Native** - Framework de desarrollo móvil
- **Expo** - Plataforma para desarrollar apps React Native
- **TypeScript** - Lenguaje tipado
- **Tailwind CSS / NativeWind** - Estilos
- **Zustand** - Gestor de estado global
- **Axios** - Cliente HTTP
- **Expo Router** - Enrutamiento basado en archivos
- **React Navigation** - Navegación en la app

## 📚 Documentación Adicional

- [Documentación de Expo](https://docs.expo.dev/)
- [Guía de Expo Router](https://docs.expo.dev/router/introduction/)
- [Documentación de React Native](https://reactnative.dev/)
- [Documentación de NativeWind](https://www.nativewind.dev/)

## 🤝 Contribuir

1. Crear una rama para tu feature (`git checkout -b feature/AmazingFeature`)
2. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
3. Push a la rama (`git push origin feature/AmazingFeature`)
4. Abrir un Pull Request

## 📝 Licencia

Este proyecto está bajo la licencia MIT.

## ❓ Solución de Problemas

### Error: "Unable to resolve module"

```bash
# Limpiar caché
npm start -- --clear
```

### La app no se conecta a la API

- Verificar que el archivo `.env` está correctamente configurado
- Asegurarse que las URLs de la API son accesibles
- Verificar la conexión de red del dispositivo

### Problemas con Expo Go

- Asegurarse de que el dispositivo y la computadora están en la misma red
- Intentar con `npm start` y seleccionar "Tunnel"

### Error de permisos en iOS

```bash
sudo xcode-select --reset
```

## 📞 Soporte

Para reportar bugs o solicitar features, abre un issue en el repositorio.
