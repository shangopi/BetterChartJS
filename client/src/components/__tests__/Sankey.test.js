import SankeyLogic from '../../components/Chart_Components/Logic/SankeyLogic'

  
describe('Check the Arc Chart Logic', () => {
    it('expect the expected algorithm result to calculated result', () => {
        
        const Sankey_data = [["Colombo","Galle",100],["Colombo","Kandy",20],["Kandy","Galle",120],["Colombo","Rathnapura",50],["Kandy","Rathnapura",89],["Rathnapura",'Kurunegala',300],["Galle","Rathnapura",70],['Kurunegala',"Jaffna",300]];
        const result =[
            {
                "0": {
                    "Colombo": {
                        "destination": [
                            [
                                "Galle",
                                100
                            ],
                            [
                                "Kandy",
                                20
                            ],
                            [
                                "Rathnapura",
                                50
                            ]
                        ],
                        "total": 170,
                        "graph_y_value": 0
                    }
                },
                "1": {
                    "Kandy": {
                        "destination": [
                            [
                                "Galle",
                                120
                            ],
                            [
                                "Rathnapura",
                                89
                            ]
                        ],
                        "total": 209,
                        "graph_y_value": 0
                    }
                },
                "2": {
                    "Galle": {
                        "destination": [
                            [
                                "Rathnapura",
                                70
                            ]
                        ],
                        "total": 70,
                        "graph_y_value": 0
                    }
                },
                "3": {
                    "Rathnapura": {
                        "destination": [
                            [
                                "Kurunegala",
                                300
                            ]
                        ],
                        "total": 300,
                        "graph_y_value": 0
                    }
                },
                "4": {
                    "Kurunegala": {
                        "destination": [
                            [
                                "Jaffna",
                                300
                            ]
                        ],
                        "total": 300,
                        "graph_y_value": 0
                    }
                },
                "5": {
                    "Jaffna": {
                        "destination": [],
                        "total": 300,
                        "graph_y_value": 0
                    }
                }
            },
            170,
            {
                "Colombo": {
                    "index": 0,
                    "left_y": 0,
                    "right_y": 0
                },
                "Kandy": {
                    "index": 1,
                    "left_y": 0,
                    "right_y": 0
                },
                "Galle": {
                    "index": 2,
                    "left_y": 0,
                    "right_y": 0
                },
                "Rathnapura": {
                    "index": 3,
                    "left_y": 0,
                    "right_y": 0
                },
                "Kurunegala": {
                    "index": 4,
                    "left_y": 0,
                    "right_y": 0
                },
                "Jaffna": {
                    "index": 5,
                    "left_y": 0,
                    "right_y": 0
                }
            }
        ];
        const Result_logic = SankeyLogic(Sankey_data)      
        expect(Result_logic).toEqual(result)
    });
    it('expect the expected algorithm result to calculated result', () => {
        
        const Sankey_data =[["Use","Waste collection",2],["Manufacturing","Use",1],["Extraction","Manufacturing",1],["Use","Stock",4],["Stock","Waste collection",2],["Waste collection","Landfill",1],["Waste collection","Incineration",1],["Waste collection","Anaerobic digestion",1],["Waste collection","Composting",1],["Imports","Use",5]];
        const result = [
            {
                "0": {
                    "Extraction": {
                        "destination": [
                            [
                                "Manufacturing",
                                1
                            ]
                        ],
                        "total": 1,
                        "graph_y_value": 0
                    },
                    "Imports": {
                        "destination": [
                            [
                                "Use",
                                5
                            ]
                        ],
                        "total": 5,
                        "graph_y_value": 1
                    }
                },
                "1": {
                    "Manufacturing": {
                        "destination": [
                            [
                                "Use",
                                1
                            ]
                        ],
                        "total": 1,
                        "graph_y_value": 0
                    }
                },
                "2": {
                    "Use": {
                        "destination": [
                            [
                                "Waste collection",
                                2
                            ],
                            [
                                "Stock",
                                4
                            ]
                        ],
                        "total": 6,
                        "graph_y_value": 0
                    }
                },
                "3": {
                    "Stock": {
                        "destination": [
                            [
                                "Waste collection",
                                2
                            ]
                        ],
                        "total": 2,
                        "graph_y_value": 0
                    }
                },
                "4": {
                    "Waste collection": {
                        "destination": [
                            [
                                "Landfill",
                                1
                            ],
                            [
                                "Incineration",
                                1
                            ],
                            [
                                "Anaerobic digestion",
                                1
                            ],
                            [
                                "Composting",
                                1
                            ]
                        ],
                        "total": 4,
                        "graph_y_value": 0
                    }
                },
                "5": {
                    "Landfill": {
                        "destination": [],
                        "total": 1,
                        "graph_y_value": 0
                    },
                    "Incineration": {
                        "destination": [],
                        "total": 1,
                        "graph_y_value": 1
                    },
                    "Anaerobic digestion": {
                        "destination": [],
                        "total": 1,
                        "graph_y_value": 2
                    },
                    "Composting": {
                        "destination": [],
                        "total": 1,
                        "graph_y_value": 3
                    }
                }
            },
            6,
            {
                "Extraction": {
                    "index": 0,
                    "left_y": 0,
                    "right_y": 0
                },
                "Imports": {
                    "index": 0,
                    "left_y": 1,
                    "right_y": 1
                },
                "Manufacturing": {
                    "index": 1,
                    "left_y": 0,
                    "right_y": 0
                },
                "Use": {
                    "index": 2,
                    "left_y": 0,
                    "right_y": 0
                },
                "Stock": {
                    "index": 3,
                    "left_y": 0,
                    "right_y": 0
                },
                "Waste collection": {
                    "index": 4,
                    "left_y": 0,
                    "right_y": 0
                },
                "Landfill": {
                    "index": 5,
                    "left_y": 0,
                    "right_y": 0
                },
                "Incineration": {
                    "index": 5,
                    "left_y": 1,
                    "right_y": 1
                },
                "Anaerobic digestion": {
                    "index": 5,
                    "left_y": 2,
                    "right_y": 2
                },
                "Composting": {
                    "index": 5,
                    "left_y": 3,
                    "right_y": 3
                }
            }
        ];
        const Result_logic = SankeyLogic(Sankey_data)      
        expect(Result_logic).toEqual(result)
    });
    
   
})

 // 