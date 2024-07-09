import mongoose from "mongoose";
const { Schema } = mongoose;

const patientSchema = new Schema({
    // subjectNo is a unique identifier and primary key for the patient
    subjectNo: {
        type: String,
        required: true,
    },
    initials:{
        type: String, 
        required: true,
        maxlength: 3,
    },
    name: {
        type: String,
    },
    age: {
        type: Number,
    },
    gender: {
        type: String,
    },
    'height(cm)': {
        type: Number,
    },
    'weight(kg)': {
        type: Number,
    },
    BMI: {
        type: Number,
    },
    'BP(mmHg)': {
        type: String,
    },
    'waistCircumference(cm)': {
        type: Number,
    },
    'hipCircumference(cm)': {
        type: Number,
    },
    waistHipRatio: {
        type: Number,
    },
    // history of risk factors
    // store the number of months the patient has been under risk factors
    historyOfRiskFactors: {
        type: Boolean,
    },
    "overweight(months)": {
        type: Number, 
    },
    "obesity(months)": {
        type: Number, 
    },
    "diabetes(months)": {
        type: Number,
    },
    "hypertension(months)": {
        type: Number,
    },

    "increasedTG(months)": {
        type: Number,
    },
    "lowHDL(months)": {
        type: Number,
    },
    "bothIncreasedTGAndLowHDL(months)": {
        type: Number,
    },
    "highLDL(months)": {
        type: Number,
    },

    "CAD(months)": {
        type: Number,
    },
    "CVD(months)": {
        type: Number,
    },

    // family history of risk factors

    "DM(months)": {
        type: Number,
    },
    "HT(months)": {
        type: Number,
    },
    "dyslipidaemia(months)": {
        type: Number,
    },
    "familyCAD(months)": {
        type: Number,
    },
    "familyCVD(months)": {
        type: Number,
    },
    "fattyLiver(months)": {
        type: Number,
    },

    // investigations
    // hemogram
        'HB(gm/dl)': {
            type: Number,
        },
        'TLC(cells/mm3)': {
            type: Number,
        },
        'plateletCount(1000/mm3)': {
            type: Number,
        },
    // coagulogram
        'PT(sec)': {
            type: Number,
        },
        'PTI(sec)': {
            type: Number,
        },
        'INR(sec)': {
            type: Number,
        },
    // LFT
        'bilirubin(mg/dl)': {
            type: Number,
        },
        'directBilirubin(mg/dl)': {
            type: Number,
        },
        'indirectBilirubin(mg/dl)': {
            type: Number,
        },
        'AST(U/L)': {
            type: Number,
        },
        'ALT(U/L)': {
            type: Number,
        },
        'alkalinePhosphatase(U/L)': {
            type: Number,
        },
        'albumin(gm/dl)': {
            type: Number,
        },
    // RFT
        'urea(mg/dl)': {
            type: Number,
        },
        'creatinine(mg/dl)': {
            type: Number,
        },
    // FIB-4
        'FIB4': {
            type: Number,
        },
    
    // other investigations
        // viral markers
        viralMarkers: {
            type: Boolean,
        },
        HBsAg: {
            type: Boolean,
        },
        antiHCV: {
            type: Boolean,
        },
        HIV: {
            type: Boolean,
        },

        // all markers
        allMarkers: {
            type: Boolean,
        },
        ANA: {
            type: Boolean,
        },
        SMA: {
            type: Boolean,
        },
        LKM: {
            type: Boolean,
        },
        AMA: {
            type: Boolean,
        },

    // Imaging
        // USG Abdomen
        'USGAbdomen': {
            type: Boolean,
        },
        'fattyLiver': {
            type: Boolean,
        },
        'featuresOfCirrhosis': {
            type: Boolean,
        },
        'ascites': {
            type: Boolean,
        },
        'spaceOccupyingLesionsInLiver': {
            type: Boolean,
        },
    
    // Fibroscan/Transient Elastography
        'fibroscan/transientElastography': {
            type: Boolean,
        },
        'fibroscan/transientLSM(kPA)': {
            type: Number,
        },
        'fibroscan/transientCAP(dB/m)': {
            type: Number,
        },
    // MR Elastography
        'MRElastography': {
            type: Boolean,
        },
        'MRElastographyLSM(kPA)': {
            type: Number,
        },
        'MRElastographyCAP(dB/m)': {
            type: Number,
        },

    // management
    lifestyleModifications: {
        type: Boolean,
    },
    lifestyleModificationsAndVitaminE: {
        type: Boolean,
    },
    lifestyleModificationsAndPioglitazone: {
        type: Boolean,
    },
    lifestyleModificationsAndOtherDrugs: {
        type: String,
    }
});
        
const Patient = mongoose.model("Patient", patientSchema);

export default Patient;