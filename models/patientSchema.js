import mongoose from "mongoose";
const { Schema } = mongoose;

const patientSchema = new Schema({
    // subjectNo is a unique identifier and primary key for the patient
    subjectNo: {
        type: String,
        required: true,
        unique: true,
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
        type: Number,
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
    // store the number of days the patient has been under risk factors
    historyOfRiskFactors: {
        type: Boolean,
    },
    "overweight(days)": {
        type: Number, 
    },
    "obesity(days)": {
        type: Number, 
    },
    "diabetes(days)": {
        type: Number,
    },
    "hypertension(days)": {
        type: Number,
    },

    "increasedTG(days)": {
        type: Number,
    },
    "lowHDL(days)": {
        type: Number,
    },
    "bothIncreasedTGAndLowHDL(days)": {
        type: Number,
    },
    "highHDL(days)": {
        type: Number,
    },

    "CAD(days)": {
        type: Number,
    },
    "CVD(days)": {
        type: Number,
    },

    // family history of risk factors

    "DM(days)": {
        type: Number,
    },
    "HT(days)": {
        type: Number,
    },
    "dyslipidaemia(days)": {
        type: Number,
    },
    "familyCAD(days)": {
        type: Number,
    },
    "familyCVD(days)": {
        type: Number,
    },
    "fattyLiver(days)": {
        type: Number,
    },

    // investigations
    // hemogram
        'HB(gm/dl)': {
            type: Number,
        },
        'TLC(cells/mm3': {
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
    
    // Fibroscan/Transient Elastography
        'fibroscan/trainsientElastography': {
            type: Boolean,
        },
        'fibroscan/transientLSM(kPA)': {
            type: Number,
        },
        'fibroscan/transientCAP(dB/m)': {
            type: Number,
        },
    // other Elastography
        'otherElastography': {
            type: Boolean,
        },
        'otherElastographyLSM(kPA)': {
            type: Number,
        },
        'otherElastographyCAP(dB/m)': {
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