const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.createContent = async (req, res) => {
    try {
        const content = await prisma.content.create({
            data: req.body
        });
        res.status(201).json(content);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
