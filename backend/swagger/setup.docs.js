/**
 * @openapi
 * /api/devices/setup-iot-devices-public:
 *   post:
 *     summary: Initialize standard IoT devices for a greenhouse (public access)
 *     description: Creates default IoT devices (water pump, valve, window, fan, LED light) if they don't exist. This endpoint is publicly accessible without authentication.
 *     tags: [Devices]
 *     requestBody:
 *       required: false
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               greenhouseId:
 *                 type: string
 *                 description: Greenhouse ID to associate devices with
 *                 default: "greenhouse-001"
 *                 example: "greenhouse-001"
 *     responses:
 *       200:
 *         description: IoT devices initialized successfully
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
 *                   example: "IoT devices initialized successfully"
 *                 devices:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       _id:
 *                         type: string
 *                         example: "507f1f77bcf86cd799439011"
 *                       deviceId:
 *                         type: string
 *                         example: "WATER_PUMP_001"
 *                       deviceName:
 *                         type: string
 *                         example: "Water Pump"
 *                       deviceType:
 *                         type: string
 *                         enum: [WATER_PUMP, WATER_VALVE, WINDOW, FAN, LED_LIGHT]
 *                         example: "WATER_PUMP"
 *                       status:
 *                         type: string
 *                         enum: [ON, OFF, OPEN, CLOSED]
 *                         example: "OFF"
 *                       greenhouseId:
 *                         type: string
 *                         example: "greenhouse-001"
 *                       location:
 *                         type: string
 *                         example: "Main Greenhouse"
 *                       powerConsumption:
 *                         type: integer
 *                         example: 25
 *                       autoMode:
 *                         type: boolean
 *                         example: true
 *                       intensity:
 *                         type: integer
 *                         minimum: 0
 *                         maximum: 100
 *                         description: Light intensity (0-100%, only for LED_LIGHT)
 *                         example: 100
 *                       createdAt:
 *                         type: string
 *                         format: date-time
 *                       updatedAt:
 *                         type: string
 *                         format: date-time
 *       500:
 *         description: Server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 message:
 *                   type: string
 *                   example: "Failed to setup IoT devices"
 *                 error:
 *                   type: string
 *                   example: "Database connection failed"
 */