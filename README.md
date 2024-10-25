# Aplicación de Login con Dashboard para Carga de Archivos

Esta es una aplicación simple de login construida con **React** que utiliza la API de **Reqres** para la autenticación. Una vez que el usuario inicia sesión, puede acceder a un **dashboard** donde puede cargar archivos desde su ordenador. La aplicación gestiona la autenticación utilizando **tokens JWT** y garantiza que el dashboard solo sea accesible para usuarios autenticados.


## Menú
1. [Funcionalidades](#funcionalidades)
2. [Tecnologías Utilizadas](#tecnologías-utilizadas)
3. [Prerrequisitos](#prerrequisitos)
4. [Comenzando](#comenzando)
   - [Clonar el Repositorio](#1-clona-el-repositorio)
   - [Acceder al Directorio del Proyecto](#2-accede-al-directorio-del-proyecto)
   - [Instalar las Dependencias](#3-instala-las-dependencias)
   - [Iniciar la Aplicación Localmente](#4-inicia-la-aplicación-localmente)
5. [Estructura del Proyecto](#5-estructura-del-proyecto)
6. [Autenticación con Reqres](#6-autenticación-con-reqres)
7. [Acceso al Dashboard](#7-acceso-al-dashboard)
8. [Funcionalidad de Logout](#8-funcionalidad-de-logout)
9. [Funcionalidad de Carga de Archivos](#9-funcionalidad-de-carga-de-archivos)
10. [Diseño en Figma](#10-diseño-en-figma)


## Funcionalidades
- Inicio de sesión con correo electrónico y contraseña utilizando la API de **Reqres**.
- Autenticación basada en token **JWT**.
- Validación en tiempo real del correo y contraseña
- Ruta protegida para el dashboard.
- Funcionalidad de carga de archivos en el dashboard.
- Funcionalidad de cierre de sesión que elimina el token y restringe el acceso al dashboard.

## Tecnologías Utilizadas
- **React** (con **[Vite](https://vitejs.dev/)** como herramienta de compilación)
- **[API de Reqres](https://reqres.in/)** para login
- **[FontAwesome](https://fontawesome.com/)** para los íconos
- **CSS** para el diseño básico

## Prerrequisitos

Antes de comenzar, asegúrate de tener lo siguiente instalado en tu máquina:

- **Node.js** (versión 14 o superior)
- **npm** o **yarn**

## Comenzando

Sigue estos pasos para configurar y ejecutar el proyecto localmente.

### 1. Clona el Repositorio

```bash
git clone https://github.com/DianaJ-Dev/loadFile.git
```

### 2. Accede al Directorio del Proyecto

```bash
cd loadFile
```

### 3. Instala las Dependencias

Si usas npm, ejecuta:

```bash
npm install
```

### 4. Inicia la Aplicación Localmente
Con Vite, puedes iniciar el servidor de desarrollo con el siguiente comando:

```bash
npm run dev
```

Esto debería iniciar la aplicación en http://localhost:5173 (o el puerto que Vite asigne).

### 5. Estructura del Proyecto

``src/components``: Contiene los componentes React utilizados en la aplicación, incluyendo el formulario de login, loading screen, el dashboard y el cargador de archivos.

``src/App.jsx``: Componente principal que maneja las rutas de la aplicación.

``src/helpers/AuthHelper.js``: Servicio que maneja la lógica de autenticación (comunicación con la API de Reqres).

``src/css``: Archivos CSS para el diseño.

### 6. Autenticación con Reqres

La **[API de Reqres](https://reqres.in/)**  proporciona un servicio de autenticación simulado. En esta aplicación, utilizamos su endpoint de login para obtener un token y guardarlo en el almacenamiento local del navegador (**localStorage**).

Endpoint de la API de login:

```bash
POST https://reqres.in/api/login
```

Cuerpo de la solicitud:

```json
{
  "email": "eve.holt@reqres.in",
  "password": "cityslicka"
}
```

Si las credenciales son correctas, la API devuelve un token JWT que se almacena y se utiliza para acceder al dashboard.

### 7. Acceso al Dashboard
El dashboard solo es accesible si el usuario está autenticado (si hay un token almacenado). Si no hay token, la aplicación redirigirá al usuario a la página de login. Esto se maneja a través de rutas protegidas en React.

### 8. Funcionalidad de Logout
El botón de logout en el dashboard eliminará el token del almacenamiento local (localStorage) y redirigirá al usuario de nuevo a la página de login.

### 9. Funcionalidad de Carga de Archivos
Dentro del dashboard, los usuarios pueden cargar archivos desde su ordenador. Esta funcionalidad está implementada usando el componente ``<input type="file" />``.

### 10. Diseño en Figma
El diseño visual de esta aplicación ha sido creado en Figma. Puedes visualizarlo y descargarlo desde el siguiente enlace:

 **[Diseño en Figma](https://www.figma.com/design/DwRz5P2bRHdaPBQL0wxcXe/Untitled?node-id=0-1&node-type=canvas&t=jIrzn81vHziXhbeK-0)**

El diseño en Figma proporciona una guía visual detallada de cómo la interfaz de usuario debe verse, incluyendo los estilos, colores, espaciados y disposición de los elementos.
