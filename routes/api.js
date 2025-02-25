// routes/api.js
const express = require('express');
const router = express.Router();
const Project = require('../models/Project');
const Skill = require('../models/Skill');

// GET all projects
router.get('/projects', async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects); // Return projects as JSON
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server Error' });
  }
});

// GET all skills
router.get('/skills', async (req, res) => {
  try {
    const skills = await Skill.find();
    res.json(skills); // Return skills as JSON
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server Error' });
  }
});

module.exports = router;