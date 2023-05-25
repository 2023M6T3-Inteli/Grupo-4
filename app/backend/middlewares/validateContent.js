exports.validateContent = (req, res, next) => {
    const { title, description, links, tags, image } = req.body;

    if (!title || !description || !links || !tags || !image) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    if (!Array.isArray(links) || !Array.isArray(tags)) {
        return res.status(400).json({ error: 'Links and tags must be arrays' });
    }

    next();
};
