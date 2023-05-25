const Content = require('../models/content');

exports.createContent = async (data) => {
    try {
        const content = new Content(data);
        await content.save();
        return content;
    } catch (error) {
        throw error;
    }
};
