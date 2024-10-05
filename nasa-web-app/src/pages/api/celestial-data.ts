import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        // Get all posts
        const posts = await prisma.planets.findMany({
            where: {
                size: {
                    gte: Number(req.query.minSize),
                }
            },
        });

        res.status(200).json(posts);
    }

    res.status(400).json({ "message": "invalid method" });
}