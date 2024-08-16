
export const CLOUDINARY_RESTAURANT_URL="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660"
export const SWIGGY_API= (lat,lon)=>{
 return `https://foodfire.onrender.com/api/restaurants?lat=${lat}&lng=${lon}&page_type=DESKTOP_WEB_LISTING`
}

export const CLOUDINARY_WOYM_URL="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360"
export const CLOUDINARY_RESTAURANT_FOOD_URL="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit"

export const mockData= [
                  {
                    "info": {
                      "id": "797429",
                      "name": "Oho Shawarma",
                      "cloudinaryImageId": "06f5c10f23e56a63ce7f6661433eaaa4",
                      "locality": "Hadapsaar",
                      "areaName": "Pen",
                      "costForTwo": "₹200 for two",
                      "cuisines": [
                        "Arabian",
                        "Snacks"
                      ],
                      "parentId": "151196",
                      "avgRatingString": "--",
                      "sla": {
                        "deliveryTime": 23,
                        "lastMileTravel": 0.4,
                        "serviceability": "SERVICEABLE",
                        "slaString": "20-25 mins",
                        "lastMileTravelString": "0.4 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2024-08-13 23:00:00",
                        "opened": true
                      },
                      "badges": {},
                      "isOpen": true,
                      "aggregatedDiscountInfoV2": {},
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {},
                          "textBased": {},
                          "textExtendedBadges": {}
                        }
                      },
                      "orderabilityCommunication": {
                        "title": {},
                        "subTitle": {},
                        "message": {},
                        "customIcon": {}
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {},
                          "video": {}
                        }
                      },
                      "reviewsSummary": {},
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {},
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "2.9",
                          "ratingCount": "10+"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_EXTERNAL"
                    },
                    "analytics": {
                      "context": "seo-data-6e4922c2-6d5c-4d1e-b073-5e20d5dfdf87"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/restaurants/oho-shawarma-hadapsaar-pen-pen-797429",
                      "text": "RESTAURANT_MENU",
                      "type": "WEBLINK"
                    },
                    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                  },
                  {
                    "info": {
                      "id": "797882",
                      "name": "The Vada-Pav Town",
                      "cloudinaryImageId": "53d952b4e56a01b6774bb2f522d709c3",
                      "locality": "11th Cross Road",
                      "areaName": "Pen",
                      "costForTwo": "₹200 for two",
                      "cuisines": [
                        "Indian",
                        "Snacks"
                      ],
                      "veg": true,
                      "parentId": "477112",
                      "avgRatingString": "--",
                      "sla": {
                        "deliveryTime": 28,
                        "lastMileTravel": 0.5,
                        "serviceability": "SERVICEABLE",
                        "slaString": "25-30 mins",
                        "lastMileTravelString": "0.5 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2024-08-13 22:15:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "v1695133679/badges/Pure_Veg111.png",
                            "description": "pureveg"
                          }
                        ]
                      },
                      "isOpen": true,
                      "aggregatedDiscountInfoV2": {},
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "pureveg",
                                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                                }
                              }
                            ]
                          },
                          "textBased": {},
                          "textExtendedBadges": {}
                        }
                      },
                      "orderabilityCommunication": {
                        "title": {},
                        "subTitle": {},
                        "message": {},
                        "customIcon": {}
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {},
                          "video": {}
                        }
                      },
                      "reviewsSummary": {},
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {},
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-6e4922c2-6d5c-4d1e-b073-5e20d5dfdf87"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/restaurants/the-vada-pav-town-11th-cross-road-pen-pen-797882",
                      "text": "RESTAURANT_MENU",
                      "type": "WEBLINK"
                    },
                    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                  },
                  {
                    "info": {
                      "id": "797177",
                      "name": "Bholej Rock and rolls",
                      "cloudinaryImageId": "5c8fa0250094725311629f6d1cd88571",
                      "locality": "Shop no 6",
                      "areaName": "Pen",
                      "costForTwo": "₹150 for two",
                      "cuisines": [
                        "Rolls & Wraps",
                        "Chinese"
                      ],
                      "avgRating": 3.5,
                      "parentId": "45034",
                      "avgRatingString": "3.5",
                      "totalRatingsString": "7",
                      "sla": {
                        "deliveryTime": 32,
                        "lastMileTravel": 0.6,
                        "serviceability": "SERVICEABLE",
                        "slaString": "30-35 mins",
                        "lastMileTravelString": "0.6 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2024-08-13 22:30:00",
                        "opened": true
                      },
                      "badges": {},
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {},
                          "textBased": {},
                          "textExtendedBadges": {}
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "20% OFF",
                        "subHeader": "UPTO ₹100"
                      },
                      "orderabilityCommunication": {
                        "title": {},
                        "subTitle": {},
                        "message": {},
                        "customIcon": {}
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {},
                          "video": {}
                        }
                      },
                      "reviewsSummary": {},
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {},
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-6e4922c2-6d5c-4d1e-b073-5e20d5dfdf87"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/restaurants/bholej-rock-and-rolls-shop-no-6-pen-pen-797177",
                      "text": "RESTAURANT_MENU",
                      "type": "WEBLINK"
                    },
                    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                  },
                  {
                    "info": {
                      "id": "797167",
                      "name": "New Radhika Family Restaurant",
                      "cloudinaryImageId": "903eaaab84d2e02499bbf29311b30085",
                      "locality": "Mahatma Gandhi Road",
                      "areaName": "Pen",
                      "costForTwo": "₹200 for two",
                      "cuisines": [
                        "Indian",
                        "Snacks",
                        "Beverages"
                      ],
                      "avgRating": 4.7,
                      "veg": true,
                      "parentId": "476738",
                      "avgRatingString": "4.7",
                      "totalRatingsString": "20+",
                      "sla": {
                        "deliveryTime": 28,
                        "lastMileTravel": 0.6,
                        "serviceability": "SERVICEABLE",
                        "slaString": "25-30 mins",
                        "lastMileTravelString": "0.6 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2024-08-13 22:30:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "v1695133679/badges/Pure_Veg111.png",
                            "description": "pureveg"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "pureveg",
                                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                                }
                              }
                            ]
                          },
                          "textBased": {},
                          "textExtendedBadges": {}
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "40% OFF",
                        "subHeader": "UPTO ₹80"
                      },
                      "orderabilityCommunication": {
                        "title": {},
                        "subTitle": {},
                        "message": {},
                        "customIcon": {}
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {},
                          "video": {}
                        }
                      },
                      "reviewsSummary": {},
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {},
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-6e4922c2-6d5c-4d1e-b073-5e20d5dfdf87"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/restaurants/new-radhika-family-restaurant-mahatma-gandhi-road-pen-pen-797167",
                      "text": "RESTAURANT_MENU",
                      "type": "WEBLINK"
                    },
                    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                  },
                  {
                    "info": {
                      "id": "797427",
                      "name": "M/S. Hotel Vaibhav",
                      "cloudinaryImageId": "5dcce6e7490f15a6d8b0b11ece678717",
                      "locality": "Raju Pote Marg",
                      "areaName": "Pen",
                      "costForTwo": "₹200 for two",
                      "cuisines": [
                        "Chinese"
                      ],
                      "avgRating": 4.2,
                      "parentId": "476867",
                      "avgRatingString": "4.2",
                      "totalRatingsString": "10+",
                      "sla": {
                        "deliveryTime": 30,
                        "lastMileTravel": 0.9,
                        "serviceability": "SERVICEABLE",
                        "slaString": "30-35 mins",
                        "lastMileTravelString": "0.9 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2024-08-13 22:30:00",
                        "opened": true
                      },
                      "badges": {},
                      "isOpen": true,
                      "aggregatedDiscountInfoV2": {},
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {},
                          "textBased": {},
                          "textExtendedBadges": {}
                        }
                      },
                      "orderabilityCommunication": {
                        "title": {},
                        "subTitle": {},
                        "message": {},
                        "customIcon": {}
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {},
                          "video": {}
                        }
                      },
                      "reviewsSummary": {},
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {},
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-6e4922c2-6d5c-4d1e-b073-5e20d5dfdf87"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/restaurants/m-s-hotel-vaibhav-raju-pote-marg-pen-pen-797427",
                      "text": "RESTAURANT_MENU",
                      "type": "WEBLINK"
                    },
                    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                  },
                  {
                    "info": {
                      "id": "797337",
                      "name": "Mom & Me Cakes N More",
                      "cloudinaryImageId": "e1114ef2ed8df79fdf4acaee0ec0b040",
                      "locality": "Pen",
                      "areaName": "Pen",
                      "costForTwo": "₹200 for two",
                      "cuisines": [
                        "Bakery",
                        "Desserts"
                      ],
                      "avgRating": 4.1,
                      "veg": true,
                      "parentId": "476844",
                      "avgRatingString": "4.1",
                      "totalRatingsString": "9",
                      "sla": {
                        "deliveryTime": 31,
                        "lastMileTravel": 1.3,
                        "serviceability": "SERVICEABLE",
                        "slaString": "30-35 mins",
                        "lastMileTravelString": "1.3 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2024-08-13 23:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "v1695133679/badges/Pure_Veg111.png",
                            "description": "pureveg"
                          }
                        ]
                      },
                      "isOpen": true,
                      "aggregatedDiscountInfoV2": {},
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "pureveg",
                                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                                }
                              }
                            ]
                          },
                          "textBased": {},
                          "textExtendedBadges": {}
                        }
                      },
                      "orderabilityCommunication": {
                        "title": {},
                        "subTitle": {},
                        "message": {},
                        "customIcon": {}
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {},
                          "video": {}
                        }
                      },
                      "reviewsSummary": {},
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {},
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-6e4922c2-6d5c-4d1e-b073-5e20d5dfdf87"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/restaurants/mom-and-me-cakes-n-more-pen-pen-797337",
                      "text": "RESTAURANT_MENU",
                      "type": "WEBLINK"
                    },
                    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                  },
                  {
                    "info": {
                      "id": "797603",
                      "name": "Himgauri Garden Restaurant",
                      "cloudinaryImageId": "b14cd9fc40129fcfb97aa7e621719d07",
                      "locality": "2Nd Line Fulbag Galli",
                      "areaName": "Pen",
                      "costForTwo": "₹200 for two",
                      "cuisines": [
                        "North Indian",
                        "Seafood",
                        "Chinese",
                        "Biryani",
                        "Tandoor",
                        "Kebabs",
                        "Desserts"
                      ],
                      "avgRating": 4.3,
                      "parentId": "477368",
                      "avgRatingString": "4.3",
                      "totalRatingsString": "100+",
                      "sla": {
                        "deliveryTime": 32,
                        "lastMileTravel": 2.8,
                        "serviceability": "SERVICEABLE",
                        "slaString": "30-35 mins",
                        "lastMileTravelString": "2.8 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2024-08-13 23:00:00",
                        "opened": true
                      },
                      "badges": {},
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {},
                          "textBased": {},
                          "textExtendedBadges": {}
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "60% OFF",
                        "subHeader": "UPTO ₹120"
                      },
                      "orderabilityCommunication": {
                        "title": {},
                        "subTitle": {},
                        "message": {},
                        "customIcon": {}
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {},
                          "video": {}
                        }
                      },
                      "reviewsSummary": {},
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {},
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-6e4922c2-6d5c-4d1e-b073-5e20d5dfdf87"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/restaurants/himgauri-garden-restaurant-2nd-line-fulbag-galli-pen-pen-797603",
                      "text": "RESTAURANT_MENU",
                      "type": "WEBLINK"
                    },
                    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                  },
                  
                ]

