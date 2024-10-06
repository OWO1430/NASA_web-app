import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        // Get all posts
        const planets = await prisma.planets.findMany({
            where: {
                size: {
                    gte: Number(req.query.minSize),
                }
            },
        });

        const asteroids = await prisma.asteroids.findMany({
            where: {
                pha: 'Y'
            }
        })

        res.status(200).json({
            planets: planets,
            asteroids: asteroids,
        });
    }
    else {
        res.status(400).json({ "message": "invalid method" });
    }
}