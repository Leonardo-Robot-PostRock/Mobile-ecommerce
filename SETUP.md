# Guía Detallada de Configuración - Products App

Esta guía proporciona instrucciones paso a paso para configurar y levantar el proyecto en diferentes plataformas.

## 📱 Configuración Inicial Rápida

### 1. Clonar y preparar el proyecto

```bash
# Clonar el repositorio
git clone <url-del-repositorio>
cd products-app

# Instalar dependencias
bun install

# Crear archivo .env desde template
cp .env.template .env
```

### 2. Configurar variables de entorno

Editar el archivo `.env` y completar:

```dotenv
# Ambiente: dev o prod
EXPO_PUBLIC_STAGE=dev
EXPO_PUBLIC_API_URL=https://tu-api.com
```

### 3. Iniciar la app

```bash
bun start
```

---

## 🍎 Configuración para iOS (macOS)

### Verificar Xcode

```bash
# Ver versión instalada
xcode-select --version

# Si no está instalado:
xcode-select --install

# O descargar Xcode desde App Store
```

### Ejecutar en simulador iOS

```bash
bun run ios
```

La primera vez puede tardar algunos minutos mientras construye el proyecto.

### Troubleshooting iOS

#### Error: "Unable to boot simulator"
```bash
# Resetear el simulador
xcrun simctl erase all

# O abrir manualmente Xcode
open -a Simulator
```

#### Error: Pod install failed
```bash
cd ios
rm -rf Pods
rm Podfile.lock
pod install
cd ..
bun start
```

---

## 🤖 Configuración para Android

### Instalar Android Studio

1. Descargar desde [developer.android.com](https://developer.android.com/studio)
2. Instalar completamente
3. Abrir Android Studio y descargar SDKs (se sugiere automáticamente)

### Configurar variables de entorno

#### En macOS (agregar a `~/.zshrc` o `~/.bash_profile`):

```bash
export ANDROID_HOME=$HOME/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/tools/bin
export PATH=$PATH:$ANDROID_HOME/platform-tools
```

Luego recargar:
```bash
source ~/.zshrc
```

### Ejecutar en emulador Android

```bash
# Crear emulador (si no lo has hecho)
# Abre Android Studio > Virtual Device Manager > Create Device

# Iniciar emulador
emulator -avd nombre_del_emulador

# En otra terminal, ejecutar la app
bun run android
```

### Troubleshooting Android

#### Error: "Could not connect to adb"
```bash
# Reiniciar adb
adb kill-server
adb start-server
```

#### El emulador no inicia
- Verificar que KVM está habilitado (Linux)
- Usar emulador más antiguo (Android 11 o inferior)
- Ejecutar `emulator -avd <nombre> -wipe-data`

---

## 🌐 Configuración para Web

Web es la opción más fácil para desarrollo inicial.

```bash
bun run web
```

Se abrirá automáticamente en `http://localhost:8081`

### Cambios en vivo

- Editar archivos en `app/` y se recargará automáticamente
- Perfecto para desarrollo rápido de UI

---

## 📱 Usar Expo Go (Recomendado para principiantes)

Es la forma más rápida de probar sin configurar emuladores.

### Requisitos
- Dispositivo móvil (iOS o Android)
- App Expo Go instalada ([iOS](https://apps.apple.com/app/expo-go/id982107779), [Android](https://play.google.com/store/apps/details?id=host.exp.exponent))
- Dispositivo y PC en la misma red WiFi

### Pasos

1. Ejecutar en tu PC:
```bash
bun start
```

2. Seleccionar opción en la terminal:
```
› Press i to open iOS Simulator, or w to open Web
› Press a to open Android Emulator, or e to open Expo Go
› Press s to sign in with Expo
```

3. Presionar `e` para abrir Expo Go
4. Escanear código QR con tu dispositivo

---

## 🔐 Configuración de API

### Variables de entorno disponibles

```dotenv
# Ambiente (dev, prod)
EXPO_PUBLIC_STAGE=dev

# URL base (usada en todas las plataformas por defecto)
EXPO_PUBLIC_API_URL=https://api.ejemplo.com

# URLs específicas por plataforma (opcional)
# Se usan cuando están definidas, sino usa EXPO_PUBLIC_API_URL
EXPO_PUBLIC_API_URL_IOS=https://api-ios.ejemplo.com
EXPO_PUBLIC_API_URL_ANDROID=https://api-android.ejemplo.com
```

### Acceder a variables en código

```typescript
// Las variables públicas se acceden así:
const apiUrl = process.env.EXPO_PUBLIC_API_URL;
const stage = process.env.EXPO_PUBLIC_STAGE;
```

---

## 🧪 Desarrollo

### Estructura de carpetas

- `app/` - Rutas y layouts (file-based routing de Expo Router)
- `core/` - Lógica de negocios, API calls
- `presentation/` - Componentes UI, hooks, estado local
- `constants/` - Constantes globales

### Hot Reload

Cambios en archivos se recargan automáticamente mientras la app está ejecutándose.

### Debugging

#### Con Expo Tools en VS Code
1. Instalar extensión "Expo Tools"
2. Ejecutar `npm start`
3. Presionar `j` en la terminal para abrir debugger

#### Con React Native Debugger
```bash
npm install -g react-native-debugger
react-native-debugger
```

---

## 📦 Instalación de Dependencias Nuevas

```bash
# Instalar paquete
bun add nombre-del-paquete

# O agregar como dev dependency
bun add --save-dev nombre-del-paquete

# Reiniciar la app
bun start
```

---

## 🧹 Limpiar y Resetear

### Limpiar caché de Expo
```bash
bun start -- --clear
```

### Resetear proyecto completamente
```bash
bun run reset-project
```

### Limpiar dependencias
```bash
rm -rf node_modules bun.lockb
bun install
```

---

## ✅ Checklist de Configuración Inicial

- [ ] Node.js instalado (versión 18+)
- [ ] Bun instalado
- [ ] Dependencias instaladas (`bun install`)
- [ ] Archivo `.env` creado con variables
- [ ] Para iOS: Xcode instalado
- [ ] Para Android: Android Studio configurado
- [ ] Al menos una opción de ejecución probada (web, simulador o Expo Go)

---

## 🆘 Soporte Rápido

| Problema | Solución |
|----------|----------bun start -- --clear` |
| Error de módulos | `rm -rf node_modules bun.lockb && bun
| Error de módulos | `rm -rf node_modules && npm install` |
| Simulador no abre | Verificar que está instalado en las preferencias del IDE |
| API no responde | Verificar URLs en `.env` y conexión de red |
| Cambios no aparecen | Esperar un momento (hot reload), o recargar manualmente |

---

## 📚 Recursos Útiles

- [Documentación Expo Oficial](https://docs.expo.dev/)
- [Guía Expo Router](https://docs.expo.dev/router/introduction/)
- [React Native Docs](https://reactnative.dev/docs/getting-started)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Zustand Store Management](https://github.com/pmndrs/zustand)
