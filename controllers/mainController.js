import Patient from "../models/patientSchema.js";


// Defining methods for the mainController
export const getPatients = async (req, res) => {
    try {
        const patients = await Patient.find();
        res.status(200).json(patients);
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
};

export const createPatient = async (req, res) => {
    try {
        const patient = await Patient.findOne({
            subjectNo: req.body.subjectNo,
            initials: req.body.initials,
        });
        if (!patient) {
            console.log("Creating new patient");
            // remove userRole from the request body
            if(req.body.userRole){delete req.body.userRole;}
            const newPatient = new Patient(req.body);
            const savedPatient = await newPatient.save();
            return res.status(201).json(savedPatient);
        }
        // find patient by subjectNo + initials
        const updatedPatient = await Patient.findOneAndUpdate(
            {
                subjectNo: req.body.subjectNo,
                initials: req.body.initials,
            },
            req.body,
            { new: true }
        );

        res.status(200).json(updatedPatient);
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
};

export const getPatient = async (req, res) => {
    try {
        // find by subjectNo + initials
        const patient = await Patient.findOne({
            subjectNo: req.params.subjectNo,
            initials: req.params.initials,
        });
        if (!patient) {
            return res.status(404).json({ error: "Patient not found" });
        }
        res.status(200).json(patient);
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
};

export const updatePatient = async (req, res) => {
    try {
        // Filter out empty fields from req.body
        const updateData = {};
        for (const key in req.body) {
            if (req.body[key] !== '' && req.body[key] !== null && req.body[key] !== undefined) {
                updateData[key] = req.body[key];
            }
        }

        // // Check if updateData is empty
        // if (Object.keys(updateData).length === 0) {
        //     return res.status(400).json({ error: "No valid fields provided for update" });
        // }

        // Find by subjectNo and initials and update the non-empty fields
        const updatedPatient = await Patient.findOneAndUpdate(
            {
                subjectNo: req.params.subjectNo,
                initials: req.params.initials,
            },
            updateData,
            { new: true }
        );

        if (!updatedPatient) {
            return res.status(200).json({ error: "Patient not found" });
        }

        res.status(200).json(updatedPatient);
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
};


export const deletePatient = async (req, res) => {
    try {
        // find by subjectNo + initials
        const deletedPatient = await Patient.findOneAndDelete({
            subjectNo: req.params.subjectNo,
            initials: req.params.initials,
        });
        if (!deletedPatient) {
            return res.status(404).json({ error: "Patient not found" });
        }
        res.status(200).json({ message: "Patient deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
};

export const findPatientsBySubjectNoAndInitials = async (req, res) => {
    const { subjectNo, initials } = req.query;

    try {
        const patients = await Patient.find({ subjectNo, initials });
        if (patients.length === 0) {
            return res.status(200).json({ message: "No patients found" });
        }
        res.status(200).json(patients);
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
};

export const updatePatientBySubjectNoAndInitials = async (req, res) => {
    try {
        // Filter out empty fields from req.body
        const updateData = {};
        Object.keys(req.body).forEach(key => {
            if (req.body[key] !== '') {
                updateData[key] = req.body[key];
            }
        });

        // Find and update patient by subjectNo and initials
        const updatedPatient = await Patient.findOneAndUpdate(
            {
                subjectNo: req.params.subjectNo,
                initials: req.params.initials,
            },
            updateData,
            { new: true }
        );

        if (!updatedPatient) {
            return res.status(404).json({ error: "Patient not found" });
        }

        res.status(200).json(updatedPatient);
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
};