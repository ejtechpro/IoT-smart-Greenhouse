/**
 * @openapi
 * tags:
 *   - name: Sensors
 *     description: Endpoints for sensor readings, historical data, and statistics
 */

/**
 * @openapi
 * /api/sensors/latest/{greenhouseId}:
 *   get:
 *     summary: Get the latest sensor readings for a greenhouse
 *     tags:
 *       - Sensors
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: greenhouseId
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *           description: Greenhouse ID
 *     responses:
 *       200:
 *         description: Latest sensor readings returned
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       sensorType:
 *                         type: string
 *                       temperature:
 *                         type: number
 *                       humidity:
 *                         type: number
 *                       soilMoisture:
 *                         type: integer
 *                       lightIntensity:
 *                         type: integer
 *                       waterLevel:
 *                         type: integer
 *                       timestamp:
 *                         type: string
 *                         format: date-time
 *                 timestamp:
 *                   type: string
 *                   format: date-time
 *       500:
 *         description: Server error
 */

/**
 * @openapi
 * /api/sensors/historical/{greenhouseId}:
 *   get:
 *     summary: Get historical sensor data for a greenhouse
 *     tags:
 *       - Sensors
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: greenhouseId
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *       - name: hours
 *         in: query
 *         required: false
 *         schema:
 *           type: integer
 *           default: 24
 *           description: How many hours back to fetch data
 *       - name: sensorType
 *         in: query
 *         required: false
 *         schema:
 *           type: string
 *           description: Filter by sensor type
 *     responses:
 *       200:
 *         description: Historical sensor data returned
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       sensorType:
 *                         type: string
 *                       temperature:
 *                         type: number
 *                       humidity:
 *                         type: number
 *                       soilMoisture:
 *                         type: integer
 *                       lightIntensity:
 *                         type: integer
 *                       waterLevel:
 *                         type: integer
 *                       timestamp:
 *                         type: string
 *                         format: date-time
 *                 count:
 *                   type: integer
 *                 timeRange:
 *                   type: object
 *                   properties:
 *                     hours:
 *                       type: integer
 *                     from:
 *                       type: string
 *                       format: date-time
 *       500:
 *         description: Server error
 */

/**
 * @openapi
 * /api/sensors/data:
 *   post:
 *     summary: Add a new sensor reading
 *     tags:
 *       - Sensors
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
 *               sensorType:
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
 *         description: Sensor data recorded successfully
 *       500:
 *         description: Failed to save sensor data
 */

/**
 * @openapi
 * /api/sensors/stats/{greenhouseId}:
 *   get:
 *     summary: Get sensor statistics for a greenhouse
 *     tags:
 *       - Sensors
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: greenhouseId
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *       - name: hours
 *         in: query
 *         required: false
 *         schema:
 *           type: integer
 *           default: 24
 *           description: Time range in hours for stats calculation
 *     responses:
 *       200:
 *         description: Sensor statistics returned
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       _id:
 *                         type: string
 *                         description: Sensor type
 *                       avgTemperature:
 *                         type: number
 *                       maxTemperature:
 *                         type: number
 *                       minTemperature:
 *                         type: number
 *                       avgHumidity:
 *                         type: number
 *                       maxHumidity:
 *                         type: number
 *                       minHumidity:
 *                         type: number
 *                       avgLightIntensity:
 *                         type: number
 *                       maxLightIntensity:
 *                         type: number
 *                       minLightIntensity:
 *                         type: number
 *                       avgSoilMoisture:
 *                         type: number
 *                       maxSoilMoisture:
 *                         type: number
 *                       minSoilMoisture:
 *                         type: number
 *                       count:
 *                         type: integer
 *                 timeRange:
 *                   type: object
 *                   properties:
 *                     hours:
 *                       type: integer
 *                     from:
 *                       type: string
 *                       format: date-time
 *       500:
 *         description: Failed to fetch sensor statistics
 */
