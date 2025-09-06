import { Router, Request, Response } from 'express';

const router = Router();

/**
 * @swagger
 * /api/hello:
 *   get:
 *     summary: Returns a hello message
 *     description: Simple hello endpoint for testing the auth-user service
 *     tags: [Hello]
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Hello from auth-user"
 *                 timestamp:
 *                   type: string
 *                   format: date-time
 *                   example: "2025-09-06T10:30:00.000Z"
 */
router.get('/hello', (req: Request, res: Response) => {
  res.status(200).json({
    message: 'Hello from auth-user',
    timestamp: new Date().toISOString()
  });
});

export default router;
