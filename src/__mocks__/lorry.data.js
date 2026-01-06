const LORRY_STATUSES_ENUM = require("../constants/lorry-statuses");
const MATERIAL_NAMES_ENUM = require("../constants/material-names");
const CUSTOMER_NAMES_ENUM = require("../constants/customer-names");

const lorryTrackData = [
    {
        lorryId: "1",
        regNum: "pz65pwo",
        materialName: MATERIAL_NAMES_ENUM.MIXED_PAPER_GR1,
        customerName: CUSTOMER_NAMES_ENUM.PEUTE,
        collectionRefNum: "vg123sd",
        checkedInAt: "2025-12-27T08:40:00Z",
        checkedOutAt: null,
        currentStatus: LORRY_STATUSES_ENUM.CHECKED_IN,
        statusHistory: [
            {
                status: LORRY_STATUSES_ENUM.CHECKED_IN,
                timestamp: "2025-12-27T08:40:00Z",
                updatedBy: { userId: "u-002" },
                comments: [
                    {
                        id: "c-1-001",
                        userId: "wb-002",
                        text: "Lorry arrived on time.",
                        timestamp: "2025-12-27T08:41:00Z"
                    },
                    {
                        id: "c-1-002",
                        userId: "flt-003",
                        text: "I am FLT driver and Lorry driver punched me",
                        timestamp: "2025-12-27T08:55:00Z"
                    },
                    {
                        id: "c-1-003",
                        userId: "sv-004",
                        text: "I am Supervisor and punched the Lorry driver",
                        timestamp: "2025-12-27T08:55:00Z"
                    }
                ]
            }
        ]
    },

    {
        lorryId: "2",
        regNum: "lm12abc",
        materialName: MATERIAL_NAMES_ENUM.PET_CLEAR,
        customerName: CUSTOMER_NAMES_ENUM.MRL,
        collectionRefNum: "ab456xy",
        checkedInAt: "2025-12-27T08:55:00Z",
        checkedOutAt: null,
        currentStatus: LORRY_STATUSES_ENUM.LOADING,
        statusHistory: [
            {
                status: LORRY_STATUSES_ENUM.CHECKED_IN,
                timestamp: "2025-12-27T08:55:00Z",
                updatedBy: { userId: "u-002" },
                comments: [
                    {
                        id: "c-2-001",
                        userId: "u-002",
                        text: "Checked in at weighbridge.",
                        timestamp: "2025-12-27T08:56:00Z"
                    }
                ]
            },
            {
                status: LORRY_STATUSES_ENUM.LOADING,
                timestamp: "2025-12-27T09:10:00Z",
                updatedBy: { userId: "u-003" },
                comments: [
                    {
                        id: "c-2-002",
                        userId: "u-003",
                        text: "Started loading PET clear.",
                        timestamp: "2025-12-27T09:11:00Z"
                    }
                ]
            }
        ]
    },

    {
        lorryId: "3",
        regNum: "qr34def",
        materialName: MATERIAL_NAMES_ENUM.HDPE_NATURAL,
        customerName: CUSTOMER_NAMES_ENUM.VOLKER,
        collectionRefNum: "cd789ef",
        checkedInAt: "2025-12-27T07:50:00Z",
        checkedOutAt: null,
        currentStatus: LORRY_STATUSES_ENUM.LOADED,
        statusHistory: [
            {
                status: LORRY_STATUSES_ENUM.CHECKED_IN,
                timestamp: "2025-12-27T07:50:00Z",
                updatedBy: { userId: "u-002" },
                comments: [
                    {
                        id: "c-3-001",
                        userId: "u-002",
                        text: "I have checked in the lorry.",
                        timestamp: "2025-12-27T07:51:00Z"
                    }
                ]
            },
            {
                status: LORRY_STATUSES_ENUM.LOADING,
                timestamp: "2025-12-27T08:05:00Z",
                updatedBy: { userId: "u-003" },
                comments: [
                    {
                        id: "c-3-002",
                        userId: "u-003",
                        text: "I have started loading the lorry.",
                        timestamp: "2025-12-27T08:06:00Z"
                    }
                ]
            },
            {
                status: LORRY_STATUSES_ENUM.LOADED,
                timestamp: "2025-12-27T09:00:00Z",
                updatedBy: { userId: "u-003" },
                comments: [
                    {
                        id: "c-3-003",
                        userId: "u-003",
                        text: "I have completed loading the lorry.",
                        timestamp: "2025-12-27T09:01:00Z"
                    }
                ]
            }
        ]
    },

    {
        lorryId: "4",
        regNum: "st56ghi",
        materialName: MATERIAL_NAMES_ENUM.GLASS,
        customerName: CUSTOMER_NAMES_ENUM.URM,
        collectionRefNum: "gh012ij",
        checkedInAt: "2025-12-27T06:45:00Z",
        checkedOutAt: "2025-12-27T08:30:00Z",
        currentStatus: LORRY_STATUSES_ENUM.CHECKED_OUT,
        statusHistory: [
            {
                status: LORRY_STATUSES_ENUM.CHECKED_IN,
                timestamp: "2025-12-27T06:45:00Z",
                updatedBy: { userId: "u-002" },
                comments: [
                    {
                        id: "c-4-001",
                        userId: "u-002",
                        text: "Glass lorry checked in.",
                        timestamp: "2025-12-27T06:46:00Z"
                    }
                ]
            },
            {
                status: LORRY_STATUSES_ENUM.LOADING,
                timestamp: "2025-12-27T07:00:00Z",
                updatedBy: { userId: "u-004" },
                comments: [
                    {
                        id: "c-4-002",
                        userId: "u-004",
                        text: "Loading glass containers.",
                        timestamp: "2025-12-27T07:01:00Z"
                    }
                ]
            },
            {
                status: LORRY_STATUSES_ENUM.LOADED,
                timestamp: "2025-12-27T07:55:00Z",
                updatedBy: { userId: "u-004" },
                comments: [
                    {
                        id: "c-4-003",
                        userId: "u-004",
                        text: "Glass fully loaded.",
                        timestamp: "2025-12-27T07:56:00Z"
                    }
                ]
            },
            {
                status: LORRY_STATUSES_ENUM.CHECKED_OUT,
                timestamp: "2025-12-27T08:30:00Z",
                updatedBy: { userId: "u-002" },
                comments: [
                    {
                        id: "c-4-004",
                        userId: "u-002",
                        text: "Lorry checked out.",
                        timestamp: "2025-12-27T08:31:00Z"
                    }
                ]
            }
        ]
    },

    {
        lorryId: "5",
        regNum: "uv78jkl",
        materialName: MATERIAL_NAMES_ENUM.STEEL_CANS,
        customerName: CUSTOMER_NAMES_ENUM.UN_GLOBAL,
        collectionRefNum: "kl345mn",
        checkedInAt: "2025-12-27T09:20:00Z",
        checkedOutAt: null,
        currentStatus: LORRY_STATUSES_ENUM.CHECKED_IN,
        statusHistory: [
            {
                status: LORRY_STATUSES_ENUM.CHECKED_IN,
                timestamp: "2025-12-27T09:20:00Z",
                updatedBy: { userId: "u-002" },
                comments: [
                    {
                        id: "c-5-001",
                        userId: "u-002",
                        text: "Metal lorry checked in.",
                        timestamp: "2025-12-27T09:21:00Z"
                    }
                ]
            }
        ]
    },

    {
        lorryId: "6",
        regNum: "pz65pwo",
        materialName: MATERIAL_NAMES_ENUM.MIXED_PAPER_GR1,
        customerName: CUSTOMER_NAMES_ENUM.PEUTE,
        collectionRefNum: "vg123sd",
        checkedInAt: "2025-12-27T08:40:00Z",
        checkedOutAt: null,
        currentStatus: LORRY_STATUSES_ENUM.CHECKED_IN,
        statusHistory: [
            {
                status: LORRY_STATUSES_ENUM.CHECKED_IN,
                timestamp: "2025-12-27T08:40:00Z",
                updatedBy: { userId: "u-002" },
                comments: []
            }
        ]
    }
];

module.exports = lorryTrackData;
