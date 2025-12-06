/**
 * @openapi
 * /api/devices/{greenhouseId}:
 *   get:
 *     summary: Get all devices for a greenhouse
 *     tags:
 *       - Devices
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: greenhouseId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: List of devices
 *       500:
 *         description: Server error
 */

/**
 * @openapi
 * /api/devices:
 *   post:
 *     summary: Create a new device
 *     tags:
 *       - Devices
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             description: Device data
 *     responses:
 *       201:
 *         description: Device created successfully
 *       500:
 *         description: Server error
 */

/**
 * @openapi
 * /api/devices/{deviceId}:
 *   put:
 *     summary: Update device status or settings
 *     tags:
 *       - Devices
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: deviceId
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             description: Fields to update
 *     responses:
 *       200:
 *         description: Device updated successfully
 *       404:
 *         description: Device not found
 *       500:
 *         description: Server error
 */

/**
 * @openapi
 * /api/devices/{deviceId}/toggle:
 *   post:
 *     summary: Toggle device on/off
 *     tags:
 *       - Devices
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: deviceId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Device toggled successfully
 *       404:
 *         description: Device not found
 *       500:
 *         description: Server error
 */

/**
 * @openapi
 * /api/devices/{deviceId}/automation:
 *   post:
 *     summary: Set automation rules for a device
 *     tags:
 *       - Devices
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: deviceId
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               automationRules:
 *                 type: object
 *               autoMode:
 *                 type: boolean
 *     responses:
 *       200:
 *         description: Automation rules updated successfully
 *       404:
 *         description: Device not found
 *       500:
 *         description: Server error
 */

/**
 * @openapi
 * /api/devices/stats/{greenhouseId}:
 *   get:
 *     summary: Get device usage statistics for a greenhouse
 *     tags:
 *       - Devices
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: greenhouseId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Device statistics
 *       500:
 *         description: Server error
 */

/**
 * @openapi
 * /api/devices/{deviceId}:
 *   delete:
 *     summary: Delete a device
 *     tags:
 *       - Devices
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: deviceId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Device deleted successfully
 *       404:
 *         description: Device not found
 *       500:
 *         description: Server error
 */

/**
 * @openapi
 * /api/devices/{deviceId}/control:
 *   post:
 *     summary: Manual device control from frontend
 *     tags:
 *       - Devices
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: deviceId
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               action:
 *                 type: string
 *                 description: Action to perform (turn_on, turn_off, toggle, etc.)
 *               value:
 *                 type: integer
 *                 description: Optional value for intensity or auto mode
 *     responses:
 *       200:
 *         description: Device controlled successfully
 *       400:
 *         description: Invalid action
 *       404:
 *         description: Device not found
 *       500:
 *         description: Server error
 */

/**
 * @openapi
 * /api/devices/control-history/{greenhouseId}:
 *   get:
 *     summary: Get device control history
 *     tags:
 *       - Devices
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: greenhouseId
 *         required: true
 *         schema:
 *           type: string
 *       - in: query
 *         name: deviceId
 *         schema:
 *           type: string
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           default: 50
 *       - in: query
 *         name: startDate
 *         schema:
 *           type: string
 *           format: date-time
 *       - in: query
 *         name: endDate
 *         schema:
 *           type: string
 *           format: date-time
 *     responses:
 *       200:
 *         description: Control history returned
 *       500:
 *         description: Server error
 */

/**
 * @openapi
 * /api/devices/setup-iot-devices:
 *   post:
 *     summary: Setup ESP32 IoT devices in the database
 *     tags:
 *       - Devices
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: false
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               greenhouseId:
 *                 type: string
 *     responses:
 *       200:
 *         description: IoT devices initialized
 *       500:
 *         description: Server error
 */

/**
 * @openapi
 * /api/devices/setup-iot-devices-public:
 *   post:
 *     summary: Public endpoint to setup IoT devices
 *     tags:
 *       - Devices
 *     requestBody:
 *       required: false
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               greenhouseId:
 *                 type: string
 *     responses:
 *       200:
 *         description: IoT devices initialized
 *       500:
 *         description: Server error
 */

/**
 * @openapi
 * /api/devices/set-all-auto-mode:
 *   post:
 *     summary: Set auto mode for all devices
 *     tags:
 *       - Devices
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               autoMode:
 *                 type: boolean
 *                 description: Enable or disable auto mode for all devices
 *     responses:
 *       200:
 *         description: Auto mode updated for all devices
 *       400:
 *         description: Missing autoMode parameter
 *       500:
 *         description: Server error
 */