export const whatsonyourmind=[
{
"id": "750591",
"imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Biryani.png",
"action": {
"link": "https://www.swiggy.com/collections/83639?collection_id=83639&search_context=biryani&tags=layout_CCS_Biryani&type=rcv2",
"text": "Biryani",
"type": "WEBLINK"
},
"entityType": "BANNER",
"accessibility": {
"altText": "restaurants curated for biryani",
"altTextCta": "open"
},
"entityId": "swiggy://collectionV2?collection_id=83639&tags=layout_CCS_Biryani&search_context=biryani",
"frequencyCapping": {},
"externalMarketing": {},
"description": "Biryani"
},
{
"id": "750579",
"imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Pizzas.png",
"action": {
"link": "https://www.swiggy.com/collections/83631?collection_id=83631&search_context=pizza&tags=layout_CCS_Pizza&type=rcv2",
"text": "Pizzas",
"type": "WEBLINK"
},
"entityType": "BANNER",
"accessibility": {
"altText": "restaurants curated for pizza",
"altTextCta": "open"
},
"entityId": "swiggy://collectionV2?collection_id=83631&tags=layout_CCS_Pizza&search_context=pizza",
"frequencyCapping": {},
"externalMarketing": {},
"description": "Pizzas"
},
{
"id": "750581",
"imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_North Indian.png",
"action": {
"link": "https://www.swiggy.com/collections/83633?collection_id=83633&search_context=northindian&tags=layout_CCS_NorthIndian&type=rcv2",
"text": "North Indian",
"type": "WEBLINK"
},
"entityType": "BANNER",
"accessibility": {
"altText": "restaurants curated for north indian",
"altTextCta": "open"
},
"entityId": "swiggy://collectionV2?collection_id=83633&tags=layout_CCS_NorthIndian&search_context=northindian",
"frequencyCapping": {},
"externalMarketing": {},
"description": "North Indian"
},
{
"id": "750587",
"imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Chinese.png",
"action": {
"link": "https://www.swiggy.com/collections/83636?collection_id=83636&tags=layout_CCS_Chinese&type=rcv2",
"text": "Chinese",
"type": "WEBLINK"
},
"entityType": "BANNER",
"accessibility": {
"altText": "restaurant curated for chinese",
"altTextCta": "open"
},
"entityId": "swiggy://collectionV2?collection_id=83636&tags=layout_CCS_Chinese",
"frequencyCapping": {},
"externalMarketing": {},
"description": "Chinese"
},
{
"id": "750589",
"imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_burger.png",
"action": {
"link": "https://www.swiggy.com/collections/83637?collection_id=83637&search_context=burger&tags=layout_CCS_Burger&type=rcv2",
"text": "Burgers",
"type": "WEBLINK"
},
"entityType": "BANNER",
"accessibility": {
"altText": "restaurants curated for burger",
"altTextCta": "open"
},
"entityId": "swiggy://collectionV2?collection_id=83637&tags=layout_CCS_Burger&search_context=burger",
"frequencyCapping": {},
"externalMarketing": {},
"description": "Burgers"
},
{
"id": "750248",
"imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/f1263395-5d4a-4775-95dc-80ab6f3bbd89_shawarma.png",
"action": {
"link": "https://www.swiggy.com/collections/80402?collection_id=80402&tags=layout_Shawarma_Contextual&type=rcv2",
"text": "Shawarma",
"type": "WEBLINK"
},
"entityType": "BANNER",
"accessibility": {
"altText": "restaurant curated for shawarma",
"altTextCta": "open"
},
"entityId": "swiggy://collectionV2?collection_id=80402&tags=layout_Shawarma_Contextual",
"frequencyCapping": {},
"externalMarketing": {},
"description": "Shawarma"
},
{
"id": "750131",
"imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Dosa.png",
"action": {
"link": "https://www.swiggy.com/collections/80424?collection_id=80424&tags=layout_CCS_Dosa&type=rcv2",
"text": "Dosa",
"type": "WEBLINK"
},
"entityType": "BANNER",
"accessibility": {
"altText": "restaurants curated for dosa",
"altTextCta": "open"
},
"entityId": "swiggy://collectionV2?collection_id=80424&tags=layout_CCS_Dosa",
"frequencyCapping": {},
"externalMarketing": {},
"description": "Dosa"
},
{
"id": "750585",
"imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_Salad-1.png",
"action": {
"link": "https://www.swiggy.com/collections/83634?collection_id=83634&search_context=southindian&tags=layout_CCS_SouthIndian&type=rcv2",
"text": "South Indian",
"type": "WEBLINK"
},
"entityType": "BANNER",
"accessibility": {
"altText": "restaurants curated for south indian",
"altTextCta": "open"
},
"entityId": "swiggy://collectionV2?collection_id=83634&tags=layout_CCS_SouthIndian&search_context=southindian",
"frequencyCapping": {},
"externalMarketing": {},
"description": "South Indian"
},
{
"id": "749868",
"imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_cake.png",
"action": {
"link": "https://www.swiggy.com/collections/83655?collection_id=83655&tags=layout_CCS_Cake&type=rcv2",
"text": "Cakes",
"type": "WEBLINK"
},
"entityType": "BANNER",
"accessibility": {
"altText": "restaurant curated for cake",
"altTextCta": "open"
},
"entityId": "swiggy://collectionV2?collection_id=83655&tags=layout_CCS_Cake",
"frequencyCapping": {},
"externalMarketing": {},
"description": "Cakes"
},
{
"id": "750596",
"imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_chocolate icecream.png",
"action": {
"link": "https://www.swiggy.com/collections/83640?collection_id=83640&tags=layout_CCS_IceCreams&type=rcv2",
"text": "Ice Cream",
"type": "WEBLINK"
},
"entityType": "BANNER",
"accessibility": {
"altText": "restaurants curated for icecream",
"altTextCta": "open"
},
"entityId": "swiggy://collectionV2?collection_id=83640&tags=layout_CCS_IceCreams",
"frequencyCapping": {},
"externalMarketing": {},
"description": "Ice Cream"
},
{
"id": "750643",
"imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Idli.png",
"action": {
"link": "https://www.swiggy.com/collections/80440?collection_id=80440&tags=layout_CCS_Idli&type=rcv2",
"text": "Idli",
"type": "WEBLINK"
},
"entityType": "BANNER",
"accessibility": {
"altText": "restaurants curated for idly",
"altTextCta": "open"
},
"entityId": "swiggy://collectionV2?collection_id=80440&tags=layout_CCS_Idli",
"frequencyCapping": {},
"externalMarketing": {},
"description": "Idli"
},
{
"id": "750222",
"imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/17/58760e8e-324f-479e-88fa-31800120ea38_Rolls1.png",
"action": {
"link": "https://www.swiggy.com/collections/83669?collection_id=83669&tags=layout_CCS_Rolls&type=rcv2",
"text": "Rolls",
"type": "WEBLINK"
},
"entityType": "BANNER",
"accessibility": {
"altText": "restaurants curated for roll",
"altTextCta": "open"
},
"entityId": "swiggy://collectionV2?collection_id=83669&tags=layout_CCS_Rolls",
"frequencyCapping": {},
"externalMarketing": {},
"description": "Rolls"
},
{
"id": "750208",
"imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/f1263395-5d4a-4775-95dc-80ab6f3bbd89_pastry.png",
"action": {
"link": "https://www.swiggy.com/collections/80355?collection_id=80355&tags=layout_CCS_Pastry&type=rcv2",
"text": "Pastry",
"type": "WEBLINK"
},
"entityType": "BANNER",
"accessibility": {
"altText": "restaurant curated for Pastry",
"altTextCta": "open"
},
"entityId": "swiggy://collectionV2?collection_id=80355&tags=layout_CCS_Pastry",
"frequencyCapping": {},
"externalMarketing": {},
"description": "Pastry"
},
{
"id": "750635",
"imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Kebabs.png",
"action": {
"link": "https://www.swiggy.com/collections/80451?collection_id=80451&tags=layout_CCS_Kebabs&type=rcv2",
"text": "Kebabs",
"type": "WEBLINK"
},
"entityType": "BANNER",
"accessibility": {
"altText": "restaurant curated for kebabs",
"altTextCta": "open"
},
"entityId": "swiggy://collectionV2?collection_id=80451&tags=layout_CCS_Kebabs",
"frequencyCapping": {},
"externalMarketing": {},
"description": "Kebabs"
},
{
"id": "749772",
"imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Noodles.png",
"action": {
"link": "https://www.swiggy.com/collections/80463?collection_id=80463&tags=layout_BAU_Contextual%2Cnoodles&type=rcv2",
"text": "Noodles",
"type": "WEBLINK"
},
"entityType": "BANNER",
"accessibility": {
"altText": "restaurant curated for noodles",
"altTextCta": "open"
},
"entityId": "80463",
"frequencyCapping": {},
"externalMarketing": {},
"description": "Noodles"
},
{
"id": "750201",
"imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Paratha.png",
"action": {
"link": "https://www.swiggy.com/collections/80475?collection_id=80475&tags=layout_BAU_Contextual%2Cparatha%2Cads_pc_paratha&type=rcv2",
"text": "Paratha",
"type": "WEBLINK"
},
"entityType": "BANNER",
"accessibility": {
"altText": "restaurants curated for paratha",
"altTextCta": "open"
},
"entityId": "80475",
"frequencyCapping": {},
"externalMarketing": {},
"description": "Paratha"
},
{
"id": "750225",
"imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_Salad.png",
"action": {
"link": "https://www.swiggy.com/collections/80394?collection_id=80394&tags=layout_CCS_Salad&type=rcv2",
"text": "Salad",
"type": "WEBLINK"
},
"entityType": "BANNER",
"accessibility": {
"altText": "restaurant curated for salad",
"altTextCta": "open"
},
"entityId": "swiggy://collectionV2?collection_id=80394&tags=layout_CCS_Salad",
"frequencyCapping": {},
"externalMarketing": {},
"description": "Salad"
},
{
"id": "750206",
"imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/f1263395-5d4a-4775-95dc-80ab6f3bbd89_pasta.png",
"action": {
"link": "https://www.swiggy.com/collections/80479?collection_id=80479&search_context=pasta&tags=layout_CCS_Pasta&type=rcv2",
"text": "Pasta",
"type": "WEBLINK"
},
"entityType": "BANNER",
"accessibility": {
"altText": "restaurant curated for pasta",
"altTextCta": "open"
},
"entityId": "swiggy://collectionV2?collection_id=80479&tags=layout_CCS_Pasta&search_context=pasta",
"frequencyCapping": {},
"externalMarketing": {},
"description": "Pasta"
},
{
"id": "750204",
"imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_Parotta.png",
"action": {
"link": "https://www.swiggy.com/collections/80477?collection_id=80477&tags=layout_BAU_Contextual%2Cparotta&type=rcv2",
"text": "Parotta",
"type": "WEBLINK"
},
"entityType": "BANNER",
"accessibility": {
"altText": "restaurant curated for parotta",
"altTextCta": "open"
},
"entityId": "80477",
"frequencyCapping": {},
"externalMarketing": {},
"description": "Parotta"
},
{
"id": "749768",
"imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Momos.png",
"action": {
"link": "https://www.swiggy.com/collections/80461?collection_id=80461&tags=layout_CCS_Momos&type=rcv2",
"text": "Momos",
"type": "WEBLINK"
},
"entityType": "BANNER",
"accessibility": {
"altText": "restaurant curated for momos",
"altTextCta": "open"
},
"entityId": "swiggy://collectionV2?collection_id=80461&tags=layout_CCS_Momos",
"frequencyCapping": {},
"externalMarketing": {},
"description": "Momos"
}
]