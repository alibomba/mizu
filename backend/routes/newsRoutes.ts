import { PrismaClient } from '@prisma/client';
import { Request, Response, Router } from 'express';

const newsRoutes: Router = Router();
const prisma = new PrismaClient();

newsRoutes.get('/latest-news', async (req: Request, res: Response) => {
    const newsCount = await prisma.news.count();
    const news = await prisma.news.findMany({
        orderBy: {
            createdAt: 'desc'
        },
        take: 2
    });
    if (newsCount >= 2) {
        res.json(news);
    }
    else {
        res.status(404).json({ message: 'Za mało aktualności' });
    }
});

export default newsRoutes;