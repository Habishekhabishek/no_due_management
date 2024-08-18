// routes/requestForm.js
const express = require('express');
const router = express.Router();
const RequestForm = require('../models/requestForm');

router.post('/submit', async (req, res) => {
  const { reg_num, esim_id, student_name, mail_id, department, semester } = req.body;

  try {
    const request = await RequestForm.create({
      reg_num,
      esim_id,
      student_name,
      mail_id,
      department,
      semester,
    });
    res.status(201).json({ message: 'Form successfully submitted!', request });
  } catch (error) {
    console.error('Error submitting form:', error);
    res.status(500).json({ message: 'Error submitting the form. Please try again.' });
  }
});

module.exports = router;
