/**
 * @openapi
 * /api/alerts/{greenhouseId}:
 *   get:
 *     summary: Get alerts for a greenhouse
 *     tags:
 *       - Alerts
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: greenhouseId
 *         required: true
 *         schema:
 *           type: string
 *       - in: query
 *         name: status
 *         schema:
 *           type: string
 *           enum: [all, active, resolved]
 *           default: all
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           default: 50
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           default: 1
 *     responses:
 *       200:
 *         description: List of alerts with pagination
 *       500:
 *         description: Server error
 */

/**
 * @openapi
 * /api/alerts/active/{greenhouseId}:
 *   get:
 *     summary: Get active alerts for a greenhouse
 *     tags:
 *       - Alerts
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
 *         description: Active alerts
 *       500:
 *         description: Server error
 */

/**
 * @openapi
 * /api/alerts/{alertId}/resolve:
 *   put:
 *     summary: Resolve an alert
 *     tags:
 *       - Alerts
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: alertId
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: false
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               actionTaken:
 *                 type: string
 *     responses:
 *       200:
 *         description: Alert resolved successfully
 *       400:
 *         description: Alert already resolved
 *       404:
 *         description: Alert not found
 *       500:
 *         description: Server error
 */

/**
 * @openapi
 * /api/alerts/{greenhouseId}:
 *   post:
 *     summary: Create a manual alert
 *     tags:
 *       - Alerts
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: greenhouseId
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             description: Alert data
 *     responses:
 *       201:
 *         description: Alert created successfully
 *       500:
 *         description: Server error
 */

/**
 * @openapi
 * /api/alerts/stats/{greenhouseId}:
 *   get:
 *     summary: Get alert statistics for a greenhouse
 *     tags:
 *       - Alerts
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: greenhouseId
 *         required: true
 *         schema:
 *           type: string
 *       - in: query
 *         name: hours
 *         schema:
 *           type: integer
 *           default: 24
 *     responses:
 *       200:
 *         description: Alert statistics
 *       500:
 *         description: Server error
 */

/**
 * @openapi
 * /api/alerts/{alertId}:
 *   delete:
 *     summary: Delete an alert
 *     tags:
 *       - Alerts
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: alertId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Alert deleted successfully
 *       404:
 *         description: Alert not found
 *       500:
 *         description: Server error
 */
