/**
 * @openapi
 * tags:
 *   name: IoT
 *   description: Endpoints for IoT sensors and device control
 */

/**
 * @openapi
 * /api/iot:
 *   get:
 *     summary: Root endpoint for IoT API documentation and status
 *     tags: [IoT]
 *     responses:
 *       200:
 *         description: IoT API endpoints and status
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 message:
 *                   type: string
 *                 endpoints:
 *                   type: object
 *                 status:
 *                   type: string
 *       500:
 *         description: Server error
 * 
 *   post:
 *     summary: Main endpoint for ESP32 to send combined sensor data
 *     tags: [IoT]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - deviceId
 *             properties:
 *               deviceId:
 *                 type: string
 *                 example: "ESP32_001"
 *               greenhouseId:
 *                 type: string
 *                 default: "greenhouse-001"
 *               pincode:
 *                 type: string
 *                 example: "123456"
 *               temperature:
 *                 type: number
 *                 format: float
 *                 example: 25.5
 *               humidity:
 *                 type: number
 *                 format: float
 *                 example: 65.2
 *               soilMoisture:
 *                 type: integer
 *                 example: 450
 *               lightIntensity:
 *                 type: integer
 *                 example: 850
 *               waterLevel:
 *                 type: integer
 *                 example: 30
 *               timestamp:
 *                 type: string
 *                 format: date-time
 *     responses:
 *       201:
 *         description: Sensor data received and processed successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 message:
 *                   type: string
 *                 data:
 *                   type: object
 *       400:
 *         description: Missing required fields
 *       500:
 *         description: Server error
 */

/**
 * @openapi
 * /api/iot/device-commands/{deviceId}:
 *   get:
 *     summary: Get current device state and pending commands for a specific IoT device
 *     tags: [IoT]
 *     parameters:
 *       - name: deviceId
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *         description: Device ID
 *         example: "ESP32_001"
 *     responses:
 *       200:
 *         description: Device state and commands returned
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 data:
 *                   type: object
 *                   properties:
 *                     status:
 *                       type: string
 *                     intensity:
 *                       type: integer
 *                     autoMode:
 *                       type: boolean
 *                     automationRules:
 *                       type: array
 *                       items:
 *                         type: object
 *                     lastUpdate:
 *                       type: string
 *                       format: date-time
 *       404:
 *         description: Device not found
 *       500:
 *         description: Server error
 */

/**
 * @openapi
 * /api/iot/device-status:
 *   post:
 *     summary: ESP32 reports device status changes
 *     tags: [IoT]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - deviceId
 *               - status
 *             properties:
 *               deviceId:
 *                 type: string
 *                 example: "WATER_PUMP_001"
 *               status:
 *                 type: string
 *                 example: "ON"
 *               autoMode:
 *                 type: boolean
 *                 default: true
 *               greenhouseId:
 *                 type: string
 *                 default: "greenhouse-001"
 *               intensity:
 *                 type: integer
 *                 default: 100
 *     responses:
 *       200:
 *         description: Device status updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 message:
 *                   type: string
 *                 data:
 *                   type: object
 *                   properties:
 *                     deviceId:
 *                       type: string
 *                     status:
 *                       type: string
 *                     autoMode:
 *                       type: boolean
 *                     timestamp:
 *                       type: string
 *                       format: date-time
 *       400:
 *         description: Missing required fields
 *       404:
 *         description: Device not found
 *       500:
 *         description: Server error
 */

/**
 * @openapi
 * /api/iot/old-format:
 *   post:
 *     summary: Old-format ESP32 sensor data endpoint for backward compatibility
 *     tags: [IoT]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - deviceId
 *             properties:
 *               deviceId:
 *                 type: string
 *               greenhouseId:
 *                 type: string
 *               pincode:
 *                 type: string
 *               temperature:
 *                 type: number
 *               humidity:
 *                 type: number
 *               soilMoisture:
 *                 type: integer
 *               lightIntensity:
 *                 type: integer
 *               waterLevel:
 *                 type: integer
 *               timestamp:
 *                 type: string
 *                 format: date-time
 *     responses:
 *       201:
 *         description: Sensor data processed successfully
 *       400:
 *         description: Missing required fields
 *       500:
 *         description: Server error
 */

/**
 * @openapi
 * /api/iot/legacy:
 *   post:
 *     summary: Legacy endpoint for older IoT devices
 *     description: Includes status and autoMode in the request body for older devices
 *     tags: [IoT]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - deviceId
 *               - greenhouseId
 *             properties:
 *               deviceId:
 *                 type: string
 *               greenhouseId:
 *                 type: string
 *               temperature:
 *                 type: number
 *               humidity:
 *                 type: number
 *               soilMoisture:
 *                 type: integer
 *               lightIntensity:
 *                 type: integer
 *               waterLevel:
 *                 type: integer
 *               status:
 *                 type: string
 *               autoMode:
 *                 type: boolean
 *     responses:
 *       200:
 *         description: Data received and processed, commands returned
 *       400:
 *         description: Missing required fields
 *       500:
 *         description: Server error
 */

/**
 * @openapi
 * /api/iot/bulk-data:
 *   post:
 *     summary: Accept multiple sensor readings at once
 *     tags: [IoT]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - readings
 *             properties:
 *               readings:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     deviceId:
 *                       type: string
 *                     greenhouseId:
 *                       type: string
 *                     sensorType:
 *                       type: string
 *                     temperature:
 *                       type: number
 *                     humidity:
 *                       type: number
 *                     soilMoisture:
 *                       type: integer
 *                     lightIntensity:
 *                       type: integer
 *                     waterLevel:
 *                       type: integer
 *                     timestamp:
 *                       type: string
 *                       format: date-time
 *     responses:
 *       201:
 *         description: Bulk sensor data processed successfully
 *       400:
 *         description: Missing or invalid readings array
 *       500:
 *         description: Server error
 */

/**
 * @openapi
 * /api/iot/commands/{deviceId}:
 *   get:
 *     summary: Get commands for ESP32 devices based on current device statuses
 *     tags: [IoT]
 *     parameters:
 *       - name: deviceId
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *         description: Device ID of the ESP32
 *         example: "ESP32_001"
 *     responses:
 *       200:
 *         description: Commands list returned
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 message:
 *                   type: string
 *                 commands:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       device:
 *                         type: string
 *                       action:
 *                         type: string
 *                       state:
 *                         type: boolean
 *                       timestamp:
 *                         type: string
 *                         format: date-time
 *       500:
 *         description: Server error
 */

/**
 * @openapi
 * /api/iot/status:
 *   post:
 *     summary: ESP32 reports current status of multiple devices
 *     tags: [IoT]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - deviceId
 *               - greenhouseId
 *             properties:
 *               deviceId:
 *                 type: string
 *                 example: "ESP32_001"
 *               greenhouseId:
 *                 type: string
 *                 default: "greenhouse-001"
 *               pumpState:
 *                 type: boolean
 *               valveState:
 *                 type: boolean
 *               fanState:
 *                 type: boolean
 *               windowState:
 *                 type: boolean
 *               lightState:
 *                 type: boolean
 *               autoMode:
 *                 type: boolean
 *               wifiConnected:
 *                 type: boolean
 *     responses:
 *       200:
 *         description: Status updated successfully
 *       400:
 *         description: Missing required fields
 *       500:
 *         description: Server error
 */