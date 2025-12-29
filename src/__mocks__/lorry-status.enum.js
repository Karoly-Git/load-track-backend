const LORRY_STATUS_ENUM = {
    CHECKED_IN: "CHECKED_IN",
    LOADING: "LOADING_IN_PROGRESS",
    LOADED: "LOADED",
    CHECKED_OUT: "CHECKED_OUT"
};

const MATERIAL_NAME_ENUM = {
    // Paper
    MIXED_PAPER_GR1: "Mixed paper G1",
    MIXED_PAPER_GR2: "Mixed paper G2",
    OCC: "OCC",
    NIP: "N&P",
    TETRA: "Tetra",
    // Plastic
    PET_CLEAR: "Pet clear",
    PET_COLOR: "Pet color",
    HDPE_NATURAL: "HDPE natural",
    HDPE_COLOR: "HDPE color",
    MIXED_PLASTICS: "Mixed plastics",
    // Metal
    ALU_CANS: "Alu cans",
    STEEL_CANS: "Steel cans",
    // Glass
    GLASS: "Glass"
};

module.exports = { LORRY_STATUS_ENUM, MATERIAL_NAME_ENUM };
