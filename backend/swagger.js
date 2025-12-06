const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
require("dotenv").config();

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "🌱 IoT Smart Greenhouse API",
      version: "1.0.0",
      description: `
Smart Greenhouse IoT System API

## Overview
This API powers a smart greenhouse monitoring and control system. It handles IoT device communication, sensor data processing, device control, and user management.

## Authentication
Most endpoints require JWT authentication. Include the token in the Authorization header:
\`Authorization: Bearer <your-token>\`

## Real-time Updates
The system uses Socket.IO for real-time communication. Connect to \`/socket.io\` with a valid JWT token.

## IoT Integration
ESP32 devices can send data to:
- \`POST /api/iot\` - Main sensor data endpoint
- \`POST /api/iot/device-status\` - Device status updates`,
    },

    servers: [
      {
        url: process.env.API_URL || "http://localhost:5000",
        description: "Development Server",
      },
      {
        url: "https://api-smart-greenhouse.onrender.com",
        description: "Production (Render)",
      },
    ],
    tags: [
      {
        name: "Root",
        description: "Root endpoints and API information",
      },
      {
        name: "Health",
        description: "Health check and monitoring",
      },
      {
        name: "Test",
        description: "Testing and debugging endpoints",
      },

      {
        name: "Auth",
        description: "Authentication and user management",
      },
      {
        name: "Sensors",
        description: "Sensor data management",
      },
      {
        name: "Devices",
        description: "IoT device control and management",
      },
      {
        name: "Alerts",
        description: "Alert system and notifications",
      },
      {
        name: "IoT",
        description: "ESP32/IoT device communication",
      },
      {
        name: "Settings",
        description: "User settings and configuration",
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
          description: `Enter JWT <b>token</b> in format: Bearer \`<token>\``,
        },
      },
      responses: {
        UnauthorizedError: {
          description: "Access token is missing or invalid",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  success: {
                    type: "boolean",
                    example: false,
                  },
                  message: {
                    type: "string",
                    example: "Unauthorized",
                  },
                },
              },
            },
          },
        },
        NotFoundError: {
          description: "Resource not found",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  success: {
                    type: "boolean",
                    example: false,
                  },
                  message: {
                    type: "string",
                    example: "Resource not found",
                  },
                },
              },
            },
          },
        },
        ValidationError: {
          description: "Validation failed",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  success: {
                    type: "boolean",
                    example: false,
                  },
                  message: {
                    type: "string",
                    example: "Validation failed",
                  },
                  errors: {
                    type: "array",
                    items: {
                      type: "object",
                    },
                  },
                },
              },
            },
          },
        },
      },
      schemas: {
        Error: {
          type: "object",
          properties: {
            success: {
              type: "boolean",
              example: false,
            },
            message: {
              type: "string",
            },
            error: {
              type: "string",
              description: "Detailed error (development only)",
            },
          },
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  apis: [
    //"./routes/*.js",           // Route files
    "./swagger/*.js", // Separate documentation files
    "./models/*.js", // Model schemas (if you add JSDoc to models)
  ],
};

const swaggerSpec = swaggerJsDoc(options);

const swaggerDocs = (app) => {
  // Swagger UI endpoint
  app.use(
    "/docs",
    swaggerUi.serve,
    swaggerUi.setup(swaggerSpec, {
      explorer: true,
      customCss: `
      .swagger-ui .topbar { display: none }
      .swagger-ui { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif; }
      .info { margin: 20px 0; }
    `,
      customSiteTitle: "IoT Smart Greenhouse API",
      swaggerOptions: {
        persistAuthorization: true,
        displayRequestDuration: true,
        defaultModelsExpandDepth: 2,
        defaultModelExpandDepth: 2,
        docExpansion: "none",
        filter: true,
        tagsSorter: "default",
        operationsSorter: "method",
        deepLinking: true,
      },
    })
  );

  // JSON endpoint for programmatic access
  app.get("/docs.json", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.send(swaggerSpec);
  });
};

module.exports = swaggerDocs;
