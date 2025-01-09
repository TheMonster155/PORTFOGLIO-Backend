/*const express = require("express");
const CertificatesModel = require("../models/modelCertificates");

const cloud = require("../middelware/cloudinary");
const certificates = express.Router();

certificates.post(
  "/certifications/create",
  cloud.single("file"),
  async (req, res) => {
    try {
      const { name, skills, description, certificateDate, certificateRelese } =
        req.body;

      if (!req.file) {
        return res.status(400).json({
          message: "File not uploaded",
        });
      }

      const fileUrl = req.file.path;

      const newCertification = new CertificatesModel({
        name,
        skills,
        description,
        file: fileUrl,
        certificateDate,
        certificateRelese,
      });

      const savedCertification = await newCertification.save();

      res.status(201).send({
        statusCode: 201,
        message: "Certification created successfully",
        certification: savedCertification,
      });
    } catch (error) {
      console.error("Error:", error);
      res.status(500).send({
        statusCode: 500,
        message: "Internal server error",
      });
    }
  }
);

module.exports = certificates;
*/
const express = require("express");
const CertificatesModel = require("../models/modelCertificates");
const cloud = require("../middelware/cloudinary");
const certificates = express.Router();

// Rotta POST: Creazione certificazione
certificates.post(
  "/certifications/create",
  cloud.single("file"),
  async (req, res) => {
    try {
      const { name, skills, description, certificateDate, certificateRelese } =
        req.body;

      if (!req.file) {
        return res.status(400).json({
          message: "File not uploaded",
        });
      }

      const fileUrl = req.file.path;

      const newCertification = new CertificatesModel({
        name,
        skills,
        description,
        file: fileUrl,
        certificateDate,
        certificateRelese,
      });

      const savedCertification = await newCertification.save();

      res.status(201).send({
        statusCode: 201,
        message: "Certification created successfully",
        certification: savedCertification,
      });
    } catch (error) {
      console.error("Error:", error);
      res.status(500).send({
        statusCode: 500,
        message: "Internal server error",
      });
    }
  }
);

// Rotta GET: Recupera tutte le certificazioni
certificates.get("/certifications", async (req, res) => {
  try {
    const certifications = await CertificatesModel.find();
    res.status(200).json({
      statusCode: 200,
      certifications,
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send({
      statusCode: 500,
      message: "Internal server error",
    });
  }
});

// Rotta DELETE: Elimina una certificazione
certificates.delete("/certifications/delete/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const deletedCertification = await CertificatesModel.findByIdAndDelete(id);

    if (!deletedCertification) {
      return res.status(404).send({
        statusCode: 404,
        message: "Certification not found",
      });
    }

    res.status(200).send({
      statusCode: 200,
      message: "Certification deleted successfully",
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send({
      statusCode: 500,
      message: "Internal server error",
    });
  }
});

// Rotta PATCH: Modifica una certificazione
certificates.patch("/certifications/patch/:id", async (req, res) => {
  const { id } = req.params;
  const { name, skills, description, certificateDate, certificateRelese } =
    req.body;

  try {
    const updatedCertification = await CertificatesModel.findByIdAndUpdate(
      id,
      {
        name,
        skills,
        description,
        certificateDate,
        certificateRelese,
      },
      { new: true } // Restituisce il documento aggiornato
    );

    if (!updatedCertification) {
      return res.status(404).send({
        statusCode: 404,
        message: "Certification not found",
      });
    }

    res.status(200).send({
      statusCode: 200,
      message: "Certification updated successfully",
      certification: updatedCertification,
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send({
      statusCode: 500,
      message: "Internal server error",
    });
  }
});

module.exports = certificates;
