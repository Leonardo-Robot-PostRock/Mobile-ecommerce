# Products App

Aplicación móvil de gestión de productos desarrollada con [Expo](https://expo.dev) y React Native, con soporte para iOS, Android y Web.

## 🚀 Características

- **Autenticación**: Sistema de login y registro
- **Gestión de Productos**: Visualización y administración de productos
- **Diseño Responsivo**: Interfaz moderna con React Native StyleSheet
- **TypeScript**: Desarrollo seguro y tipado
- **Multiplataforma**: iOS, Android y Web

## 📋 Requisitos Previos

Antes de comenzar, asegúrate de tener instalado:

- **Node.js** (versión 18 o superior) - [Descargar](https://nodejs.org/)
- **Bun** (para gestionar dependencias) - [Descargar](https://bun.sh)
- **Expo CLI** (opcional, pero recomendado):
  ```bash
  bun install -g expo-cli
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
bun install
```

### 3. Configurar variables de entorno

Crear un archivo `.env` en la raíz del proyecto basado en `.env.template`:

```bash
cp .env.template .env
```

Luego, completar las variables necesarias en `.env`:

```dotenv
# Ambiente (dev, prod)
EXPO_PUBLIC_STAGE=dev

# URL base de la API
EXPO_PUBLIC_API_URL=https://api.example.com

# URLs específicas por plataforma (opcional)
EXPO_PUBLIC_API_URL_IOS=https://api-ios.example.com
EXPO_PUBLIC_API_URL_ANDROID=https://api-android.example.com
```

## ▶️ Ejecutar la Aplicación

### Iniciar el servidor de desarrollo

```bash
bun start
```

Se abrirá una interfaz interactiva donde podrás seleccionar cómo ejecutar la app.

### En iOS (macOS)

```bash
bun run ios
```

O presiona `i` en la terminal después de ejecutar `bun start`.

**Requisitos:**
- Tener Xcode instalado
- Haber aceptado la licencia de Xcode

### envs

- Llenar variables de entorno con las respectivas direcciones IP para android y ios.

### En Android

```bash
bun run android
```

O presiona `a` en la terminal después de ejecutar `bun start`.

**Requisitos:**
- Tener Android Studio instalado
- Android Emulator corriendo o dispositivo conectado

### En Web

```bash
bun run web
```

O presiona `w` en la terminal después de ejecutar `bun start`.

### Usando Expo Go (Recomendado para principiantes)

1. Descargar la app [Expo Go](https://expo.dev/go) en tu dispositivo móvil
2. Ejecutar: `bun start`
3. Escanear el código QR que aparece en la terminal con tu dispositivo

##  Scripts Disponibles

| Script | Descripción |
|--------|-------------|
| `bun start` | Inicia el servidor de desarrollo |
| `bun run ios` | Ejecuta en simulador iOS |
| `bun run android` | Ejecuta en emulador Android |
| `bun run web` | Ejecuta en navegador web |
| `bun run lint` | Ejecuta el linter del proyecto |
| `bun run reset-project` | Resetea el proyecto a estado inicial |

## 🎨 Tecnologías Utilizadas

- **React Native** - Framework de desarrollo móvil
- **Expo** - Plataforma para desarrollar apps React Native
- **TypeScript** - Lenguaje tipado
- **React Native StyleSheet** - Estilos
- **Zustand** - Gestor de estado global
- **Axios** - Cliente HTTP
- **Expo Router** - Enrutamiento basado en archivos
- **React Navigation** - Navegación en la app
- **TanStack Query** - Manejo del server state
- **Formik** - Creación de formularios

## 📚 Documentación Adicional

- [Documentación de Expo](https://docs.expo.dev/)
- [Guía de Expo Router](https://docs.expo.dev/router/introduction/)
- [Documentación de React Native](https://reactnative.dev/)

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
