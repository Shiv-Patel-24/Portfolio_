const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  const { name, email, message } = req.body;

  console.log("Contact Form Submission:");
  console.log(`Name: ${name}`);
  console.log(`Email: ${email}`);
  console.log(`Message: ${message}`);

  res.status(200).json({ msg: "Message received! Thank you." });
});

module.exports = router;
