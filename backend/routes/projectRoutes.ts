import { PrismaClient } from '@prisma/client';
import { Request, Response, Router } from 'express';

const projectRoutes: Router = Router();

const prisma = new PrismaClient();

projectRoutes.get('/nearest-projects', async (req: Request, res: Response) => {
    const projectsCount = await prisma.project.count();
    const projects = await prisma.project.findMany({
        orderBy: {
            date: 'asc'
        },
        take: 4
    });
    if (projectsCount >= 4) {
        res.json(projects);
    } else {
        res.status(404).json({ message: 'Za mało projektów' });
    }
});


export default projectRoutes;