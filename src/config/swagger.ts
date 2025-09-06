import swaggerJSDoc from 'swagger-jsdoc';

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Auth-User Microservice API',
      version: '1.0.0',
      description: 'Microservicio de autenticación y gestión de usuarios',
      contact: {
        name: 'API Support',
        email: 'support@auth-user.com'
      }
    },
    servers: [
      {
        url: 'http://localhost:3000',
        description: 'Development server'
      }
    ],
    tags: [
      {
        name: 'Hello',
        description: 'Endpoints de prueba'
      }
    ]
  },
  apis: ['./src/routes/*.ts'], // Rutas donde están las definiciones de Swagger
};

export const swaggerSpec = swaggerJSDoc(swaggerOptions);
