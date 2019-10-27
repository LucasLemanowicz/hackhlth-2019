medicare_claims = {
  "id": "jzd2-pt4g",
  "name": "Medicare Provider Utilization and Payment Data: Physician and Other Supplier CY2012",
  "attribution": "Centers for Medicare and Medicaid Services",
  "attributionLink": "http://www.cms.gov/Research-Statistics-Data-and-Systems/Statistics-Trends-and-Reports/Medicare-Provider-Charge-Data/Physician-and-Other-Supplier.html",
  "category": "Medicare - Physician/Supplier",
  "description": "CPT copyright 2014 American Medical Association. All Right Reserved.  This dataset is subject to the AMA click-agreement.  If you have reached this dataset without the click through agreement, please acknowledge your acceptance here: https://data.cms.gov/use-agreement?id=jzd2-pt4g\r\n\r\nNOTE: This is a very large dataset so some views and actions will take some time to load, particularly in older browsers.\r\n\r\nThe Centers for Medicare & Medicaid Services (CMS) has prepared a public data set, the Provider Utilization and Payment Data Physician and Other Supplier Public Use File (herein referred to as “Physician and Other Supplier PUF”), with information on services and procedures provided to Medicare beneficiaries by physicians and other healthcare professionals. The Physician and Other Supplier PUF contains information on utilization, payment (allowed amount and Medicare payment), and submitted charges organized by National Provider Identifier (NPI), Healthcare Common Procedure Coding System (HCPCS) code, and place of service. This PUF is based on information from CMS’s National Claims History (NCH) Standard Analytic Files (SAFs). The data in the Physician and Other Supplier PUF covers calendar year 2012 and contains 100% final-action (i.e., all claim adjustments have been resolved) physician/supplier Part B non-institutional line items (excluding durable medical equipment) for the Medicare fee-for-service (FFS) population.",
  "displayType": "table",
  "hideFromCatalog": False,
  "hideFromDataJson": False,
  "publicationAppendEnabled": False,
  "columns": [
    {
      "id": 203219935,
      "name": "National Provider Identifier",
      "fieldName": "npi",
      "position": 5,
      "description": "National Provider Identifier (NPI) for the performing provider on the claim.",
      "width": 136,
      "dataTypeName": "text",
      "renderTypeName": "text",
      "tableColumnId": 18790130,
      "format": {
        "align": "left"
      },
      "flags": [
        "hidden"
      ],
      "metadata": {}
    },
    {
      "id": 203219936,
      "name": "Last Name/Organization Name",
      "fieldName": "nppes_provider_last_org_name",
      "position": 6,
      "description": "When the provider is registered in NPPES as an individual (entity type code=’I’), this is the provider’s last name. When the provider is registered as an organization (entity type code = ‘O’), this is the organization name.",
      "width": 436,
      "dataTypeName": "text",
      "renderTypeName": "text",
      "tableColumnId": 18790131,
      "format": {
        "align": "left"
      },
      "flags": [
        "hidden"
      ],
      "metadata": {}
    },
    {
      "id": 203219937,
      "name": "First Name",
      "fieldName": "nppes_provider_first_name",
      "position": 7,
      "description": "When the provider is registered in NPPES as an individual (entity type code=’I’), this is the provider’s first name. When the provider is registered as an organization (entity type code = ‘O’), this will be blank.",
      "width": 400,
      "dataTypeName": "text",
      "renderTypeName": "text",
      "tableColumnId": 18790132,
      "format": {
        "align": "left"
      },
      "flags": [
        "hidden"
      ],
      "metadata": {}
    },
    {
      "id": 203219941,
      "name": "Middle Initial",
      "fieldName": "nppes_provider_mi",
      "position": 8,
      "description": "When the provider is registered in NPPES as an individual (entity type code=’I’), this is the provider’s middle initial. When the provider is registered as an organization (entity type code = ‘O’), this will be blank.",
      "width": 304,
      "dataTypeName": "text",
      "renderTypeName": "text",
      "tableColumnId": 18790133,
      "format": {
        "align": "left"
      },
      "flags": [
        "hidden"
      ],
      "metadata": {}
    },
    {
      "id": 203219977,
      "name": "Credentials",
      "fieldName": "nppes_credentials",
      "position": 9,
      "description": "When the provider is registered in NPPES as an individual (entity type code=’I’), these are the provider’s credentials. When the provider is registered as an organization (entity type code = ‘O’), this will be blank.",
      "width": 304,
      "dataTypeName": "text",
      "renderTypeName": "text",
      "tableColumnId": 18790134,
      "format": {
        "align": "left"
      },
      "flags": [
        "hidden"
      ],
      "metadata": {}
    },
    {
      "id": 203219993,
      "name": "Gender",
      "fieldName": "nppes_provider_gender",
      "position": 10,
      "description": "When the provider is registered in NPPES as an individual (entity type code=’I’), this is the provider’s gender. When the provider is registered as an organization (entity type code = ‘O’), this will be blank.",
      "width": 352,
      "dataTypeName": "text",
      "renderTypeName": "text",
      "tableColumnId": 18790135,
      "format": {
        "align": "left"
      },
      "flags": [
        "hidden"
      ],
      "metadata": {}
    },
    {
      "id": 203219994,
      "name": "Entity Code",
      "fieldName": "nppes_entity_code",
      "position": 11,
      "description": "Type of entity reported in NPPES. An entity code of ‘I’ identifies providers registered as individuals and an entity type code of ‘O’ identifies providers registered as organizations.",
      "width": 304,
      "dataTypeName": "text",
      "renderTypeName": "text",
      "tableColumnId": 18790136,
      "format": {
        "align": "left"
      },
      "flags": [
        "hidden"
      ],
      "metadata": {}
    },
    {
      "id": 203219995,
      "name": "Street Address 1",
      "fieldName": "nppes_provider_street1",
      "position": 12,
      "description": "The first line of the provider’s street address, as reported in NPPES.",
      "width": 364,
      "dataTypeName": "text",
      "renderTypeName": "text",
      "tableColumnId": 18790137,
      "format": {
        "align": "left"
      },
      "flags": [
        "hidden"
      ],
      "metadata": {}
    },
    {
      "id": 203219996,
      "name": "Street Address 2",
      "fieldName": "nppes_provider_street2",
      "position": 13,
      "description": "The second line of the provider’s street address, as reported in NPPES.",
      "width": 364,
      "dataTypeName": "text",
      "renderTypeName": "text",
      "tableColumnId": 18790138,
      "format": {
        "align": "left"
      },
      "flags": [
        "hidden"
      ],
      "metadata": {}
    },
    {
      "id": 203219997,
      "name": "City",
      "fieldName": "nppes_provider_city",
      "position": 14,
      "description": "The city where the provider is located, as reported in NPPES.",
      "width": 328,
      "dataTypeName": "text",
      "renderTypeName": "text",
      "tableColumnId": 18790139,
      "format": {
        "align": "left"
      },
      "flags": [
        "hidden"
      ],
      "metadata": {}
    },
    {
      "id": 203219998,
      "name": "Zip Code",
      "fieldName": "nppes_provider_zip",
      "position": 15,
      "description": "The provider’s zip code, as reported in NPPES.",
      "width": 316,
      "dataTypeName": "text",
      "renderTypeName": "text",
      "tableColumnId": 18790140,
      "format": {
        "align": "left"
      },
      "flags": [
        "hidden"
      ],
      "metadata": {}
    },
    {
      "id": 203219999,
      "name": "State Code",
      "fieldName": "nppes_provider_state",
      "position": 16,
      "description": "The state where the provider is located, as reported in NPPES. The fifty U.S. states and the District of Columbia are reported by the state postal abbreviation. The following values are used for other areas:\n'XX' = 'Unknown'\n'AA' = 'Armed Forces Central/South America' \n'AE' = 'Armed Forces Europe'\n'AP' = 'Armed Forces Pacific'\n'AS' = 'American Samoa'\n'GU' = 'Guam'\n'MP' = 'North Mariana Islands'\n'PR' = 'Puerto Rico'\n'VI' = 'Virgin Islands'\n'ZZ' = 'Foreign Country'",
      "width": 340,
      "dataTypeName": "text",
      "renderTypeName": "text",
      "tableColumnId": 18790141,
      "format": {
        "align": "left"
      },
      "flags": [
        "hidden"
      ],
      "metadata": {}
    },
    {
      "id": 203220000,
      "name": "Country Code",
      "fieldName": "nppes_provider_country",
      "position": 17,
      "description": "The country where the provider is located, as reported in NPPES. The country code will be ‘US’ for any state or U.S possession. For foreign countries (i.e., state values of ‘ZZ’), the provider country values include the following:\n‘AE’ = ‘United Arab Emirates’ \n‘AR’= ‘Argentina’\n‘AU’= ‘Australia’\n‘BR’= ‘Brazil’\n‘CA’= ‘Canada’\n‘CH’= Switzerland’ \n‘CN’= China’ \n‘CO’= Colombia’ \n‘DE’= ‘Germany’ \n‘ES’= ‘Spain’\n‘FR’= France’\n‘GB’= Great Britain’ \n‘HU’= Hungary’\n‘IL’= Israel’ \n‘IN’= India’ \n‘IS’= Iceland \n‘IT’= Italy’ \n‘JP’= Japan’\n‘KR’= ‘Korea’\n‘NL’= ‘Netherlands’ \n‘PK’= ‘Pakistan’ \n‘SA’= ‘Saudi Arabia’ \n‘SY’= ‘Syria’\n‘TR’= ‘Turkey’\n‘VE’= ‘Venezuela’",
      "width": 364,
      "dataTypeName": "text",
      "renderTypeName": "text",
      "tableColumnId": 18790142,
      "format": {
        "align": "left"
      },
      "flags": [
        "hidden"
      ],
      "metadata": {}
    },
    {
      "id": 203220001,
      "name": "Provider Type",
      "fieldName": "provider_type",
      "position": 18,
      "description": "Derived from the provider specialty code reported on the claim. For providers that reported more than one specialty code on their claims, this is the specialty code associated with the largest number of services.",
      "width": 316,
      "dataTypeName": "text",
      "renderTypeName": "text",
      "tableColumnId": 18790143,
      "format": {
        "align": "left"
      },
      "flags": [
        "hidden"
      ],
      "metadata": {}
    },
    {
      "id": 203220002,
      "name": "Medicare Participation",
      "fieldName": "medicare_participation_indicator",
      "position": 19,
      "description": "Identifies whether the provider participates in Medicare and/or accepts assignment of Medicare allowed amounts. The value will be ‘Y’ for any provider that had at least one claim identifying the provider as participating in Medicare or accepting assignment of Medicare allowed amounts.",
      "width": 484,
      "dataTypeName": "text",
      "renderTypeName": "text",
      "tableColumnId": 18790144,
      "format": {
        "align": "left"
      },
      "flags": [
        "hidden"
      ],
      "metadata": {}
    },
    {
      "id": 203220003,
      "name": "Place of Service",
      "fieldName": "place_of_service",
      "position": 20,
      "description": "Identifies whether the place of service submitted on the claims is a facility (value of ‘F’) or non-facility (value of ‘O’). Non-facility is generally an office setting; however other entities are included in non-facility. See “Appendix B – Place of Service Descriptions” for the types of entities included in facility and non-facility.",
      "width": 292,
      "dataTypeName": "text",
      "renderTypeName": "text",
      "tableColumnId": 18790145,
      "format": {
        "align": "left"
      },
      "flags": [
        "hidden"
      ],
      "metadata": {}
    },
    {
      "id": 203220004,
      "name": "HCPCS Code",
      "fieldName": "hcpcs_code",
      "position": 21,
      "description": "HCPCS code for the specific medical service furnished by the provider.",
      "width": 220,
      "dataTypeName": "text",
      "renderTypeName": "text",
      "tableColumnId": 18790146,
      "format": {
        "align": "left"
      },
      "flags": [
        "hidden"
      ],
      "metadata": {}
    },
    {
      "id": 203220005,
      "name": "HCPCS Description",
      "fieldName": "hcpcs_description",
      "position": 1,
      "description": "Description of the HCPCS code for the specific medical service furnished by the provider. HCPCS descriptions associated with CPT codes are consumer friendly descriptions provided by the AMA. CPT Consumer Friendly Descriptors are lay synonyms for CPT descriptors that are intended to help healthcare consumers who are not medical professionals understand clinical procedures on bills and patient portals. CPT Consumer Friendly Descriptors should not be used for clinical coding or documentation. All other descriptions are CMS Level II descriptions provided in long form.  Due to variable length restrictions, the CMS Level II descriptions have been truncated to 256 bytes. As a result, the same HCPCS description can be associated with more than one HCPCS code.  For complete CMS Level II descriptions, visit http://www.cms.gov/Medicare/Coding/HCPCSReleaseCodeSets/Alpha-Numeric-HCPCS.html.",
      "width": 334,
      "dataTypeName": "text",
      "renderTypeName": "text",
      "tableColumnId": 18790147,
      "format": {
        "displayStyle": "plain",
        "align": "left",
        "drill_down": "true"
      },
      "flags": None,
      "metadata": {}
    },
    {
      "id": 203353037,
      "name": "HCPCS Drug Indicator",
      "fieldName": "hcpcs_drug_indicator",
      "position": 23,
      "description": "Identifies whether the HCPCS code for the specific service furnished by the provider is a HCPCS listed on the Medicare Part B Drug Average Sales Price (ASP) File. For additional information on the ASP drug pricing, visit\nhttp://www.cms.gov/Medicare/Medicare-Fee-for-Service-Part-B-Drugs/McrPartBDrugAvgSalesPrice/index.html.",
      "width": 136,
      "dataTypeName": "text",
      "renderTypeName": "text",
      "tableColumnId": 28253455,
      "format": {
        "align": "left"
      },
      "flags": [
        "hidden"
      ],
      "metadata": {}
    },
    {
      "id": 203220006,
      "name": "Number of Services",
      "fieldName": "line_srvc_cnt",
      "position": 24,
      "description": "Number of services provided; note that the metrics used to count the number provided can vary from service to service.",
      "width": 256,
      "dataTypeName": "number",
      "renderTypeName": "number",
      "tableColumnId": 18790148,
      "format": {
        "precisionStyle": "standard",
        "noCommas": "false",
        "align": "right"
      },
      "flags": [
        "hidden"
      ],
      "metadata": {}
    },
    {
      "id": 203220007,
      "name": "Number of Medicare Beneficiaries",
      "fieldName": "bene_unique_cnt",
      "position": 25,
      "description": "Number of distinct Medicare beneficiaries receiving the service.",
      "width": 280,
      "dataTypeName": "number",
      "renderTypeName": "number",
      "tableColumnId": 18790149,
      "format": {
        "precisionStyle": "standard",
        "noCommas": "false",
        "align": "right"
      },
      "flags": [
        "hidden"
      ],
      "metadata": {}
    },
    {
      "id": 203220008,
      "name": "Number of Medicare Beneficiary/Day Services",
      "fieldName": "bene_day_srvc_cnt",
      "position": 26,
      "description": "Number of distinct Medicare beneficiary/per day services. Since a given beneficiary may receive multiple services of the same type (e.g., single vs. multiple cardiac stents) on a single day, this metric removes double-counting from the line service count to identify whether a unique service occurred.",
      "width": 304,
      "dataTypeName": "number",
      "renderTypeName": "number",
      "tableColumnId": 18790150,
      "format": {
        "precisionStyle": "standard",
        "noCommas": "false",
        "align": "right"
      },
      "flags": [
        "hidden"
      ],
      "metadata": {}
    },
    {
      "id": 203220009,
      "name": "Average Medicare Allowed Amount",
      "fieldName": "average_medicare_allowed_amt",
      "position": 27,
      "description": "Average of the Medicare allowed amount for the service; this figure is the sum of the amount Medicare pays, the deductible and coinsurance amounts that the beneficiary is responsible for paying, and any amounts that a third party is responsible for paying.",
      "width": 436,
      "dataTypeName": "number",
      "renderTypeName": "number",
      "tableColumnId": 18790151,
      "format": {
        "precisionStyle": "standard",
        "noCommas": "false",
        "align": "right"
      },
      "flags": [
        "hidden"
      ],
      "metadata": {}
    },
    {
      "id": 203220010,
      "name": "Standard Deviation of Medicare Allowed Amount",
      "fieldName": "stdev_medicare_allowed_amt",
      "position": 28,
      "description": "Standard deviation of the Medicare allowed amounts. The standard deviation indicates the amount of variation from the average Medicare allowed amount that exists within a single provider, HCPCS service, and place of service.",
      "width": 412,
      "dataTypeName": "number",
      "renderTypeName": "number",
      "tableColumnId": 18790152,
      "format": {
        "precisionStyle": "standard",
        "noCommas": "false",
        "align": "right"
      },
      "flags": [
        "hidden"
      ],
      "metadata": {}
    },
    {
      "id": 203220011,
      "name": "Average Submitted Charge Amount",
      "fieldName": "average_submitted_chrg_amt",
      "position": 2,
      "description": "Average of the charges that the provider submitted for the service.",
      "width": 412,
      "dataTypeName": "number",
      "renderTypeName": "number",
      "tableColumnId": 18790153,
      "format": {
        "precisionStyle": "standard",
        "noCommas": "false",
        "align": "right",
        "grouping_aggregate": "average"
      },
      "flags": None,
      "metadata": {}
    },
    {
      "id": 203220012,
      "name": "Standard Deviation of Submitted Charge Amount",
      "fieldName": "stdev_submitted_chrg_amt",
      "position": 30,
      "description": "Standard deviation of the charge amounts submitted by the provider. The standard deviation indicates the amount of variation from the average submitted charge amount that exists within a single provider, HCPCS service, and place of service.",
      "width": 388,
      "dataTypeName": "number",
      "renderTypeName": "number",
      "tableColumnId": 18790154,
      "format": {
        "precisionStyle": "standard",
        "noCommas": "false",
        "align": "right"
      },
      "flags": [
        "hidden"
      ],
      "metadata": {}
    },
    {
      "id": 203220013,
      "name": "Average Medicare Payment Amount",
      "fieldName": "average_medicare_payment_amt",
      "position": 3,
      "description": "Average amount that Medicare paid after deductible and coinsurance amounts have been deducted for the line item service.",
      "width": 436,
      "dataTypeName": "number",
      "renderTypeName": "number",
      "tableColumnId": 18790155,
      "format": {
        "precisionStyle": "standard",
        "noCommas": "false",
        "align": "right",
        "grouping_aggregate": "average"
      },
      "flags": None,
      "metadata": {}
    },
    {
      "id": 203220014,
      "name": "Standard Deviation of Medicare Payment Amount",
      "fieldName": "stdev_medicare_payment_amt",
      "position": 32,
      "description": "Standard deviation of the Medicare payment amount. The standard deviation indicates the amount of variation from the average Medicare payment amount that exists within a single provider, HCPCS service, and place of service.",
      "width": 412,
      "dataTypeName": "number",
      "renderTypeName": "number",
      "tableColumnId": 18790156,
      "format": {
        "precisionStyle": "standard",
        "noCommas": "false",
        "align": "right"
      },
      "flags": [
        "hidden"
      ],
      "metadata": {}
    }
  ],
  "metadata": {
    "renderTypeConfig": {
      "visible": {
        "table": True
      }
    },
    "rdfSubject": "0",
    "rdfClass": "",
    "attachments": [
      {
        "filename": "Medicare Physician and Other Supplier PUF Methodology 2017-09-21.pdf",
        "assetId": "bae4fc55-97ea-49d0-b262-aa7fd109a1d1",
        "name": "Medicare Physician and Other Supplier PUF Methodology 2017-09-21.pdf"
      }
    ],
    "custom_fields": {
      "Common Core": {
        "Contact Email": "MedicareProviderData@cms.hhs.gov",
        "Contact Name": "CMS",
        "Program Code": "009:000",
        "Bureau Code": "009:38"
      }
    },
    "rowIdentifier": "0",
    "rowLabel": "",
    "availableDisplayTypes": [
      "table",
      "fatrow",
      "page"
    ],
    "jsonQuery": {
      "order": [
        {
          "columnFieldName": "nppes_provider_last_org_name",
          "ascending": True
        },
        {
          "columnFieldName": "nppes_provider_first_name",
          "ascending": True
        }
      ],
      "group": [
        {
          "columnFieldName": "hcpcs_description"
        }
      ],
      "select": [
        {
          "columnFieldName": "hcpcs_description"
        },
        {
          "columnFieldName": "average_medicare_payment_amt",
          "aggregate": "avg"
        },
        {
          "columnFieldName": "average_submitted_chrg_amt",
          "aggregate": "avg"
        }
      ],
      "where": {
        "operator": "AND",
        "metadata": {
          "unifiedVersion": 2
        },
        "children": [
          {
            "operator": "EQUALS",
            "metadata": {
              "tableColumnId": {
                "1520611": 18790141
              },
              "operator": "EQUALS",
              "freeform": True
            },
            "columnFieldName": "nppes_provider_state",
            "value": "NV"
          },
          {
            "operator": "EQUALS",
            "metadata": {
              "tableColumnId": {
                "1520611": 18790139
              },
              "operator": "EQUALS",
              "freeform": True
            },
            "columnFieldName": "nppes_provider_city",
            "value": "Las Vegas"
          },
          {
            "operator": "OR",
            "metadata": {
              "tableColumnId": {
                "1520611": 18790147
              },
              "operator": "CONTAINS"
            },
            "children": [
              {
                "operator": "CONTAINS",
                "metadata": {
                  "freeform": False
                },
                "columnFieldName": "hcpcs_description",
                "value": "LDL"
              },
              {
                "operator": "CONTAINS",
                "metadata": {
                  "freeform": True
                },
                "columnFieldName": "hcpcs_description",
                "value": "HDL"
              },
              {
                "operator": "CONTAINS",
                "metadata": {
                  "freeform": True
                },
                "columnFieldName": "hcpcs_description",
                "value": "A1C"
              },
              {
                "operator": "CONTAINS",
                "metadata": {
                  "freeform": True
                },
                "columnFieldName": "hcpcs_description",
                "value": "Glucose"
              }
            ]
          }
        ]
      }
    }
  },
  "query": {
    "orderBys": [],
    "groupBys": [
      {
        "columnId": 203220005,
        "type": "column"
      }
    ],
    "filterCondition": {
      "metadata": {
        "unifiedVersion": 2
      },
      "type": "operator",
      "value": "AND",
      "children": [
        {
          "metadata": {
            "tableColumnId": {
              "1520611": 18790141
            },
            "operator": "EQUALS",
            "freeform": True
          },
          "type": "operator",
          "value": "EQUALS",
          "children": [
            {
              "type": "column",
              "columnId": 203219999
            },
            {
              "type": "literal",
              "value": "NV"
            }
          ]
        },
        {
          "metadata": {
            "tableColumnId": {
              "1520611": 18790139
            },
            "operator": "EQUALS",
            "freeform": True
          },
          "type": "operator",
          "value": "EQUALS",
          "children": [
            {
              "type": "column",
              "columnId": 203219997
            },
            {
              "type": "literal",
              "value": "Las Vegas"
            }
          ]
        },
        {
          "metadata": {
            "tableColumnId": {
              "1520611": 18790147
            },
            "operator": "CONTAINS"
          },
          "type": "operator",
          "value": "OR",
          "children": [
            {
              "metadata": {
                "freeform": False
              },
              "type": "operator",
              "value": "CONTAINS",
              "children": [
                {
                  "type": "column",
                  "columnId": 203220005
                },
                {
                  "type": "literal",
                  "value": "LDL"
                }
              ]
            },
            {
              "metadata": {
                "freeform": True
              },
              "type": "operator",
              "value": "CONTAINS",
              "children": [
                {
                  "type": "column",
                  "columnId": 203220005
                },
                {
                  "type": "literal",
                  "value": "HDL"
                }
              ]
            },
            {
              "metadata": {
                "freeform": True
              },
              "type": "operator",
              "value": "CONTAINS",
              "children": [
                {
                  "type": "column",
                  "columnId": 203220005
                },
                {
                  "type": "literal",
                  "value": "A1C"
                }
              ]
            },
            {
              "metadata": {
                "freeform": True
              },
              "type": "operator",
              "value": "CONTAINS",
              "children": [
                {
                  "type": "column",
                  "columnId": 203220005
                },
                {
                  "type": "literal",
                  "value": "Glucose"
                }
              ]
            }
          ]
        }
      ]
    }
  },
  "tags": [
    "medicare",
    "physician",
    "supplier",
    "2012",
    "utilization",
    "payment",
    "cpt",
    "hcpcs",
    "npi",
    "mpup"
  ],
  "flags": [
    "default",
    "restorable"
  ],
  "originalViewId": "jzd2-pt4g",
  "displayFormat": {},
  "newBackend": False
}