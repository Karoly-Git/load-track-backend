const swaggerJSDoc = require("swagger-jsdoc");

const options = {
    definition: {
        openapi: "3.0.3",
        info: {
            title: "Lorry Load Track API",
            version: "1.0.0",
            description:
                "Backend API for tracking lorry check-ins, loading workflow, and check-outs."
        },

        servers: [
            {
                url: "http://localhost:8000",
                description: "Local development server"
            }
        ],

        tags: [
            {
                name: "Lorries",
                description: "Lorry tracking and status management"
            }
        ],

        paths: {
            "/lorries": {
                get: {
                    tags: ["Lorries"],
                    summary: "Get all lorries",
                    responses: {
                        200: {
                            description: "List of all lorries",
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "array",
                                        items: { $ref: "#/components/schemas/Lorry" }
                                    }
                                }
                            }
                        },
                        500: {
                            description: "Failed to load data"
                        }
                    }
                }
            },

            "/lorries/add": {
                post: {
                    tags: ["Lorries"],
                    summary: "Add a new lorry",
                    requestBody: {
                        required: true,
                        content: {
                            "application/json": {
                                schema: {
                                    $ref: "#/components/schemas/CreateLorryRequest"
                                }
                            }
                        }
                    },
                    responses: {
                        201: {
                            description: "Lorry successfully created",
                            content: {
                                "application/json": {
                                    schema: { $ref: "#/components/schemas/Lorry" }
                                }
                            }
                        },
                        400: {
                            description: "Missing required field(s)"
                        }
                    }
                }
            },

            "/lorries/{id}": {
                get: {
                    tags: ["Lorries"],
                    summary: "Get lorry by ID",
                    parameters: [{ $ref: "#/components/parameters/LorryId" }],
                    responses: {
                        200: {
                            description: "Lorry details",
                            content: {
                                "application/json": {
                                    schema: { $ref: "#/components/schemas/Lorry" }
                                }
                            }
                        },
                        404: {
                            description: "Lorry not found"
                        }
                    }
                }
            },

            "/lorries/{id}/history": {
                get: {
                    tags: ["Lorries"],
                    summary: "Get lorry status history",
                    parameters: [{ $ref: "#/components/parameters/LorryId" }],
                    responses: {
                        200: {
                            description: "Status history",
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "array",
                                        items: { $ref: "#/components/schemas/StatusHistoryItem" }
                                    }
                                }
                            }
                        },
                        404: {
                            description: "Lorry not found"
                        }
                    }
                }
            },

            "/lorries/{id}/update-status": {
                put: {
                    tags: ["Lorries"],
                    summary: "Update lorry status",
                    parameters: [{ $ref: "#/components/parameters/LorryId" }],
                    requestBody: {
                        required: true,
                        content: {
                            "application/json": {
                                schema: {
                                    $ref: "#/components/schemas/UpdateStatusRequest"
                                }
                            }
                        }
                    },
                    responses: {
                        200: {
                            description: "Lorry status updated",
                            content: {
                                "application/json": {
                                    schema: { $ref: "#/components/schemas/Lorry" }
                                }
                            }
                        },
                        400: {
                            description: "Invalid input"
                        },
                        404: {
                            description: "Lorry not found"
                        },
                        409: {
                            description: "Status already applied"
                        }
                    }
                }
            },

            "/lorries/{id}/update-collection-reference-number": {
                put: {
                    tags: ["Lorries"],
                    summary: "Update collection reference number",
                    parameters: [{ $ref: "#/components/parameters/LorryId" }],
                    requestBody: {
                        required: true,
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    required: ["collectionRefNum"],
                                    properties: {
                                        collectionRefNum: {
                                            type: "string",
                                            example: "ab456xy"
                                        }
                                    }
                                }
                            }
                        }
                    },
                    responses: {
                        200: {
                            description: "Collection reference number updated"
                        },
                        404: {
                            description: "Lorry not found"
                        }
                    }
                }
            },

            "/lorries/{id}/update-registration-number": {
                put: {
                    tags: ["Lorries"],
                    summary: "Update registration number",
                    parameters: [{ $ref: "#/components/parameters/LorryId" }],
                    requestBody: {
                        required: true,
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    required: ["regNum"],
                                    properties: {
                                        regNum: {
                                            type: "string",
                                            example: "lm12abc"
                                        }
                                    }
                                }
                            }
                        }
                    },
                    responses: {
                        200: {
                            description: "Registration number updated"
                        },
                        404: {
                            description: "Lorry not found"
                        }
                    }
                }
            },

            "/lorries/{id}/delete": {
                delete: {
                    tags: ["Lorries"],
                    summary: "Delete a lorry",
                    parameters: [{ $ref: "#/components/parameters/LorryId" }],
                    responses: {
                        200: {
                            description: "Lorry deleted, remaining lorries returned"
                        },
                        404: {
                            description: "Lorry not found"
                        }
                    }
                }
            }
        },

        components: {
            parameters: {
                LorryId: {
                    name: "id",
                    in: "path",
                    required: true,
                    description: "Unique lorry identifier",
                    schema: {
                        type: "string",
                        example: "1"
                    }
                }
            },

            schemas: {
                User: {
                    type: "object",
                    properties: {
                        userId: { type: "string", example: "u-002" },
                        name: { type: "string", example: "Jane Smith" },
                        role: { type: "string", example: "Weighbridge Operator" }
                    }
                },

                StatusHistoryItem: {
                    type: "object",
                    properties: {
                        status: { $ref: "#/components/schemas/LorryStatus" },
                        timestamp: {
                            type: "string",
                            format: "date-time",
                            example: "2025-12-27T09:10:00Z"
                        },
                        updatedBy: { $ref: "#/components/schemas/User" }
                    }
                },

                Lorry: {
                    type: "object",
                    properties: {
                        lorryId: { type: "string", example: "1" },
                        collectionRefNum: { type: "string", example: "vg123sd" },
                        regNum: { type: "string", example: "pz65pwo" },
                        checkedInAt: {
                            type: "string",
                            format: "date-time"
                        },
                        checkedOutAt: {
                            type: ["string", "null"],
                            format: "date-time"
                        },
                        currentStatus: {
                            $ref: "#/components/schemas/LorryStatus"
                        },
                        statusHistory: {
                            type: "array",
                            items: { $ref: "#/components/schemas/StatusHistoryItem" }
                        }
                    }
                },

                LorryStatus: {
                    type: "string",
                    enum: [
                        "CHECKED_IN",
                        "LOADING_IN_PROGRESS",
                        "LOADED",
                        "CHECKED_OUT"
                    ]
                },

                CreateLorryRequest: {
                    type: "object",
                    required: ["collectionRefNum", "regNum", "updatedBy"],
                    properties: {
                        collectionRefNum: {
                            type: "string",
                            example: "ab456xy"
                        },
                        regNum: {
                            type: "string",
                            example: "lm12abc"
                        },
                        updatedBy: {
                            $ref: "#/components/schemas/User"
                        }
                    }
                },

                UpdateStatusRequest: {
                    type: "object",
                    required: ["status", "updatedBy"],
                    properties: {
                        status: {
                            $ref: "#/components/schemas/LorryStatus"
                        },
                        updatedBy: {
                            $ref: "#/components/schemas/User"
                        }
                    }
                }
            }
        }
    },

    // No JSDoc scanning yet
    apis: []
};

module.exports = swaggerJSDoc(options);
