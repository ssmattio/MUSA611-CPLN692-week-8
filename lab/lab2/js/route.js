route = [
  {
  "routes": [
    {
      "weight_name": "routability",
      "legs": [
        {
          "summary": "East York Street, American Street",
          "steps": [
            {
              "intersections": [
                {
                  "bearings": [
                    326
                  ],
                  "location": [
                    -75.12384,
                    39.9781
                  ],
                  "entry": [
                    true
                  ],
                  "geometry_index": 0,
                  "out": 0
                },
                {
                  "entry": [
                    true,
                    false,
                    false,
                    true
                  ],
                  "out": 3,
                  "location": [
                    -75.124191,
                    39.9785
                  ],
                  "geometry_index": 1,
                  "in": 1,
                  "bearings": [
                    56,
                    146,
                    237,
                    326
                  ],
                  "duration": 6
                }
              ],
              "name": "East Boston Street",
              "distance": 178.723,
              "maneuver": {
                "bearing_after": 326,
                "type": "depart",
                "bearing_before": 0,
                "location": [
                  -75.12384,
                  39.9781
                ],
                "instruction": "Head northwest on East Boston Street"
              },
              "weight": 77.127,
              "geometry": {
                "coordinates": [
                  [
                    -75.12384,
                    39.9781
                  ],
                  [
                    -75.124191,
                    39.9785
                  ],
                  [
                    -75.125015,
                    39.979427
                  ]
                ],
                "type": "LineString"
              },
              "duration": 77.127,
              "mode": "driving",
              "driving_side": "right"
            },
            {
              "intersections": [
                {
                  "entry": [
                    false,
                    false,
                    true,
                    true
                  ],
                  "out": 2,
                  "location": [
                    -75.125015,
                    39.979427
                  ],
                  "geometry_index": 2,
                  "in": 1,
                  "bearings": [
                    56,
                    146,
                    236,
                    327
                  ],
                  "duration": 7.5
                }
              ],
              "name": "Memphis Street",
              "distance": 60,
              "maneuver": {
                "type": "turn",
                "location": [
                  -75.125015,
                  39.979427
                ],
                "bearing_before": 326,
                "modifier": "left",
                "bearing_after": 236,
                "instruction": "Turn left onto Memphis Street"
              },
              "weight": 21.9,
              "geometry": {
                "coordinates": [
                  [
                    -75.125015,
                    39.979427
                  ],
                  [
                    -75.125595,
                    39.979122
                  ]
                ],
                "type": "LineString"
              },
              "duration": 21.9,
              "mode": "driving",
              "driving_side": "right"
            },
            {
              "intersections": [
                {
                  "entry": [
                    false,
                    true,
                    true,
                    true
                  ],
                  "out": 3,
                  "location": [
                    -75.125595,
                    39.979122
                  ],
                  "geometry_index": 3,
                  "in": 0,
                  "bearings": [
                    56,
                    144,
                    237,
                    327
                  ],
                  "duration": 4
                },
                {
                  "entry": [
                    true,
                    false,
                    false,
                    true
                  ],
                  "out": 3,
                  "location": [
                    -75.126175,
                    39.979794
                  ],
                  "geometry_index": 4,
                  "in": 1,
                  "bearings": [
                    55,
                    147,
                    237,
                    326
                  ],
                  "duration": 4
                },
                {
                  "entry": [
                    false,
                    false,
                    true,
                    true
                  ],
                  "out": 3,
                  "location": [
                    -75.12674,
                    39.980431
                  ],
                  "geometry_index": 5,
                  "in": 1,
                  "bearings": [
                    56,
                    146,
                    235,
                    325
                  ],
                  "duration": 4
                },
                {
                  "entry": [
                    false,
                    true,
                    true
                  ],
                  "out": 2,
                  "location": [
                    -75.12719,
                    39.980927
                  ],
                  "geometry_index": 6,
                  "in": 0,
                  "bearings": [
                    145,
                    238,
                    326
                  ],
                  "duration": 1
                },
                {
                  "entry": [
                    true,
                    true,
                    false,
                    true,
                    true,
                    true
                  ],
                  "out": 5,
                  "location": [
                    -75.127602,
                    39.981388
                  ],
                  "geometry_index": 7,
                  "in": 2,
                  "bearings": [
                    35,
                    65,
                    146,
                    220,
                    239,
                    326
                  ],
                  "duration": 8
                },
                {
                  "entry": [
                    true,
                    false,
                    true
                  ],
                  "out": 2,
                  "location": [
                    -75.128181,
                    39.982056
                  ],
                  "geometry_index": 8,
                  "in": 1,
                  "bearings": [
                    56,
                    146,
                    326
                  ],
                  "duration": 1.5
                },
                {
                  "entry": [
                    true,
                    false,
                    false,
                    true
                  ],
                  "out": 3,
                  "location": [
                    -75.128555,
                    39.982479
                  ],
                  "geometry_index": 9,
                  "in": 1,
                  "bearings": [
                    56,
                    146,
                    235,
                    326
                  ],
                  "duration": 6
                },
                {
                  "entry": [
                    false,
                    false,
                    true,
                    true
                  ],
                  "out": 3,
                  "location": [
                    -75.129356,
                    39.983383
                  ],
                  "geometry_index": 10,
                  "in": 1,
                  "bearings": [
                    55,
                    146,
                    237,
                    326
                  ],
                  "duration": 6
                },
                {
                  "entry": [
                    true,
                    false,
                    false,
                    true
                  ],
                  "out": 3,
                  "location": [
                    -75.130211,
                    39.984348
                  ],
                  "geometry_index": 11,
                  "in": 1,
                  "bearings": [
                    56,
                    146,
                    237,
                    326
                  ],
                  "duration": 6
                },
                {
                  "entry": [
                    true,
                    false,
                    false,
                    true
                  ],
                  "out": 3,
                  "location": [
                    -75.131073,
                    39.985332
                  ],
                  "geometry_index": 13,
                  "in": 1,
                  "bearings": [
                    56,
                    146,
                    237,
                    326
                  ],
                  "duration": 6
                },
                {
                  "entry": [
                    false,
                    false,
                    true
                  ],
                  "out": 2,
                  "location": [
                    -75.131721,
                    39.986057
                  ],
                  "geometry_index": 14,
                  "in": 0,
                  "bearings": [
                    146,
                    235,
                    326
                  ],
                  "duration": 1.5
                },
                {
                  "entry": [
                    false,
                    true
                  ],
                  "out": 1,
                  "location": [
                    -75.131805,
                    39.986153
                  ],
                  "geometry_index": 15,
                  "in": 0,
                  "bearings": [
                    146,
                    344
                  ],
                  "duration": 7.875
                }
              ],
              "name": "East York Street",
              "distance": 962,
              "maneuver": {
                "type": "turn",
                "location": [
                  -75.125595,
                  39.979122
                ],
                "bearing_before": 236,
                "modifier": "right",
                "bearing_after": 327,
                "instruction": "Turn right onto East York Street"
              },
              "weight": 238.674,
              "geometry": {
                "coordinates": [
                  [
                    -75.125595,
                    39.979122
                  ],
                  [
                    -75.126175,
                    39.979794
                  ],
                  [
                    -75.12674,
                    39.980431
                  ],
                  [
                    -75.12719,
                    39.980927
                  ],
                  [
                    -75.127602,
                    39.981388
                  ],
                  [
                    -75.128181,
                    39.982056
                  ],
                  [
                    -75.128555,
                    39.982479
                  ],
                  [
                    -75.129356,
                    39.983383
                  ],
                  [
                    -75.130211,
                    39.984348
                  ],
                  [
                    -75.130241,
                    39.984386
                  ],
                  [
                    -75.131073,
                    39.985332
                  ],
                  [
                    -75.131721,
                    39.986057
                  ],
                  [
                    -75.131805,
                    39.986153
                  ],
                  [
                    -75.131859,
                    39.986294
                  ]
                ],
                "type": "LineString"
              },
              "duration": 238.674,
              "mode": "driving",
              "driving_side": "right"
            },
            {
              "intersections": [
                {
                  "entry": [
                    true,
                    true,
                    false,
                    true,
                    true
                  ],
                  "out": 4,
                  "location": [
                    -75.131859,
                    39.986294
                  ],
                  "geometry_index": 16,
                  "in": 2,
                  "bearings": [
                    6,
                    39,
                    164,
                    196,
                    286
                  ],
                  "duration": 28
                },
                {
                  "entry": [
                    false,
                    true
                  ],
                  "out": 1,
                  "location": [
                    -75.131981,
                    39.98632
                  ],
                  "geometry_index": 17,
                  "in": 0,
                  "bearings": [
                    106,
                    281
                  ],
                  "duration": 1
                },
                {
                  "entry": [
                    false,
                    false,
                    true
                  ],
                  "out": 2,
                  "location": [
                    -75.132408,
                    39.986382
                  ],
                  "geometry_index": 18,
                  "in": 0,
                  "bearings": [
                    101,
                    189,
                    280
                  ],
                  "duration": 1
                },
                {
                  "entry": [
                    true,
                    false,
                    false,
                    true
                  ],
                  "out": 3,
                  "location": [
                    -75.132935,
                    39.98645
                  ],
                  "geometry_index": 19,
                  "in": 1,
                  "bearings": [
                    8,
                    100,
                    189,
                    279
                  ],
                  "duration": 4
                },
                {
                  "entry": [
                    true,
                    false,
                    false,
                    true
                  ],
                  "out": 3,
                  "location": [
                    -75.1334,
                    39.986507
                  ],
                  "geometry_index": 20,
                  "in": 1,
                  "bearings": [
                    7,
                    99,
                    189,
                    280
                  ],
                  "duration": 4
                },
                {
                  "entry": [
                    false,
                    false,
                    true,
                    true
                  ],
                  "out": 3,
                  "location": [
                    -75.133873,
                    39.986568
                  ],
                  "geometry_index": 21,
                  "in": 1,
                  "bearings": [
                    8,
                    100,
                    189,
                    279
                  ],
                  "duration": 4
                },
                {
                  "entry": [
                    true,
                    false,
                    false,
                    true
                  ],
                  "out": 3,
                  "location": [
                    -75.134331,
                    39.986626
                  ],
                  "geometry_index": 22,
                  "in": 1,
                  "bearings": [
                    7,
                    99,
                    184,
                    280
                  ],
                  "duration": 4
                },
                {
                  "entry": [
                    true,
                    false,
                    false,
                    true
                  ],
                  "out": 3,
                  "location": [
                    -75.134789,
                    39.986691
                  ],
                  "geometry_index": 23,
                  "in": 1,
                  "bearings": [
                    8,
                    100,
                    190,
                    279
                  ],
                  "duration": 4
                },
                {
                  "entry": [
                    true,
                    false,
                    false,
                    true
                  ],
                  "out": 3,
                  "location": [
                    -75.135307,
                    39.986755
                  ],
                  "geometry_index": 24,
                  "in": 1,
                  "bearings": [
                    8,
                    99,
                    189,
                    279
                  ],
                  "duration": 4
                },
                {
                  "entry": [
                    false,
                    false,
                    true,
                    true
                  ],
                  "out": 3,
                  "location": [
                    -75.135841,
                    39.98682
                  ],
                  "geometry_index": 25,
                  "in": 1,
                  "bearings": [
                    8,
                    99,
                    190,
                    280
                  ],
                  "duration": 6
                },
                {
                  "entry": [
                    false,
                    false,
                    true,
                    true
                  ],
                  "out": 3,
                  "location": [
                    -75.136444,
                    39.9869
                  ],
                  "geometry_index": 26,
                  "in": 1,
                  "bearings": [
                    8,
                    100,
                    189,
                    279
                  ],
                  "duration": 4
                }
              ],
              "name": "West York Street",
              "distance": 458,
              "maneuver": {
                "type": "continue",
                "location": [
                  -75.131859,
                  39.986294
                ],
                "bearing_before": 344,
                "modifier": "left",
                "bearing_after": 286,
                "instruction": "Turn left to stay on West York Street"
              },
              "weight": 138.84,
              "geometry": {
                "coordinates": [
                  [
                    -75.131859,
                    39.986294
                  ],
                  [
                    -75.131981,
                    39.98632
                  ],
                  [
                    -75.132408,
                    39.986382
                  ],
                  [
                    -75.132935,
                    39.98645
                  ],
                  [
                    -75.1334,
                    39.986507
                  ],
                  [
                    -75.133873,
                    39.986568
                  ],
                  [
                    -75.134331,
                    39.986626
                  ],
                  [
                    -75.134789,
                    39.986691
                  ],
                  [
                    -75.135307,
                    39.986755
                  ],
                  [
                    -75.135841,
                    39.98682
                  ],
                  [
                    -75.136444,
                    39.9869
                  ],
                  [
                    -75.137138,
                    39.986988
                  ]
                ],
                "type": "LineString"
              },
              "duration": 138.84,
              "mode": "driving",
              "driving_side": "right"
            },
            {
              "intersections": [
                {
                  "entry": [
                    true,
                    false,
                    true,
                    true
                  ],
                  "out": 2,
                  "location": [
                    -75.137138,
                    39.986988
                  ],
                  "geometry_index": 27,
                  "in": 1,
                  "bearings": [
                    8,
                    99,
                    189,
                    280
                  ],
                  "duration": 7.5
                },
                {
                  "entry": [
                    false,
                    true,
                    true,
                    false
                  ],
                  "out": 2,
                  "location": [
                    -75.137459,
                    39.985493
                  ],
                  "geometry_index": 28,
                  "in": 0,
                  "bearings": [
                    9,
                    100,
                    190,
                    279
                  ],
                  "duration": 4
                },
                {
                  "entry": [
                    false,
                    true,
                    true
                  ],
                  "out": 1,
                  "location": [
                    -75.137512,
                    39.985256
                  ],
                  "geometry_index": 29,
                  "in": 0,
                  "bearings": [
                    10,
                    189,
                    282
                  ],
                  "duration": 1
                },
                {
                  "entry": [
                    false,
                    true,
                    true
                  ],
                  "out": 1,
                  "location": [
                    -75.137611,
                    39.984779
                  ],
                  "geometry_index": 30,
                  "in": 0,
                  "bearings": [
                    9,
                    189,
                    277
                  ],
                  "duration": 1
                },
                {
                  "entry": [
                    false,
                    false,
                    true,
                    true
                  ],
                  "out": 2,
                  "location": [
                    -75.137802,
                    39.983902
                  ],
                  "geometry_index": 31,
                  "in": 0,
                  "bearings": [
                    9,
                    100,
                    189,
                    280
                  ],
                  "duration": 4
                }
              ],
              "name": "American Street",
              "distance": 467,
              "maneuver": {
                "type": "turn",
                "location": [
                  -75.137138,
                  39.986988
                ],
                "bearing_before": 279,
                "modifier": "left",
                "bearing_after": 189,
                "instruction": "Turn left onto American Street"
              },
              "weight": 76.945,
              "geometry": {
                "coordinates": [
                  [
                    -75.137138,
                    39.986988
                  ],
                  [
                    -75.137459,
                    39.985493
                  ],
                  [
                    -75.137512,
                    39.985256
                  ],
                  [
                    -75.137611,
                    39.984779
                  ],
                  [
                    -75.137802,
                    39.983902
                  ],
                  [
                    -75.138023,
                    39.982853
                  ]
                ],
                "type": "LineString"
              },
              "duration": 76.945,
              "mode": "driving",
              "driving_side": "right"
            },
            {
              "intersections": [
                {
                  "entry": [
                    false,
                    true,
                    true
                  ],
                  "out": 2,
                  "location": [
                    -75.138023,
                    39.982853
                  ],
                  "geometry_index": 32,
                  "in": 0,
                  "bearings": [
                    9,
                    189,
                    280
                  ],
                  "duration": 3
                }
              ],
              "name": "",
              "distance": 32,
              "maneuver": {
                "type": "turn",
                "location": [
                  -75.138023,
                  39.982853
                ],
                "bearing_before": 189,
                "modifier": "right",
                "bearing_after": 280,
                "instruction": "Turn right"
              },
              "weight": 9.063,
              "geometry": {
                "coordinates": [
                  [
                    -75.138023,
                    39.982853
                  ],
                  [
                    -75.13839,
                    39.982903
                  ]
                ],
                "type": "LineString"
              },
              "duration": 9.063,
              "mode": "driving",
              "driving_side": "right"
            },
            {
              "intersections": [
                {
                  "entry": [
                    true,
                    false,
                    true
                  ],
                  "out": 2,
                  "location": [
                    -75.13839,
                    39.982903
                  ],
                  "geometry_index": 33,
                  "in": 1,
                  "bearings": [
                    10,
                    100,
                    190
                  ],
                  "duration": 10
                },
                {
                  "entry": [
                    true,
                    false,
                    true
                  ],
                  "out": 2,
                  "location": [
                    -75.13868,
                    39.98278
                  ],
                  "geometry_index": 35,
                  "in": 1,
                  "bearings": [
                    8,
                    100,
                    279
                  ],
                  "duration": 1.5
                },
                {
                  "entry": [
                    true,
                    false,
                    true
                  ],
                  "out": 2,
                  "location": [
                    -75.138893,
                    39.982807
                  ],
                  "geometry_index": 36,
                  "in": 1,
                  "bearings": [
                    8,
                    99,
                    280
                  ],
                  "duration": 1.5
                }
              ],
              "name": "",
              "distance": 107.972,
              "maneuver": {
                "type": "turn",
                "location": [
                  -75.13839,
                  39.982903
                ],
                "bearing_before": 280,
                "modifier": "left",
                "bearing_after": 190,
                "instruction": "Turn left"
              },
              "weight": 35.521,
              "geometry": {
                "coordinates": [
                  [
                    -75.13839,
                    39.982903
                  ],
                  [
                    -75.138428,
                    39.982746
                  ],
                  [
                    -75.13868,
                    39.98278
                  ],
                  [
                    -75.138893,
                    39.982807
                  ],
                  [
                    -75.139069,
                    39.98283
                  ],
                  [
                    -75.139008,
                    39.983139
                  ]
                ],
                "type": "LineString"
              },
              "duration": 35.521,
              "mode": "driving",
              "driving_side": "right"
            },
            {
              "intersections": [
                {
                  "bearings": [
                    187
                  ],
                  "location": [
                    -75.139008,
                    39.983139
                  ],
                  "entry": [
                    true
                  ],
                  "geometry_index": 38,
                  "in": 0
                }
              ],
              "name": "",
              "distance": 0,
              "maneuver": {
                "type": "arrive",
                "location": [
                  -75.139008,
                  39.983139
                ],
                "bearing_before": 7,
                "modifier": "right",
                "bearing_after": 0,
                "instruction": "You have arrived at your destination, on the right"
              },
              "weight": 0,
              "geometry": {
                "coordinates": [
                  [
                    -75.139008,
                    39.983139
                  ],
                  [
                    -75.139008,
                    39.983139
                  ]
                ],
                "type": "LineString"
              },
              "duration": 0,
              "mode": "driving",
              "driving_side": "right"
            }
          ],
          "distance": 2265.695,
          "duration": 598.07,
          "weight": 598.07
        }
      ],
      "geometry": {
        "coordinates": [
          [
            -75.12384,
            39.9781
          ],
          [
            -75.125015,
            39.979427
          ],
          [
            -75.125595,
            39.979122
          ],
          [
            -75.131859,
            39.986294
          ],
          [
            -75.137138,
            39.986988
          ],
          [
            -75.138023,
            39.982853
          ],
          [
            -75.13839,
            39.982903
          ],
          [
            -75.138428,
            39.982746
          ],
          [
            -75.139069,
            39.98283
          ],
          [
            -75.139008,
            39.983139
          ]
        ],
        "type": "LineString"
      },
      "distance": 2265.695,
      "duration": 598.07,
      "weight": 598.07
    },
    {
      "weight_name": "routability",
      "legs": [
        {
          "summary": "East York Street, West Norris Street",
          "steps": [
            {
              "intersections": [
                {
                  "bearings": [
                    326
                  ],
                  "location": [
                    -75.12384,
                    39.9781
                  ],
                  "entry": [
                    true
                  ],
                  "geometry_index": 0,
                  "out": 0
                },
                {
                  "entry": [
                    true,
                    false,
                    false,
                    true
                  ],
                  "out": 3,
                  "location": [
                    -75.124191,
                    39.9785
                  ],
                  "geometry_index": 1,
                  "in": 1,
                  "bearings": [
                    56,
                    146,
                    237,
                    326
                  ],
                  "duration": 6
                }
              ],
              "name": "East Boston Street",
              "distance": 178.723,
              "maneuver": {
                "bearing_after": 326,
                "type": "depart",
                "bearing_before": 0,
                "location": [
                  -75.12384,
                  39.9781
                ],
                "instruction": "Head northwest on East Boston Street"
              },
              "weight": 77.127,
              "geometry": {
                "coordinates": [
                  [
                    -75.12384,
                    39.9781
                  ],
                  [
                    -75.124191,
                    39.9785
                  ],
                  [
                    -75.125015,
                    39.979427
                  ]
                ],
                "type": "LineString"
              },
              "duration": 77.127,
              "mode": "driving",
              "driving_side": "right"
            },
            {
              "intersections": [
                {
                  "entry": [
                    false,
                    false,
                    true,
                    true
                  ],
                  "out": 2,
                  "location": [
                    -75.125015,
                    39.979427
                  ],
                  "geometry_index": 2,
                  "in": 1,
                  "bearings": [
                    56,
                    146,
                    236,
                    327
                  ],
                  "duration": 7.5
                }
              ],
              "name": "Memphis Street",
              "distance": 60,
              "maneuver": {
                "type": "turn",
                "location": [
                  -75.125015,
                  39.979427
                ],
                "bearing_before": 326,
                "modifier": "left",
                "bearing_after": 236,
                "instruction": "Turn left onto Memphis Street"
              },
              "weight": 21.9,
              "geometry": {
                "coordinates": [
                  [
                    -75.125015,
                    39.979427
                  ],
                  [
                    -75.125595,
                    39.979122
                  ]
                ],
                "type": "LineString"
              },
              "duration": 21.9,
              "mode": "driving",
              "driving_side": "right"
            },
            {
              "intersections": [
                {
                  "entry": [
                    false,
                    true,
                    true,
                    true
                  ],
                  "out": 3,
                  "location": [
                    -75.125595,
                    39.979122
                  ],
                  "geometry_index": 3,
                  "in": 0,
                  "bearings": [
                    56,
                    144,
                    237,
                    327
                  ],
                  "duration": 4
                },
                {
                  "entry": [
                    true,
                    false,
                    false,
                    true
                  ],
                  "out": 3,
                  "location": [
                    -75.126175,
                    39.979794
                  ],
                  "geometry_index": 4,
                  "in": 1,
                  "bearings": [
                    55,
                    147,
                    237,
                    326
                  ],
                  "duration": 4
                },
                {
                  "entry": [
                    false,
                    false,
                    true,
                    true
                  ],
                  "out": 3,
                  "location": [
                    -75.12674,
                    39.980431
                  ],
                  "geometry_index": 5,
                  "in": 1,
                  "bearings": [
                    56,
                    146,
                    235,
                    325
                  ],
                  "duration": 4
                },
                {
                  "entry": [
                    false,
                    true,
                    true
                  ],
                  "out": 2,
                  "location": [
                    -75.12719,
                    39.980927
                  ],
                  "geometry_index": 6,
                  "in": 0,
                  "bearings": [
                    145,
                    238,
                    326
                  ],
                  "duration": 1
                },
                {
                  "entry": [
                    true,
                    true,
                    false,
                    true,
                    true,
                    true
                  ],
                  "out": 5,
                  "location": [
                    -75.127602,
                    39.981388
                  ],
                  "geometry_index": 7,
                  "in": 2,
                  "bearings": [
                    35,
                    65,
                    146,
                    220,
                    239,
                    326
                  ],
                  "duration": 8
                },
                {
                  "entry": [
                    true,
                    false,
                    true
                  ],
                  "out": 2,
                  "location": [
                    -75.128181,
                    39.982056
                  ],
                  "geometry_index": 8,
                  "in": 1,
                  "bearings": [
                    56,
                    146,
                    326
                  ],
                  "duration": 1.5
                },
                {
                  "entry": [
                    true,
                    false,
                    false,
                    true
                  ],
                  "out": 3,
                  "location": [
                    -75.128555,
                    39.982479
                  ],
                  "geometry_index": 9,
                  "in": 1,
                  "bearings": [
                    56,
                    146,
                    235,
                    326
                  ],
                  "duration": 6
                }
              ],
              "name": "East York Street",
              "distance": 573,
              "maneuver": {
                "type": "turn",
                "location": [
                  -75.125595,
                  39.979122
                ],
                "bearing_before": 236,
                "modifier": "right",
                "bearing_after": 327,
                "instruction": "Turn right onto East York Street"
              },
              "weight": 134.625,
              "geometry": {
                "coordinates": [
                  [
                    -75.125595,
                    39.979122
                  ],
                  [
                    -75.126175,
                    39.979794
                  ],
                  [
                    -75.12674,
                    39.980431
                  ],
                  [
                    -75.12719,
                    39.980927
                  ],
                  [
                    -75.127602,
                    39.981388
                  ],
                  [
                    -75.128181,
                    39.982056
                  ],
                  [
                    -75.128555,
                    39.982479
                  ],
                  [
                    -75.129356,
                    39.983383
                  ]
                ],
                "type": "LineString"
              },
              "duration": 134.625,
              "mode": "driving",
              "driving_side": "right"
            },
            {
              "intersections": [
                {
                  "entry": [
                    false,
                    false,
                    true,
                    true
                  ],
                  "out": 2,
                  "location": [
                    -75.129356,
                    39.983383
                  ],
                  "geometry_index": 10,
                  "in": 1,
                  "bearings": [
                    55,
                    146,
                    236,
                    327
                  ],
                  "duration": 7.5
                },
                {
                  "entry": [
                    false,
                    false,
                    true,
                    true
                  ],
                  "out": 2,
                  "location": [
                    -75.129951,
                    39.983074
                  ],
                  "geometry_index": 11,
                  "in": 0,
                  "bearings": [
                    56,
                    146,
                    236,
                    327
                  ],
                  "duration": 6
                },
                {
                  "entry": [
                    false,
                    true,
                    true,
                    false
                  ],
                  "out": 2,
                  "location": [
                    -75.130539,
                    39.982773
                  ],
                  "geometry_index": 12,
                  "in": 0,
                  "bearings": [
                    56,
                    146,
                    235,
                    327
                  ],
                  "duration": 6
                },
                {
                  "entry": [
                    false,
                    true,
                    true,
                    false
                  ],
                  "out": 2,
                  "location": [
                    -75.131134,
                    39.982456
                  ],
                  "geometry_index": 13,
                  "in": 0,
                  "bearings": [
                    55,
                    146,
                    236,
                    327
                  ],
                  "duration": 6
                },
                {
                  "entry": [
                    false,
                    false,
                    true,
                    true
                  ],
                  "out": 2,
                  "location": [
                    -75.131729,
                    39.982143
                  ],
                  "geometry_index": 14,
                  "in": 0,
                  "bearings": [
                    56,
                    146,
                    236,
                    327
                  ],
                  "duration": 6
                },
                {
                  "entry": [
                    false,
                    true,
                    true
                  ],
                  "out": 2,
                  "location": [
                    -75.13221,
                    39.981892
                  ],
                  "geometry_index": 15,
                  "in": 0,
                  "bearings": [
                    56,
                    146,
                    236
                  ],
                  "duration": 1.5
                }
              ],
              "name": "Coral Street",
              "distance": 339,
              "maneuver": {
                "type": "turn",
                "location": [
                  -75.129356,
                  39.983383
                ],
                "bearing_before": 326,
                "modifier": "left",
                "bearing_after": 236,
                "instruction": "Turn left onto Coral Street"
              },
              "weight": 105.942,
              "geometry": {
                "coordinates": [
                  [
                    -75.129356,
                    39.983383
                  ],
                  [
                    -75.129951,
                    39.983074
                  ],
                  [
                    -75.130539,
                    39.982773
                  ],
                  [
                    -75.131134,
                    39.982456
                  ],
                  [
                    -75.131729,
                    39.982143
                  ],
                  [
                    -75.13221,
                    39.981892
                  ],
                  [
                    -75.132637,
                    39.98167
                  ]
                ],
                "type": "LineString"
              },
              "duration": 105.942,
              "mode": "driving",
              "driving_side": "right"
            },
            {
              "intersections": [
                {
                  "entry": [
                    false,
                    false,
                    true
                  ],
                  "out": 2,
                  "location": [
                    -75.132637,
                    39.98167
                  ],
                  "geometry_index": 16,
                  "in": 0,
                  "bearings": [
                    56,
                    146,
                    249
                  ],
                  "duration": 2.25
                }
              ],
              "name": "West Diamond Street",
              "distance": 23,
              "maneuver": {
                "type": "turn",
                "location": [
                  -75.132637,
                  39.98167
                ],
                "bearing_before": 236,
                "modifier": "slight right",
                "bearing_after": 249,
                "instruction": "Make a slight right onto West Diamond Street"
              },
              "weight": 5.01,
              "geometry": {
                "coordinates": [
                  [
                    -75.132637,
                    39.98167
                  ],
                  [
                    -75.132805,
                    39.981621
                  ],
                  [
                    -75.132889,
                    39.981632
                  ]
                ],
                "type": "LineString"
              },
              "duration": 5.01,
              "mode": "driving",
              "driving_side": "right"
            },
            {
              "intersections": [
                {
                  "entry": [
                    true,
                    false,
                    true,
                    false
                  ],
                  "out": 2,
                  "location": [
                    -75.132889,
                    39.981632
                  ],
                  "geometry_index": 18,
                  "in": 1,
                  "bearings": [
                    8,
                    83,
                    189,
                    279
                  ],
                  "duration": 10
                }
              ],
              "name": "North Front Street",
              "distance": 167,
              "maneuver": {
                "type": "turn",
                "location": [
                  -75.132889,
                  39.981632
                ],
                "bearing_before": 263,
                "modifier": "left",
                "bearing_after": 189,
                "instruction": "Turn left onto North Front Street"
              },
              "weight": 36.139,
              "geometry": {
                "coordinates": [
                  [
                    -75.132889,
                    39.981632
                  ],
                  [
                    -75.133209,
                    39.980148
                  ]
                ],
                "type": "LineString"
              },
              "duration": 36.139,
              "mode": "driving",
              "driving_side": "right"
            },
            {
              "intersections": [
                {
                  "entry": [
                    false,
                    true,
                    true,
                    true,
                    true
                  ],
                  "out": 4,
                  "location": [
                    -75.133209,
                    39.980148
                  ],
                  "geometry_index": 19,
                  "in": 0,
                  "bearings": [
                    9,
                    92,
                    108,
                    189,
                    280
                  ],
                  "duration": 3
                },
                {
                  "entry": [
                    true,
                    false,
                    false,
                    true
                  ],
                  "out": 3,
                  "location": [
                    -75.133728,
                    39.980217
                  ],
                  "geometry_index": 20,
                  "in": 1,
                  "bearings": [
                    8,
                    100,
                    189,
                    279
                  ],
                  "duration": 6
                },
                {
                  "entry": [
                    true,
                    false,
                    false,
                    true
                  ],
                  "out": 3,
                  "location": [
                    -75.134254,
                    39.980282
                  ],
                  "geometry_index": 21,
                  "in": 1,
                  "bearings": [
                    8,
                    99,
                    189,
                    280
                  ],
                  "duration": 6
                },
                {
                  "entry": [
                    false,
                    false,
                    true,
                    true
                  ],
                  "out": 3,
                  "location": [
                    -75.135185,
                    39.980404
                  ],
                  "geometry_index": 22,
                  "in": 1,
                  "bearings": [
                    8,
                    100,
                    189,
                    279
                  ],
                  "duration": 6
                },
                {
                  "entry": [
                    false,
                    true,
                    true
                  ],
                  "out": 2,
                  "location": [
                    -75.135643,
                    39.980461
                  ],
                  "geometry_index": 23,
                  "in": 0,
                  "bearings": [
                    99,
                    189,
                    279
                  ],
                  "duration": 1.5
                },
                {
                  "entry": [
                    true,
                    false,
                    false,
                    true
                  ],
                  "out": 3,
                  "location": [
                    -75.136101,
                    39.980518
                  ],
                  "geometry_index": 24,
                  "in": 1,
                  "bearings": [
                    8,
                    99,
                    189,
                    280
                  ],
                  "duration": 6
                },
                {
                  "entry": [
                    true,
                    false,
                    false,
                    true
                  ],
                  "out": 3,
                  "location": [
                    -75.136627,
                    39.980587
                  ],
                  "geometry_index": 25,
                  "in": 1,
                  "bearings": [
                    8,
                    100,
                    189,
                    279
                  ],
                  "duration": 6
                },
                {
                  "entry": [
                    false,
                    false,
                    true,
                    true
                  ],
                  "out": 3,
                  "location": [
                    -75.137169,
                    39.980656
                  ],
                  "geometry_index": 26,
                  "in": 1,
                  "bearings": [
                    8,
                    99,
                    189,
                    279
                  ],
                  "duration": 8
                },
                {
                  "entry": [
                    false,
                    false,
                    true,
                    true
                  ],
                  "out": 3,
                  "location": [
                    -75.137764,
                    39.980732
                  ],
                  "geometry_index": 27,
                  "in": 1,
                  "bearings": [
                    10,
                    99,
                    189,
                    279
                  ],
                  "duration": 6
                }
              ],
              "name": "West Norris Street",
              "distance": 454,
              "maneuver": {
                "type": "turn",
                "location": [
                  -75.133209,
                  39.980148
                ],
                "bearing_before": 189,
                "modifier": "right",
                "bearing_after": 280,
                "instruction": "Turn right onto West Norris Street"
              },
              "weight": 138.07,
              "geometry": {
                "coordinates": [
                  [
                    -75.133209,
                    39.980148
                  ],
                  [
                    -75.133728,
                    39.980217
                  ],
                  [
                    -75.134254,
                    39.980282
                  ],
                  [
                    -75.135185,
                    39.980404
                  ],
                  [
                    -75.135643,
                    39.980461
                  ],
                  [
                    -75.136101,
                    39.980518
                  ],
                  [
                    -75.136627,
                    39.980587
                  ],
                  [
                    -75.137169,
                    39.980656
                  ],
                  [
                    -75.137764,
                    39.980732
                  ],
                  [
                    -75.138451,
                    39.98082
                  ]
                ],
                "type": "LineString"
              },
              "duration": 138.07,
              "mode": "driving",
              "driving_side": "right"
            },
            {
              "intersections": [
                {
                  "entry": [
                    true,
                    false,
                    true,
                    true
                  ],
                  "out": 0,
                  "location": [
                    -75.138451,
                    39.98082
                  ],
                  "geometry_index": 28,
                  "in": 1,
                  "bearings": [
                    9,
                    99,
                    189,
                    279
                  ],
                  "duration": 4
                },
                {
                  "entry": [
                    true,
                    true,
                    false,
                    false
                  ],
                  "out": 0,
                  "location": [
                    -75.138138,
                    39.982311
                  ],
                  "geometry_index": 29,
                  "in": 2,
                  "bearings": [
                    9,
                    99,
                    189,
                    280
                  ],
                  "duration": 4
                }
              ],
              "name": "North American Street",
              "distance": 229,
              "maneuver": {
                "type": "turn",
                "location": [
                  -75.138451,
                  39.98082
                ],
                "bearing_before": 279,
                "modifier": "right",
                "bearing_after": 9,
                "instruction": "Turn right onto North American Street"
              },
              "weight": 39.184,
              "geometry": {
                "coordinates": [
                  [
                    -75.138451,
                    39.98082
                  ],
                  [
                    -75.138138,
                    39.982311
                  ],
                  [
                    -75.138023,
                    39.982853
                  ]
                ],
                "type": "LineString"
              },
              "duration": 39.184,
              "mode": "driving",
              "driving_side": "right"
            },
            {
              "intersections": [
                {
                  "entry": [
                    true,
                    false,
                    true
                  ],
                  "out": 2,
                  "location": [
                    -75.138023,
                    39.982853
                  ],
                  "geometry_index": 30,
                  "in": 1,
                  "bearings": [
                    8,
                    189,
                    280
                  ],
                  "duration": 10
                }
              ],
              "name": "",
              "distance": 32,
              "maneuver": {
                "type": "turn",
                "location": [
                  -75.138023,
                  39.982853
                ],
                "bearing_before": 9,
                "modifier": "left",
                "bearing_after": 280,
                "instruction": "Turn left"
              },
              "weight": 16.063,
              "geometry": {
                "coordinates": [
                  [
                    -75.138023,
                    39.982853
                  ],
                  [
                    -75.13839,
                    39.982903
                  ]
                ],
                "type": "LineString"
              },
              "duration": 16.063,
              "mode": "driving",
              "driving_side": "right"
            },
            {
              "intersections": [
                {
                  "entry": [
                    true,
                    false,
                    true
                  ],
                  "out": 2,
                  "location": [
                    -75.13839,
                    39.982903
                  ],
                  "geometry_index": 31,
                  "in": 1,
                  "bearings": [
                    10,
                    100,
                    190
                  ],
                  "duration": 10
                },
                {
                  "entry": [
                    true,
                    false,
                    true
                  ],
                  "out": 2,
                  "location": [
                    -75.13868,
                    39.98278
                  ],
                  "geometry_index": 33,
                  "in": 1,
                  "bearings": [
                    8,
                    100,
                    279
                  ],
                  "duration": 1.5
                },
                {
                  "entry": [
                    true,
                    false,
                    true
                  ],
                  "out": 2,
                  "location": [
                    -75.138893,
                    39.982807
                  ],
                  "geometry_index": 34,
                  "in": 1,
                  "bearings": [
                    8,
                    99,
                    280
                  ],
                  "duration": 1.5
                }
              ],
              "name": "",
              "distance": 107.972,
              "maneuver": {
                "type": "turn",
                "location": [
                  -75.13839,
                  39.982903
                ],
                "bearing_before": 280,
                "modifier": "left",
                "bearing_after": 190,
                "instruction": "Turn left"
              },
              "weight": 35.521,
              "geometry": {
                "coordinates": [
                  [
                    -75.13839,
                    39.982903
                  ],
                  [
                    -75.138428,
                    39.982746
                  ],
                  [
                    -75.13868,
                    39.98278
                  ],
                  [
                    -75.138893,
                    39.982807
                  ],
                  [
                    -75.139069,
                    39.98283
                  ],
                  [
                    -75.139008,
                    39.983139
                  ]
                ],
                "type": "LineString"
              },
              "duration": 35.521,
              "mode": "driving",
              "driving_side": "right"
            },
            {
              "intersections": [
                {
                  "bearings": [
                    187
                  ],
                  "location": [
                    -75.139008,
                    39.983139
                  ],
                  "entry": [
                    true
                  ],
                  "geometry_index": 36,
                  "in": 0
                }
              ],
              "name": "",
              "distance": 0,
              "maneuver": {
                "type": "arrive",
                "location": [
                  -75.139008,
                  39.983139
                ],
                "bearing_before": 7,
                "modifier": "right",
                "bearing_after": 0,
                "instruction": "You have arrived at your destination, on the right"
              },
              "weight": 0,
              "geometry": {
                "coordinates": [
                  [
                    -75.139008,
                    39.983139
                  ],
                  [
                    -75.139008,
                    39.983139
                  ]
                ],
                "type": "LineString"
              },
              "duration": 0,
              "mode": "driving",
              "driving_side": "right"
            }
          ],
          "distance": 2163.695,
          "duration": 609.581,
          "weight": 609.581
        }
      ],
      "geometry": {
        "coordinates": [
          [
            -75.12384,
            39.9781
          ],
          [
            -75.125015,
            39.979427
          ],
          [
            -75.125595,
            39.979122
          ],
          [
            -75.129356,
            39.983383
          ],
          [
            -75.132637,
            39.98167
          ],
          [
            -75.132889,
            39.981632
          ],
          [
            -75.133209,
            39.980148
          ],
          [
            -75.138451,
            39.98082
          ],
          [
            -75.138023,
            39.982853
          ],
          [
            -75.13839,
            39.982903
          ],
          [
            -75.138428,
            39.982746
          ],
          [
            -75.139069,
            39.98283
          ],
          [
            -75.139008,
            39.983139
          ]
        ],
        "type": "LineString"
      },
      "distance": 2163.695,
      "duration": 609.581,
      "weight": 609.581
    }
  ],
  "waypoints": [
    {
      "distance": 13.21,
      "name": "East Boston Street",
      "location": [
        -75.12384,
        39.9781
      ]
    },
    {
      "distance": 6.563,
      "name": "",
      "location": [
        -75.139008,
        39.983139
      ]
    }
  ],
  "code": "Ok",
  "uuid": "kwF8P5dQ9THKnQbnqjB1vhWEsBKHVb0qAiwdDOOSA7lvGw7MF-Z01w=="
}
];
