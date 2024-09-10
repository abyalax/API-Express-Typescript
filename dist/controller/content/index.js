"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
let contents = [];
router.get('/', (req, res) => {
    res.json(contents);
});
router.get('/:id', (req, res) => {
    const Content = contents.find((t) => t.id === parseInt(req.params.id));
    if (!Content) {
        res.status(404).send('Content not found');
    }
    else {
        res.json(Content);
    }
});
router.post('/', (req, res) => {
    const Content = {
        id: contents.length + 1,
        title: req.body.title,
        description: req.body.description,
        completed: false,
    };
    contents.push(Content);
    res.status(201).json(Content);
});
router.put('/:id', (req, res) => {
    const Content = contents.find((t) => t.id === parseInt(req.params.id));
    if (!Content) {
        res.status(404).send('Content not found');
    }
    else {
        Content.title = req.body.title || Content.title;
        Content.description = req.body.description || Content.description;
        Content.completed = req.body.completed || Content.completed;
        res.json(Content);
    }
});
router.delete('/:id', (req, res) => {
    const index = contents.findIndex((t) => t.id === parseInt(req.params.id));
    if (index === -1) {
        res.status(404).send('Content not found');
    }
    else {
        contents.splice(index, 1);
        res.status(204).send();
    }
});
exports.default = router;
