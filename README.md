# Auth-User Microservice

Microservicio de autenticación y gestión de usuarios desarrollado con Node.js, Express y TypeScript.

## 🚀 Inicio Rápido

### Instalación de dependencias
```bash
npm install
```

### Desarrollo
```bash
npm run dev
```

### Compilación
```bash
npm run build
```

### Producción
```bash
npm start
```

## 📚 Documentación API

Una vez iniciado el servidor, la documentación de Swagger está disponible en:
- **Local**: http://localhost:3000/api-docs

## 🛠️ Endpoints Disponibles

### Hello World
- **GET** `/api/hello` - Devuelve un mensaje de saludo

### Health Check
- **GET** `/health` - Estado del servicio

## 🏗️ Estructura del Proyecto

```
src/
├── app.ts              # Configuración principal de Express
├── config/
│   └── swagger.ts      # Configuración de Swagger
├── routes/
│   └── hello.routes.ts # Rutas del endpoint hello
└── types/
    └── swagger.d.ts    # Declaraciones de tipos para Swagger
```

## 🗄️ Base de Datos

Este proyecto está preparado para usar PostgreSQL como base de datos.


