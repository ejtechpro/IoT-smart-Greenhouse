/**
 * @openapi
 * tags:
 *   - name: Settings
 *     description: Endpoints for managing greenhouse user settings and thresholds
 */

/**
 * @openapi
 * /api/settings/{greenhouseId}:
 *   get:
 *     summary: Get user settings for a greenhouse
 *     tags:
 *       - Settings
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
 *         description: User settings returned
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 userId:
 *                   type: string
 *                 greenhouseId:
 *                   type: string
 *                 alertThresholds:
 *                   type: object
 *                   properties:
 *                     temperature:
 *                       type: object
 *                       properties:
 *                         high:
 *                           type: number
 *                           nullable: true
 *                         low:
 *                           type: number
 *                           nullable: true
 *                     humidity:
 *                       type: object
 *                       properties:
 *                         high:
 *                           type: number
 *                           nullable: true
 *                         low:
 *                           type: number
 *                           nullable: true
 *                     soilMoisture:
 *                       type: object
 *                       properties:
 *                         low:
 *                           type: number
 *                           nullable: true
 *                     lightLevel:
 *                       type: object
 *                       properties:
 *                         low:
 *                           type: number
 *                           nullable: true
 *                 systemSettings:
 *                   type: object
 *                   properties:
 *                     dataRetentionDays:
 *                       type: integer
 *                     updateInterval:
 *                       type: integer
 *                     autoBackup:
 *                       type: boolean
 *                     maintenanceMode:
 *                       type: boolean
 *                 deviceSettings:
 *                   type: object
 *                   properties:
 *                     autoControl:
 *                       type: boolean
 *                     controlSensitivity:
 *                       type: string
 *       500:
 *         description: Failed to fetch settings
 */

/**
 * @openapi
 * /api/settings/{greenhouseId}/thresholds:
 *   put:
 *     summary: Update alert thresholds for a greenhouse
 *     tags:
 *       - Settings
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: greenhouseId
 *         in: path
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
 *               alertThresholds:
 *                 type: object
 *                 properties:
 *                   temperature:
 *                     type: object
 *                     properties:
 *                       high:
 *                         type: number
 *                         nullable: true
 *                       low:
 *                         type: number
 *                         nullable: true
 *                   humidity:
 *                     type: object
 *                     properties:
 *                       high:
 *                         type: number
 *                         nullable: true
 *                       low:
 *                         type: number
 *                         nullable: true
 *                   soilMoisture:
 *                     type: object
 *                     properties:
 *                       low:
 *                         type: number
 *                         nullable: true
 *                   lightLevel:
 *                     type: object
 *                     properties:
 *                       low:
 *                         type: number
 *                         nullable: true
 *     responses:
 *       200:
 *         description: Alert thresholds updated successfully
 *       500:
 *         description: Failed to update alert thresholds
 */

/**
 * @openapi
 * /api/settings/{greenhouseId}/system:
 *   put:
 *     summary: Update system settings for a greenhouse
 *     tags:
 *       - Settings
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: greenhouseId
 *         in: path
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
 *               systemSettings:
 *                 type: object
 *                 properties:
 *                   dataRetentionDays:
 *                     type: integer
 *                   updateInterval:
 *                     type: integer
 *                   autoBackup:
 *                     type: boolean
 *                   maintenanceMode:
 *                     type: boolean
 *     responses:
 *       200:
 *         description: System settings updated successfully
 *       500:
 *         description: Failed to update system settings
 */

/**
 * @openapi
 * /api/settings/{greenhouseId}/devices:
 *   put:
 *     summary: Update device settings for a greenhouse
 *     tags:
 *       - Settings
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: greenhouseId
 *         in: path
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
 *               deviceSettings:
 *                 type: object
 *                 properties:
 *                   autoControl:
 *                     type: boolean
 *                   controlSensitivity:
 *                     type: string
 *     responses:
 *       200:
 *         description: Device settings updated successfully
 *       500:
 *         description: Failed to update device settings
 */

/**
 * @openapi
 * /api/settings/{greenhouseId}/reset:
 *   post:
 *     summary: Reset settings to default values for a greenhouse
 *     tags:
 *       - Settings
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: greenhouseId
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Settings reset to defaults
 *       500:
 *         description: Failed to reset settings
 */
