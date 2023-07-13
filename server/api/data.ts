export default defineEventHandler(event => (
  [{
    "name": "clement",
    "type": "for_time",
    "rounds": [
      [
        {
          "name": "row",
          "type": "rep",
          "n": 20,
          "breaks": [
            [
              3,
              56
            ]
          ]
        },
        {
          "name": "db_snatch",
          "type": "rep",
          "n": 20,
          "breaks": [
            [
              62,
              111
            ]
          ]
        },
        {
          "name": "t2b",
          "type": "rep",
          "n": 45,
          "group": "gym",
          "breaks": [
            [
              121,
              146,
              15
            ],
            [
              157,
              182,
              15
            ],
            [
              198,
              220,
              15
            ]
          ]
        }
      ],
      [
        {
          "name": "row",
          "type": "rep",
          "n": 20,
          "breaks": [
            [
              226,
              287
            ]
          ]
        },
        {
          "name": "db_snatch",
          "type": "rep",
          "n": 20,
          "breaks": [
            [
              293,
              346
            ]
          ]
        },
        {
          "name": "c2b",
          "type": "rep",
          "n": 30,
          "group": "gym",
          "breaks": [
            [
              363,
              379,
              15
            ],
            [
              390,
              407,
              15
            ]
          ]
        }
      ],
      [
        {
          "name": "row",
          "type": "rep",
          "n": 20,
          "breaks": [
            [
              417,
              500
            ]
          ]
        },
        {
          "name": "db_snatch",
          "type": "rep",
          "n": 20,
          "breaks": [
            [
              505,
              557
            ]
          ]
        },
        {
          "name": "b_mu",
          "type": "rep",
          "n": 15,
          "group": "gym",
          "breaks": [
            [
              568,
              610
            ]
          ]
        }
      ]
    ]
  }]
))
