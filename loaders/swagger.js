import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

export default async function swaggerLoader({ app }) {
  const options = {
    definition: {
      openapi: "3.0.0",
      info: {
        title: "MercurySols Website Backend",
        contact: {},
        version: "1.0",
      },
      servers: [
        {
          url: "https://mercurysole.herokuapp.com/",
          variables: {},
        },
      ],
      paths: {
        //Technologies
        "/technologies": {
          post: {
            tags: ["Technology"],
            summary: "Add",
            operationId: "Add",
            parameters: [],
            requestBody: {
              content: {
                "application/x-www-form-urlencoded": {
                  encoding: {},
                  schema: {
                    required: ["name", "imageUrl", "service_id", "color"],
                    type: "object",
                    properties: {
                      name: {
                        type: "string",
                        example: "pagetwo",
                      },
                      imageUrl: {
                        type: "file",
                      },
                      service_id: {
                        type: "string",
                        example: "asdf",
                      },
                      color: {
                        type: "string",
                        example: "two",
                      },
                    },
                  },
                },
              },
              required: false,
            },
            responses: {
              "200": {
                description: "",
                headers: {},
              },
            },
            deprecated: false,
            servers: [
              {
                url: "https://mercurysole.herokuapp.com/",
                variables: {},
              },
            ],
          },
          get: {
            tags: ["Technology"],
            summary: "technologies",
            operationId: "GetAllTechnologies",
            parameters: [],
            responses: {
              "200": {
                description: "",
                headers: {},
              },
            },
            deprecated: false,
            servers: [
              {
                url: "https://mercurysole.herokuapp.com/",
                variables: {},
              },
            ],
          },
        },
        
        
        "/technologies/{id}": {
          patch: {
            tags: ["Technology"],
            summary: "Update",
            operationId: "Update",
            parameters: [
              {
                name: "id",
                in: "path",
                description: "",
                required: true,
                style: "simple",
                schema: {
                  type: "string",
                  example: "6343d2efb1d95db29eef3daa",
                },
              },
            ],
            requestBody: {
              content: {
                "application/x-www-form-urlencoded": {
                  encoding: {},
                  schema: {
                    required: ["name", "imageUrl", "color", "service_id"],
                    type: "object",
                    properties: {
                      name: {
                        type: "string",
                        example: "asdf",
                      },
                      imageUrl: {
                        type: "file",
                      },
                      color: {
                        type: "string",
                        example: "asdf",
                      },
                      service_id: {
                        type: "string",
                        example: "test",
                      },
                    },
                  },
                },
              },
              required: false,
            },
            responses: {
              "200": {
                description: "",
                headers: {},
              },
            },
            deprecated: false,
            servers: [
              {
                url: "https://mercurysole.herokuapp.com/technologies",
                variables: {},
              },
            ],
          },
          get: {
            tags: ["Technology"],
            summary: "Get By ID",
            operationId: "GetByID",
            parameters: [
              {
                name: "id",
                in: "path",
                description: "",
                required: true,
                style: "simple",
                schema: {
                  type: "string",
                  example: "6340137d9996cd973403c170",
                },
              },
            ],
            responses: {
              "200": {
                description: "",
                headers: {},
              },
            },
            deprecated: false,
            servers: [
              {
                url: "https://mercurysole.herokuapp.com/",
                variables: {},
              },
            ],
          },
          delete: {
            tags: ["Technology"],
            summary: "Delete",
            operationId: "Delete",
            parameters: [
              {
                name: "id",
                in: "path",
                description: "",
                required: true,
                style: "simple",
                schema: {
                  type: "string",
                  example: "6343d2efb1d95db29eef3daa",
                },
              },
            ],
            responses: {
              "200": {
                description: "",
                headers: {},
              },
            },
            deprecated: false,
            // servers: [
            //   {
            //     url: "https://technologies",
            //     variables: {},
            //   },
            // ],
          },
        },
        //Pages
        "/{pagename}": {
          get: {
            tags: ["Pages"],
            summary: "getbyname",
            operationId: "getbyname",
            parameters: [
              {
                name: "pagename",
                in: "path",
                description: "",
                required: true,
                style: "simple",
                schema: {
                  type: "string",
                  example: "pageone",
                },
              },
            ],
             content: {
                "application/x-www-form-urlencoded": {
                  encoding: {},
                  schema: {
                    required: ["pagename", ],
                    type: "object",
                    properties: {
                      pagename: {
                        type: "string",
                        example: "pagetwo",
                      },
                      
                    },
                  },
                },
              },
            responses: {
              "200": {
                description: "",
                headers: {},
              },
            },
            deprecated: false,
            servers: [
              {
                url: "https://mercurysole.herokuapp.com/page",
                variables: {},
              },
            ],
          },
        },
        "/": {
          post: {
            tags: ["Pages"],
            summary: "Add",
            operationId: "Add",
            parameters: [],
            requestBody: {
              content: {
                "application/x-www-form-urlencoded": {
                  encoding: {},
                  schema: {
                    required: ["pageName"],
                    type: "object",
                    properties: {
                      pageName: {
                        type: "string",
                        example: "pagetwo",
                      },
                    },
                  },
                },
              },
              required: false,
            },
            responses: {
              "200": {
                description: "",
                headers: {},
              },
            },
            deprecated: false,
            servers: [
              {
                url: "https://mercurysole.herokuapp.com/page",
                variables: {},
              },
            ],
          },
          // Services
        },
        "/services": {
          post: {
            tags: ["Services"],
            summary: "Add",
            operationId: "Add",
            parameters: [],
            requestBody: {
              content: {
                "application/x-www-form-urlencoded": {
                  encoding: {},
                  schema: {
                    required: ["name", "imageUrl", "discription", "color"],
                    type: "object",
                    properties: {
                      name: {
                        type: "string",
                        example: "pagetwo",
                      },
                      imageUrl: {
                        type: "file",
                      },
                      discription: {
                        type: "string",
                        example: "asdf",
                      },
                      color: {
                        type: "string",
                        example: "two",
                      },
                    },
                  },
                },
              },
              required: false,
            },
            responses: {
              "200": {
                description: "",
                headers: {},
              },
            },
            deprecated: false,
            servers: [
              {
                url: "https://mercurysole.herokuapp.com/",
                variables: {},
              },
            ],
          },
          get: {
            tags: ["Services"],
            summary: "Get All",
            operationId: "GetAllTechnologies",
            parameters: [],
            responses: {
              "200": {
                description: "",
                headers: {},
              },
            },
            deprecated: false,
            servers: [
              {
                url: "https://mercurysole.herokuapp.com/",
                variables: {},
              },
            ],
          },
        },
         "/services/technologies": {
         
          get: {
            tags: ["Services"],
            summary: "Get All",
            operationId: "GetAllTechnologies",
            parameters: [],
            responses: {
              "200": {
                description: "",
                headers: {},
              },
            },
            deprecated: false,
            servers: [
              {
                url: "https://mercurysole.herokuapp.com/",
                variables: {},
              },
            ],
          },
        },

        "/services/{id}": {
          patch: {
            tags: ["Services"],
            summary: "Update",
            operationId: "Update",
            parameters: [
              {
                name: "id",
                in: "path",
                description: "",
                required: true,
                style: "simple",
                schema: {
                  type: "string",
                  example: "6343d2efb1d95db29eef3daa",
                },
              },
            ],
            requestBody: {
              content: {
                "application/x-www-form-urlencoded": {
                  encoding: {},
                  schema: {
                    required: ["name", "imageUrl", "color", "description"],
                    type: "object",
                    properties: {
                      name: {
                        type: "string",
                        example: "asdf",
                      },
                      imageUrl: {
                        type: "file",
                      },
                      color: {
                        type: "string",
                        example: "asdf",
                      },
                      discription: {
                        type: "string",
                        example: "test",
                      },
                    },
                  },
                },
              },
              required: false,
            },
            responses: {
              "200": {
                description: "",
                headers: {},
              },
            },
            deprecated: false,
            servers: [
              {
                url: "https://mercurysole.herokuapp.com/services",
                variables: {},
              },
            ],
          },
          get: {
            tags: ["Services"],
            summary: "Get By ID",
            operationId: "GetByID",
            parameters: [
              {
                name: "id",
                in: "path",
                description: "",
                required: true,
                style: "simple",
                schema: {
                  type: "string",
                  example: "6340137d9996cd973403c170",
                },
              },
            ],
            responses: {
              "200": {
                description: "",
                headers: {},
              },
            },
            deprecated: false,
            servers: [
              {
                url: "https://mercurysole.herokuapp.com/",
                variables: {},
              },
            ],
          },
          delete: {
            tags: ["Services"],
            summary: "Delete",
            operationId: "Delete",
            parameters: [
              {
                name: "id",
                in: "path",
                description: "",
                required: true,
                style: "simple",
                schema: {
                  type: "string",
                  example: "6343d2efb1d95db29eef3daa",
                },
              },
            ],
            responses: {
              "200": {
                description: "",
                headers: {},
              },
            },
            deprecated: false,
            // servers: [
            //   {
            //     url: "https://technologies",
            //     variables: {},
            //   },
            // ],
          },
        },
        //Job card
        "/jobcard": {
          post: {
            tags: ["jobcard"],
            summary: "Add",
            operationId: "Add",
            parameters: [],
            requestBody: {
              content: {
                "application/x-www-form-urlencoded": {
                  encoding: {},
                  schema: {
                    required: [
                      "name",
                      "skills",
                      "description",
                      "experience",
                      "location",
                      "color",
                    ],
                    type: "object",
                    properties: {
                      name: {
                        type: "string",
                        example: "Azam Ali",
                      },
                      skills: {
                        type: "string",
                        example: "asdf",
                      },
                      description: {
                        type: "string",
                        example: "asdf",
                      },
                      color: {
                        type: "string",
                        example: "red",
                      },
                      experience: {
                        type: "string",
                        example: "3 Year",
                      },
                      location: {
                        type: "string",
                        example: "RYK",
                      },
                    },
                  },
                },
              },
              required: false,
            },
            responses: {
              "200": {
                description: "",
                headers: {},
              },
            },
            deprecated: false,
            servers: [
              {
                url: "https://mercurysole.herokuapp.com/",
                variables: {},
              },
            ],
          },
          get: {
            tags: ["jobcard"],
            summary: "Get All",
            operationId: "GetAlljobcard",
            parameters: [],
            responses: {
              "200": {
                description: "",
                headers: {},
              },
            },
            deprecated: false,
            servers: [
              {
                url: "https://mercurysole.herokuapp.com/",
                variables: {},
              },
            ],
          },
        },
        "/jobcard/{id}": {
          patch: {
            tags: ["jobcard"],
            summary: "Update",
            operationId: "Update",
            parameters: [
              {
                name: "id",
                in: "path",
                description: "",
                required: true,
                style: "simple",
                schema: {
                  type: "string",
                  example: "6343d2efb1d95db29eef3daa",
                },
              },
            ],
            requestBody: {
              content: {
                "application/x-www-form-urlencoded": {
                  encoding: {},
                  schema: {
                    required: [
                      "name",
                      "skills",
                      "description",
                      "experience",
                      "location",
                      "color",
                    ],
                    type: "object",
                    properties: {
                      name: {
                        type: "string",
                        example: "Azam Ali",
                      },
                      skills: {
                        type: "string",
                        example: "asdf",
                      },
                      description: {
                        type: "string",
                        example: "asdf",
                      },
                      color: {
                        type: "string",
                        example: "red",
                      },
                      experience: {
                        type: "string",
                        example: "3 Year",
                      },
                      location: {
                        type: "string",
                        example: "RYK",
                      },
                    },
                  },
                },
              },
              required: false,
            },
            responses: {
              "200": {
                description: "",
                headers: {},
              },
            },
            deprecated: false,
            servers: [
              {
                url: "https://mercurysole.herokuapp.com/",
                variables: {},
              },
            ],
          },
          get: {
            tags: ["jobcard"],
            summary: "Get By ID",
            operationId: "GetByID",
            parameters: [
              {
                name: "id",
                in: "path",
                description: "",
                required: true,
                style: "simple",
                schema: {
                  type: "string",
                  example: "6340137d9996cd973403c170",
                },
              },
            ],
            responses: {
              "200": {
                description: "",
                headers: {},
              },
            },
            deprecated: false,
            servers: [
              {
                url: "https://mercurysole.herokuapp.com/",
                variables: {},
              },
            ],
          },
          delete: {
            tags: ["jobcard"],
            summary: "Delete",
            operationId: "Delete",
            parameters: [
              {
                name: "id",
                in: "path",
                description: "",
                required: true,
                style: "simple",
                schema: {
                  type: "string",
                  example: "6343d2efb1d95db29eef3daa",
                },
              },
            ],
            responses: {
              "200": {
                description: "",
                headers: {},
              },
            },
            deprecated: false,
            servers: [
              {
                url: "https://mercurysole.herokuapp.com/",
                variables: {},
              },
            ],
          },
        },

        //Projects
        "/projects": {
          post: {
            tags: ["Projects"],
            summary: "Add",
            operationId: "Add",
            parameters: [],
            requestBody: {
              content: {
                "application/x-www-form-urlencoded": {
                  encoding: {},
                  schema: {
                    required: [
                      "name",
                      "catagories_id",
                      "imageUrl",
                      "discription",
                      "color",
                    ],
                    type: "object",
                    properties: {
                      name: {
                        type: "string",
                        example: "Azam Ali",
                      },
                      catagories_id: {
                        type: "string",
                        example: "asdf",
                      },
                      description: {
                        type: "string",
                        example: "asdf",
                      },
                      color: {
                        type: "string",
                        example: "red",
                      },

                      imageUrl: {
                        type: "string",
                        example: "RYK",
                      },
                    },
                  },
                },
              },
              required: false,
            },
            responses: {
              "200": {
                description: "",
                headers: {},
              },
            },
            deprecated: false,
            servers: [
              {
                url: "https://mercurysole.herokuapp.com/",
                variables: {},
              },
            ],
          },
          get: {
            tags: ["Projects"],
            summary: "Get All",
            operationId: "GetAllprojects",
            parameters: [],
            responses: {
              "200": {
                description: "",
                headers: {},
              },
            },
            deprecated: false,
            servers: [
              {
                url: "https://mercurysole.herokuapp.com/",
                variables: {},
              },
            ],
          },
        },
        "/projects/{id}": {
          patch: {
            tags: ["Projects"],
            summary: "Update",
            operationId: "Update",
            parameters: [
              {
                name: "id",
                in: "path",
                description: "",
                required: true,
                style: "simple",
                schema: {
                  type: "string",
                  example: "6343d2efb1d95db29eef3daa",
                },
              },
            ],
            requestBody: {
              content: {
                "application/x-www-form-urlencoded": {
                  encoding: {},
                  schema: {
                    required: [
                      "name",
                      "catagories_id",
                      "imageUrl",
                      "discription",
                      "color",
                    ],
                    type: "object",
                    properties: {
                      name: {
                        type: "string",
                        example: "Azam Ali",
                      },
                      catagories_id: {
                        type: "string",
                        example: "asdf",
                      },
                      description: {
                        type: "string",
                        example: "asdf",
                      },
                      color: {
                        type: "string",
                        example: "red",
                      },

                      imageUrl: {
                        type: "string",
                        example: "RYK",
                      },
                    },
                  },
                },
              },
              required: false,
            },
            responses: {
              "200": {
                description: "",
                headers: {},
              },
            },
            deprecated: false,
            servers: [
              {
                url: "https://mercurysole.herokuapp.com/",
                variables: {},
              },
            ],
          },
          get: {
            tags: ["Projects"],
            summary: "Get By ID",
            operationId: "GetByID",
            parameters: [
              {
                name: "id",
                in: "path",
                description: "",
                required: true,
                style: "simple",
                schema: {
                  type: "string",
                  example: "6340137d9996cd973403c170",
                },
              },
            ],
            responses: {
              "200": {
                description: "",
                headers: {},
              },
            },
            deprecated: false,
            servers: [
              {
                url: "https://mercurysole.herokuapp.com/",
                variables: {},
              },
            ],
          },
          delete: {
            tags: ["Projects"],
            summary: "Delete",
            operationId: "Delete",
            parameters: [
              {
                name: "id",
                in: "path",
                description: "",
                required: true,
                style: "simple",
                schema: {
                  type: "string",
                  example: "6343d2efb1d95db29eef3daa",
                },
              },
            ],
            responses: {
              "200": {
                description: "",
                headers: {},
              },
            },
            deprecated: false,
            servers: [
              {
                url: "https://mercurysole.herokuapp.com/",
                variables: {},
              },
            ],
          },
        },

        "/catagories": {
          post: {
            tags: ["categories"],
            summary: "Add",
            operationId: "Add",
            parameters: [],
            requestBody: {
              content: {
                "application/x-www-form-urlencoded": {
                  encoding: {},
                  schema: {
                    required: ["name"],
                    type: "object",
                    properties: {
                      name: {
                        type: "string",
                        example: "Javascrit",
                      },
                    },
                  },
                },
              },
              required: false,
            },
            responses: {
              "200": {
                description: "",
                headers: {},
              },
            },
            deprecated: false,
            servers: [
              {
                url: "https://mercurysole.herokuapp.com/",
                variables: {},
              },
            ],
          },
          get: {
            tags: ["categories"],
            summary: "Get All",
            operationId: "GetAllcategories",
            parameters: [],
            responses: {
              "200": {
                description: "",
                headers: {},
              },
            },
            deprecated: false,
            servers: [
              {
                url: "https://mercurysole.herokuapp.com/",
                variables: {},
              },
            ],
          },
        },
        "/catagories/{id}": {
          patch: {
            tags: ["categories"],
            summary: "Update",
            operationId: "Update",
            parameters: [
              {
                name: "id",
                in: "path",
                description: "",
                required: true,
                style: "simple",
                schema: {
                  type: "string",
                  example: "6343d2efb1d95db29eef3daa",
                },
              },
            ],
            requestBody: {
              content: {
                "application/x-www-form-urlencoded": {
                  encoding: {},
                  schema: {
                    required: ["name"],
                    type: "object",
                    properties: {
                      name: {
                        type: "string",
                        example: "Azam Ali",
                      },
                    },
                  },
                },
              },
              required: false,
            },
            responses: {
              "200": {
                description: "",
                headers: {},
              },
            },
            deprecated: false,
            servers: [
              {
                url: "https://mercurysole.herokuapp.com/",
                variables: {},
              },
            ],
          },
          get: {
            tags: ["categories"],
            summary: "Get By ID",
            operationId: "GetByID",
            parameters: [
              {
                name: "id",
                in: "path",
                description: "",
                required: true,
                style: "simple",
                schema: {
                  type: "string",
                  example: "6340137d9996cd973403c170",
                },
              },
            ],
            responses: {
              "200": {
                description: "",
                headers: {},
              },
            },
            deprecated: false,
            servers: [
              {
                url: "https://mercurysole.herokuapp.com/",
                variables: {},
              },
            ],
          },
          delete: {
            tags: ["categories"],
            summary: "Delete",
            operationId: "Delete",
            parameters: [
              {
                name: "id",
                in: "path",
                description: "",
                required: true,
                style: "simple",
                schema: {
                  type: "string",
                  example: "6343d2efb1d95db29eef3daa",
                },
              },
            ],
            responses: {
              "200": {
                description: "",
                headers: {},
              },
            },
            deprecated: false,
            servers: [
              {
                url: "https://mercurysole.herokuapp.com/",
                variables: {},
              },
            ],
          },
        },
         "/iptv": {
          post: {
            tags: ["Iptv"],
            summary: "Add",
            operationId: "Add",
            parameters: [],
            requestBody: {
              content: {
                "application/x-www-form-urlencoded": {
                  encoding: {},
                  schema: {
                    required: ["name", "imageUrl", "discription", "color"],
                    type: "object",
                    properties: {
                      name: {
                        type: "string",
                        example: "pagetwo",
                      },
                      imageUrl: {
                        type: "string",
                      },
                      discription: {
                        type: "string",
                        example: "asdf",
                      },
                      color: {
                        type: "string",
                        example: "two",
                      },
                    },
                  },
                },
              },
              required: false,
            },
            responses: {
              "200": {
                description: "",
                headers: {},
              },
            },
            deprecated: false,
            servers: [
              {
                url: "https://mercurysole.herokuapp.com/",
                variables: {},
              },
            ],
          },
          get: {
            tags: ["Iptv"],
            summary: "Iptv",
            operationId: "GetAllIptvs",
            parameters: [],
            responses: {
              "200": {
                description: "",
                headers: {},
              },
            },
            deprecated: false,
            servers: [
              {
                url: "https://mercurysole.herokuapp.com/",
                variables: {},
              },
            ],
          },
        },
        "/iptv/{id}": {
          patch: {
            tags: ["Iptv"],
            summary: "Update",
            operationId: "Update",
            parameters: [
              {
                name: "id",
                in: "path",
                description: "",
                required: true,
                style: "simple",
                schema: {
                  type: "string",
                  example: "6343d2efb1d95db29eef3daa",
                },
              },
            ],
            requestBody: {
              content: {
                "application/x-www-form-urlencoded": {
                  encoding: {},
                  schema: {
                    required: ["name", "imageUrl", "color", "description"],
                    type: "object",
                    properties: {
                      name: {
                        type: "string",
                        example: "asdf",
                      },
                      imageUrl: {
                        type: "string",
                      },
                      color: {
                        type: "string",
                        example: "asdf",
                      },
                      service_id: {
                        type: "string",
                        example: "test",
                      },
                    },
                  },
                },
              },
              required: false,
            },
            responses: {
              "200": {
                description: "",
                headers: {},
              },
            },
            deprecated: false,
            servers: [
              {
                url: "https://mercurysole.herokuapp.com/iptv",
                variables: {},
              },
            ],
          },
          get: {
            tags: ["Iptv"],
            summary: "Get By ID",
            operationId: "GetByID",
            parameters: [
              {
                name: "id",
                in: "path",
                description: "",
                required: true,
                style: "simple",
                schema: {
                  type: "string",
                  example: "6340137d9996cd973403c170",
                },
              },
            ],
            responses: {
              "200": {
                description: "",
                headers: {},
              },
            },
            deprecated: false,
            servers: [
              {
                url: "https://mercurysole.herokuapp.com/",
                variables: {},
              },
            ],
          },
          delete: {
            tags: ["Iptv"],
            summary: "Delete",
            operationId: "Delete",
            parameters: [
              {
                name: "id",
                in: "path",
                description: "",
                required: true,
                style: "simple",
                schema: {
                  type: "string",
                  example: "6343d2efb1d95db29eef3daa",
                },
              },
            ],
            responses: {
              "200": {
                description: "",
                headers: {},
              },
            },
            deprecated: false,
            // servers: [
            //   {
            //     url: "https://technologies",
            //     variables: {},
            //   },
            // ],
          },
        },
          "/career": {
          post: {
            tags: ["career"],
            summary: "Add",
            operationId: "Add",
            parameters: [],
            requestBody: {
              content: {
                "application/x-www-form-urlencoded": {
                  encoding: {},
                  schema: {
                    required: ["name", "imageUrl", "discription", "color"],
                    type: "object",
                    properties: {
                      name: {
                        type: "string",
                        example: "pagetwo",
                      },
                      imageUrl: {
                        type: "string",
                      },
                      discription: {
                        type: "string",
                        example: "asdf",
                      },
                      color: {
                        type: "string",
                        example: "two",
                      },
                    },
                  },
                },
              },
              required: false,
            },
            responses: {
              "200": {
                description: "",
                headers: {},
              },
            },
            deprecated: false,
            servers: [
              {
                url: "https://mercurysole.herokuapp.com/",
                variables: {},
              },
            ],
          },
          get: {
            tags: ["career"],
            summary: "Career",
            operationId: "GetAllcareer",
            parameters: [],
            responses: {
              "200": {
                description: "",
                headers: {},
              },
            },
            deprecated: false,
            servers: [
              {
                url: "https://mercurysole.herokuapp.com/",
                variables: {},
              },
            ],
          },
        },
        "/career/{id}": {
          patch: {
            tags: ["career"],
            summary: "Update",
            operationId: "Update",
            parameters: [
              {
                name: "id",
                in: "path",
                description: "",
                required: true,
                style: "simple",
                schema: {
                  type: "string",
                  example: "6343d2efb1d95db29eef3daa",
                },
              },
            ],
            requestBody: {
              content: {
                "application/x-www-form-urlencoded": {
                  encoding: {},
                  schema: {
                    required: ["name", "imageUrl", "color", "description"],
                    type: "object",
                    properties: {
                      name: {
                        type: "string",
                        example: "asdf",
                      },
                      imageUrl: {
                        type: "string",
                      },
                      color: {
                        type: "string",
                        example: "asdf",
                      },
                      service_id: {
                        type: "string",
                        example: "test",
                      },
                    },
                  },
                },
              },
              required: false,
            },
            responses: {
              "200": {
                description: "",
                headers: {},
              },
            },
            deprecated: false,
            servers: [
              {
                url: "https://mercurysole.herokuapp.com/iptv",
                variables: {},
              },
            ],
          },
          get: {
            tags: ["career"],
            summary: "Get By ID",
            operationId: "GetByID",
            parameters: [
              {
                name: "id",
                in: "path",
                description: "",
                required: true,
                style: "simple",
                schema: {
                  type: "string",
                  example: "6340137d9996cd973403c170",
                },
              },
            ],
            responses: {
              "200": {
                description: "",
                headers: {},
              },
            },
            deprecated: false,
            servers: [
              {
                url: "https://mercurysole.herokuapp.com/",
                variables: {},
              },
            ],
          },
          delete: {
            tags: ["career"],
            summary: "Delete",
            operationId: "Delete",
            parameters: [
              {
                name: "id",
                in: "path",
                description: "",
                required: true,
                style: "simple",
                schema: {
                  type: "string",
                  example: "6343d2efb1d95db29eef3daa",
                },
              },
            ],
            responses: {
              "200": {
                description: "",
                headers: {},
              },
            },
            deprecated: false,
            // servers: [
            //   {
            //     url: "https://technologies",
            //     variables: {},
            //   },
            // ],
          },
        },
          "/applicant": {
          post: {
            tags: ["Applicant"],
            summary: "Add",
            operationId: "Add",
            parameters: [],
            requestBody: {
              content: {
                "application/x-www-form-urlencoded": {
                  encoding: {},
                  schema: {
                    required: ["firstName", "lastName", "roll", "email","phone", ],
                    type: "object",
                    properties: {
                      firstName: {
                        type: "string",
                        example: "Azam",
                      },
                      lastName: {
                        type: "string",
                        example: "Ali",
                      },
                      roll: {
                        type: "string",
                        example: "Job applicant",
                      },
                      email: {
                        type: "string",
                        example: "aa@gmail.com",
                      },
                       phone: {
                        type: "string",
                        example: "03327387008",
                      },
                       message: {
                        type: "string",
                        example: "two",
                      },
                       companyName: {
                        type: "string",
                        example: "two",
                      },
                        currentWorking: {
                        type: "string",
                        example: "two",
                      }, 
                       noticePeriod: {
                        type: "string",
                        example: "two",
                      },
                      lastworkingDay: {
                        type: "string",
                        example: "two",
                      },
                      discription: {
                        type: "string",
                        example: "two",
                      },
                       imageUrl: {
                        type: "file",
                        
                      },
                    },
                  },
                },
              },
              required: false,
            },
            responses: {
              "200": {
                description: "",
                headers: {},
              },
            },
            deprecated: false,
            servers: [
              {
                url: "https://mercurysole.herokuapp.com/",
                variables: {},
              },
            ],
          },
          get: {
            tags: ["Applicant"],
            summary: "Applicant",
            operationId: "GetAllcareer",
            parameters: [],
            responses: {
              "200": {
                description: "",
                headers: {},
              },
            },
            deprecated: false,
            servers: [
              {
                url: "https://mercurysole.herokuapp.com/",
                variables: {},
              },
            ],
          },
        },
        "/applicant/{id}": {
          patch: {
            tags: ["Applicant"],
            summary: "Update",
            operationId: "Update",
            parameters: [
              {
                name: "id",
                in: "path",
                description: "",
                required: true,
                style: "simple",
                schema: {
                  type: "string",
                  example: "6343d2efb1d95db29eef3daa",
                },
              },
            ],
            requestBody: {
              content: {
                "application/x-www-form-urlencoded": {
                  encoding: {},
                  schema: {
                    required: ["firstName", "lastName", "roll", "email","phone",],
                    type: "object",
                    properties: {
                      firstName: {
                        type: "string",
                        example: "pagetwo",
                      },
                      lastName: {
                        type: "string",
                      },
                      roll: {
                        type: "string",
                        example: "asdf",
                      },
                      email: {
                        type: "string",
                        example: "two",
                      },
                       phone: {
                        type: "string",
                        example: "two",
                      },
                    },
                  },
                },
              },
              required: false,
            },
            responses: {
              "200": {
                description: "",
                headers: {},
              },
            },
            deprecated: false,
            servers: [
              {
                url: "https://mercurysole.herokuapp.com/iptv",
                variables: {},
              },
            ],
          },
          get: {
            tags: ["Applicant"],
            summary: "Get By ID",
            operationId: "GetByID",
            parameters: [
              {
                name: "id",
                in: "path",
                description: "",
                required: true,
                style: "simple",
                schema: {
                  type: "string",
                  example: "6340137d9996cd973403c170",
                },
              },
            ],
            responses: {
              "200": {
                description: "",
                headers: {},
              },
            },
            deprecated: false,
            servers: [
              {
                url: "https://mercurysole.herokuapp.com/",
                variables: {},
              },
            ],
          },
          delete: {
            tags: ["Applicant"],
            summary: "Delete",
            operationId: "Delete",
            parameters: [
              {
                name: "id",
                in: "path",
                description: "",
                required: true,
                style: "simple",
                schema: {
                  type: "string",
                  example: "6343d2efb1d95db29eef3daa",
                },
              },
            ],
            responses: {
              "200": {
                description: "",
                headers: {},
              },
            },
            deprecated: false,
            // servers: [
            //   {
            //     url: "https://technologies",
            //     variables: {},
            //   },
            // ],
          },
        },
      },
      tags: [
        {
          name: "Pages",
        },
        {
          name: "Technology",
        },
        {
          name: "Services",
        },
        {
          name: "jobcard",
        },
        {
          name: "Projects",
        },
        {
          name: "categories",
        },
        {
          name: "Iptv",
        },
        {
          name: "career",
        },
        {
          name: "Applicant",
        },
      ],
    },
    apis: ["./api/*.js"],
  };

  const specs = swaggerJsdoc(options);
  app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(specs, { explorer: true })
  );

  return app;
}
