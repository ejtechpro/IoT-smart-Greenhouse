/**
 * @openapi
 * tags:
 *   - name: Root
 *     description: Root endpoints and API information
 *   - name: Health
 *     description: Health check and monitoring endpoints
 *   - name: Test
 *     description: Testing and debugging endpoints
 */

/**
 * @openapi
 * /:
 *   get:
 *     summary: API Welcome and Information
 *     description: Root endpoint that provides API information, status, and available endpoints
 *     tags: [Root]
 *     responses:
 *       200:
 *         description: API information
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: "🌱 Smart Greenhouse IoT API - Successfully Deployed!"
 *                 version:
 *                   type: string
 *                   example: "1.0.0"
 *                 status:
 *                   type: string
 *                   example: "Running"
 *                 environment:
 *                   type: string
 *                   example: "development"
 *                 timestamp:
 *                   type: string
 *                   format: date-time
 *                 database:
 *                   type: string
 *                   example: "Connected"
 *                 endpoints:
 *                   type: object
 *                   properties:
 *                     health:
 *                       type: string
 *                       example: "/api/health"
 *                     sensors:
 *                       type: string
 *                       example: "/api/sensors"
 *                     devices:
 *                       type: string
 *                       example: "/api/devices"
 *                     alerts:
 *                       type: string
 *                       example: "/api/alerts"
 *                     iot:
 *                       type: string
 *                       example: "/api/iot"
 *                     auth:
 *                       type: string
 *                       example: "/api/auth"
 *                     settings:
 *                       type: string
 *                       example: "/api/settings"
 *                 documentation:
 *                   type: string
 *                   example: "https://github.com/TechGriffo254/IotSmartGreenHouseProject"
 *                 deployment:
 *                   type: string
 *                   example: "Koyeb Cloud Platform"
 */

/**
 * @openapi
 * /api/health:
 *   get:
 *     summary: Health Check
 *     description: Check API and database health status
 *     tags: [Health]
 *     responses:
 *       200:
 *         description: Health status information
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: "OK"
 *                 timestamp:
 *                   type: string
 *                   format: date-time
 *                 uptime:
 *                   type: number
 *                   example: 3600
 *                 database:
 *                   type: object
 *                   properties:
 *                     status:
 *                       type: string
 *                       example: "connected"
 *                     readyState:
 *                       type: integer
 *                       example: 1
 *                     name:
 *                       type: string
 *                       example: "smart-greenhouse"
 *       503:
 *         description: Service Unavailable - Database disconnected
 */

/**
 * @openapi
 * /api/test:
 *   get:
 *     summary: Test API Reachability
 *     description: Debug endpoint to test CORS and API accessibility
 *     tags: [Test]
 *     responses:
 *       200:
 *         description: API reachability test successful
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: "API is reachable"
 *                 origin:
 *                   type: string
 *                   example: "http://localhost:3000"
 *                 userAgent:
 *                   type: string
 *                   example: "Mozilla/5.0"
 *                 timestamp:
 *                   type: string
 *                   format: date-time
 */

/**
 * @openapi
 * /api/test-post:
 *   post:
 *     summary: Test POST Request
 *     description: Debug endpoint to test POST requests and headers
 *     tags: [Test]
 *     requestBody:
 *       required: false
 *       description: Optional test data
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               test:
 *                 type: string
 *                 example: "test data"
 *     responses:
 *       200:
 *         description: POST request test successful
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: "POST request successful"
 *                 receivedData:
 *                   type: object
 *                 headers:
 *                   type: object
 *                   properties:
 *                     origin:
 *                       type: string
 *                     contentType:
 *                       type: string
 *                     authorization:
 *                       type: string
 *                 timestamp:
 *                   type: string
 *                   format: date-time
 */

/**
 * @openapi
 * /api/auth/*:
 *   summary: Authentication endpoints
 *   description: |
 *     Authentication routes including:
 *     - Login
 *     - Registration
 *     - Token refresh
 *     - Logout
 *   tags: [Auth]
 * 
 * /api/sensors/*:
 *   summary: Sensor data endpoints
 *   description: |
 *     Sensor data management including:
 *     - Get sensor readings
 *     - Filter by date range
 *     - Get latest readings
 *     - Delete old data
 *   tags: [Sensors]
 * 
 * /api/devices/*:
 *   summary: Device control endpoints
 *   description: |
 *     IoT device management including:
 *     - Get device status
 *     - Control devices
 *     - Get device history
 *     - Setup devices
 *   tags: [Devices]
 * 
 * /api/alerts/*:
 *   summary: Alert management endpoints
 *   description: |
 *     Alert system including:
 *     - Get active alerts
 *     - Mark alerts as read
 *     - Get alert history
 *     - Configure alert thresholds
 *   tags: [Alerts]
 * 
 * /api/iot/*:
 *   summary: IoT communication endpoints
 *   description: |
 *     ESP32/IoT device communication including:
 *     - Receive sensor data
 *     - Send device commands
 *     - Device status updates
 *     - Bulk data processing
 *   tags: [IoT]
 * 
 * /api/settings/*:
 *   summary: User settings endpoints
 *   description: |
 *     User preferences and configuration including:
 *     - Alert thresholds
 *     - System settings
 *     - Device preferences
 *   tags: [Settings]
 * 
 * /api/setup/*:
 *   summary: System setup endpoints
 *   description: |
 *     Initial system setup and configuration
 *   tags: [Setup]
 */

/**
 * @openapi
 * /api/*:
 *   get:
 *     summary: All API routes
 *     description: Overview of all available API routes
 *     tags: [Root]
 *     responses:
 *       200:
 *         description: API routes overview
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 routes:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       path:
 *                         type: string
 *                       method:
 *                         type: string
 *                       description:
 *                         type: string
 * 
 *   options:
 *     summary: CORS Preflight Request
 *     tags: [Root]
 *     responses:
 *       204:
 *         description: CORS preflight successful
 *         headers:
 *           Access-Control-Allow-Origin:
 *             schema:
 *               type: string
 *             example: "*"
 *           Access-Control-Allow-Methods:
 *             schema:
 *               type: string
 *             example: "GET, POST, PUT, DELETE, OPTIONS"
 *           Access-Control-Allow-Headers:
 *             schema:
 *               type: string
 *             example: "Content-Type, Authorization, X-Requested-With, Accept"
 */

/**
 * @openapi
 * /socket.io:
 *   description: |
 *     WebSocket/Socket.IO endpoint for real-time communication.
 *     
 *     **Events:**
 *     - `join-greenhouse`: Join a specific greenhouse room
 *     - `device-control`: Send device control commands
 *     - `greenhouse-joined`: Confirmation of joining greenhouse
 *     - `deviceControl`: Device control command for ESP32
 *     - `device-control-update`: Device status update for frontend
 *     - `sensorUpdate`: Real-time sensor data updates
 *     - `allSensorsUpdate`: All sensors data update
 *     - `autoModeUpdate`: Auto mode status update
 *     
 *     **Authentication:** Requires JWT token in handshake
 *   tags: [WebSocket]
 */