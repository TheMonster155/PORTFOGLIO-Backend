const mongoose = require("mongoose");

const allowedSkills = [
  "VSCode",
  "HTML5",
  "CSS",
  "CSS3",
  "BOOTSTRAP",
  "GIT",
  "DOM",
  "JavaScript",
  "API",
  "ES6",
  "AJAX",
  "Async",
  "Single Page Application",
  "ReactJs",
  "Redux",
  "Express",
  "MongoDB",
  "Cloud",
  "Node.js",
  "AI & GitHub Copilot",
];

const certificateSchema = new mongoose.Schema(
  {
    name: { type: String, required: false },
    skills: { type: [String], enum: allowedSkills, required: false },
    description: { type: String, required: false },
    file: { type: String, required: false },
    certificateDate: { type: String, required: false },
    certificateRelese: { type: String, required: false },
  },
  {
    timestamps: true,
    strict: true,
  }
);

module.exports = mongoose.model(
  "CertificatesModel",
  certificateSchema,
  "Certificates"
);
