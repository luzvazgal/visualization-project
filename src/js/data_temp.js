//Retrieving countries list. It will be retrieved from catalog but used an array as dummy data


/*data = [{
        Austria: {
            Years: [],
            Inbound:{
                Tourist_Inbound: [],
                Top_Markets: { CountryA: [], CountryB: [] }
            },
            Outbound: {
                Tourist_Outbound : [],
                Top_Destinations: { CountryA: {[]}, CountryB: {[]} }
            }
}
}]*/

data = [
    {
        name: 'Germany',
        Years: [2014,2015,2016,2017,2018],
        Inbound:{
                Tourist_Inbound: [],
                Top_Markets: { 
                    Netherlands: [4227.674,4315.047,4466.447,4574.457,4703.307],
                    Switzerland: [2757.996,3007.543,3096.12,3166.774,3295.205],
                    United_States: [2364.563,2528.066,2552.66,2802.688,2964.24],
                    United_Kingdom: [2409.966,2553.812,2545.455,2595.745,2674.111],
                    Italy: [1636.587,1707.991,1644.667,1702.032,1780.71]

                }
            },
        Outbound: {
                Tourist_Outbound : [],
                Top_Destinations: {
                    Austria:[10574.871,10544.493,11379.674,11274.997,14395.60324],
                    Italy:[9485.428,10645.721,11548.473,10972.666,13572.692388],
                    Spain:[9143.204,10242.453,10392.755,11092.772,11671.678424],
                    Netherlands:[,,4839.178,6763.021,5672.86,7413.346751],
                    France:[5472.093,4837.612,5158.745,6231.466,6143.330822],
                }
            }

},

{
    name: 'Spain',
    Years: [2014,2015,2016,2017,2018],
    Inbound:{
            Tourist_Inbound: [],
            Top_Markets: { 
                United_Kingdom: [15006.744,15764.034,17675.367,18806.776,18523.957],
                Germany: [10422.055,10260.3,11208.656,11897.376,11414.955],
                France: [10615.746,11503.609,11258.54,11267.269,11293.323],
                Nordic_Countries: [5044.539,5009.081,5129.025,5826.548,5803.535],
                Italy: [3697.702,3907.288,3969.322,4222.865,4389.453]

            }
        },
    Outbound: {
            Tourist_Outbound : [],
            Top_Destinations: {
                France:[2123.701196,1835.837,2146.534,2461.681,2410.44],
                Portugal:[1503.014125,1669.746,1650.105,2086.134,2281.792],
                Italy:[1207.276313,1262.857,1450.755,1291.884,1859.573],
                United_Kingdom:[992.759771,1188.048,1299.357,1388.142,1465.069],
                Germany:[688.463,891.04,804.012,803.045,947.6494570000001],
            }
        }

},

{
    name: 'Costa_Rica',
    Years: [2014,2015,2016,2017,2018],
    Inbound:{
            Tourist_Inbound: [],
            Top_Markets: { 
                United_States: [997.262,1077.044,1233.277,1199.241,1265.067],
                Central_America: [716.645,709.102,724.638,735.178,691.386],
                Europe: [370.482,393.115,434.884,462.295,480.102],
                Canada: [172.73,175.771,188.104,201.921,217.006],
                South_America: [138.138,156.152,181.179,181.399,190.413]

            }
        },
    Outbound: {
            Tourist_Outbound : [],
            Top_Destinations: {
                Central_America:[,449.046,464.245,587.995,583.08],
                North_America:[,307.789,382.063,370.825,375.637],
                Panama:[,195.267,193.353,240.983,300.967],
                United_States:[,229.638,278.666,253.502,250.75],
                Nicaragua:[688.463,891.04,804.012,803.045,947.6494570000001],
            }
        }

}


]