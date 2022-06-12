
/* Magic Mirror Config Sample
 *
 * By Michael Teeuw https://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information on how you can configure this file
 * see https://docs.magicmirror.builders/getting-started/configuration.html#general
 * and https://docs.magicmirror.builders/modules/configuration.html
 */
let config = {
	address: "0.0.0.0", 	// Address to listen on, can be:
							// - "localhost", "127.0.0.1", "::1" to listen on loopback interface
							// - another specific IPv4/6 to listen on a specific interface
							// - "0.0.0.0", "::" to listen on any interface
							// Default, when address config is left out or empty, is "localhost"
	port: 8080,
	basePath: "/", 	// The URL path where MagicMirror is hosted. If you are using a Reverse proxy
					// you must set the sub path here. basePath must end with a /
 ipWhitelist: ["127.0.0.1", " 127.0.0.1", "::1", "192.168.0.42", "192.168.0.50", "192.168.1.246", "192.168.1.235", "192.168.1.168"],	
 //  ipWhitelist: ["127.0.0.1", " ::ffff: 127.0.0.1", "::1", "::ffff:192.168.0.42", "::ffff:192.168.0.50"],															// or add a specific IPv4 of 192.168.1.5 :
														// or add a specific IPv4 of 192.168.1.5 :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
															// or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	useHttps: false, 		// Support HTTPS or not, default "false" will use HTTP
	httpsPrivateKey: "", 	// HTTPS private key path, only require when useHttps is true
	httpsCertificate: "", 	// HTTPS Certificate path, only require when useHttps is true

	language: "en",
	locale: "en-US",
	logLevel: ["INFO", "LOG", "WARN", "ERROR"], // Add "DEBUG" for even more logging
	timeFormat: 12,
	units: "metric",
	// serverOnly:  true/false/"local" ,
	// local for armv6l processors, default
	//   starts serveronly and then starts chrome browser
	// false, default for all NON-armv6l devices
	// true, force serveronly mode, because you want to.. no UI on this device

     //changes changes changes


	modules: [

{

			module: "compliments",
			position: "bottom_bar",
                        updateInterval: 600000,
                        fadeSpeed: 3000,
		},
		
	{
			module: "newsfeed",
			position: "top_bar",
			config: {
				feeds: [
					{
						title: "New York Times",
						url: "https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml"
					}
				],  
				showSourceTitle: true,
				showPublishDate: true,
				broadcastNewsFeeds: true,
				broadcastNewsUpdates: true,
				updateInterval : 30000,
				hideLoading: true,
                                animationSpeed: 3000,
				ignoreOldItems: true,
			}
		},
               
                
		
        
    	{
			module: "MMM-Space",
			position: "top_right",	// This can be any of the regions.
			config: {
				verticalSpace: "4px",
				// See 'Configuration options' for more information.
			}
		},

		
		
  {
  //disabled:true,
  module: "MMM-AVStock",
  position: "top_right",
  config: {
    apiKey : "YOUR_ALPHAVANTAGE_KEY",
    symbols : ["VOO", "VTI", "VGK", "GBTC","ETHE",],
    alias: ["VOO", "VTI", "VGK","Bitcoin (GBTC)","Etherium (ETHE)"],
    mode : "table",
    //chartWidth : "1250",
    width : "1%",
    chartDays : "90",
    direction : "column",
    classes : "xsmall",
    showPurchasePrices : "false",
    showPerformance2Purchase : "false",
    purchasePrice : [414, 230, 68 , 40, 34]
   
  }
},

		        
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		
		{
			module: "clock",
			position: "top_left"
		},

		

{
  module: "MMM-OpenWeatherMapForecast",
  header: "Weather",
  position: "top_left",
  classes: "default everyone",
  disabled: false,
  config: {
    apikey: "8ba231aad77397ab86e1ab08eab5b8c7",
    latitude: "40.157349",
    longitude: "-75.217079",      
    iconset: "3c",
	concise : true,
    //showPrecipitation : true,
    showWind : false,
    units : "imperial", 
	showInlineIcons : false,
    animateMainIconOnly : "true",
    forecastLayout : "tiled",
   maxDailiesToShow : "6",
    
  }
},    

{
	module: "MMM-Traffic",
	position: "top_left",
	config: {
		accessToken: "pk.eyJ1IjoibmhhYnJlMTciLCJhIjoiY2tzd2N5ZXZsMWlrbTJwbjFyMzg4cjl2cSJ9.VipySrH5vR4rBWFZ7v0duA",
		originCoords: "-75.244980,40.197270",
		destinationCoords: "-75.400162,40.090408",
		firstLine: "{duration} mins",
		secondLine: "Work",
		days: [0,1,2,3,4],
		hoursStart: "06:00",
		hoursEnd: "12:00",
	}
},



{
	module: "MMM-Traffic",
	position: "top_left",
	config: {
		accessToken: "pk.eyJ1IjoibmhhYnJlMTciLCJhIjoiY2tzd2N5ZXZsMWlrbTJwbjFyMzg4cjl2cSJ9.VipySrH5vR4rBWFZ7v0duA",
		originCoords: "-84.398848,33.755165",
		destinationCoords: "-84.398848,33.755165",
		firstLine: "{duration} mins",
		secondLine: "Your Mom's House",
		days: [0,1,2,3,4],
		hoursStart: "00:00",
		hoursEnd: "06:00",
	}
},


{
	module: "MMM-Traffic",
	position: "top_left",
	config: {
		accessToken: "pk.eyJ1IjoibmhhYnJlMTciLCJhIjoiY2tzd2N5ZXZsMWlrbTJwbjFyMzg4cjl2cSJ9.VipySrH5vR4rBWFZ7v0duA",
		originCoords: "-84.398848,33.755165",
		destinationCoords: "-84.398848,33.755165",
		firstLine: "{duration} mins",
		secondLine: "Your Mom's House",
		days: [0,1,2,3,4],
		hoursStart: "12:00",
		hoursEnd: "24:00",
	}
},


{
	module: "MMM-Traffic",
	position: "top_left",
	config: {
		accessToken: "pk.eyJ1IjoibmhhYnJlMTciLCJhIjoiY2tzd2N5ZXZsMWlrbTJwbjFyMzg4cjl2cSJ9.VipySrH5vR4rBWFZ7v0duA",
		originCoords: "-84.398848,33.755165",
		destinationCoords: "-84.398848,33.755165",
		firstLine: "{duration} mins",
		secondLine: "Your Mom's House",
		days: [5,6],
		hoursStart: "00:00",
		hoursEnd: "24:00",
	}
},




{
    module: 'MMM-Remote-Control',
    // uncomment the following line to show the URL of the remote control on the mirror
    // position: 'bottom_left',
    // you can hide this module afterwards from the remote control itself
    config: {
        customCommand: {},  // Optional, See "Using Custom Commands" below
        showModuleApiMenu: true, // Optional, Enable the Module Controls menu
        secureEndpoints: true, // Optional, See API/README.md
        // uncomment any of the lines below if you're gonna use it
        // customMenu: "custom_menu.json", // Optional, See "Custom Menu Items" below
        // apiKey: "", // Optional, See API/README.md for details
        // classes: {} // Optional, See "Custom Classes" below
    }
},

{
            module: "MMM-DailyPokemon",
            position: "top_right",
            config: {
                updateInterval: 600000,
                minPoke: 001,
                maxPoke: 802,
                grayscale: true,
                showType: true,
                language: "en",
                genera: true,
                gbaMode: true,
                nameSize: 26,
                flavorText: false
            }
        },
		
		{
			module: "MMM-PiTemp",
			position: "top_left",
			config: {}
		},


    /*    {
    module: "MMM-CyanideHappiness",
    position: "top_right",
    config: {
      updateInterval : 36000000,
      color: false,
      mode: "daily"
    }
} */



/*{
			module: "calendar",
			header: "US Holidays",
			position: "bottom_left",
			config: {
				calendars: [
					{
						symbol: "calendar-check",
						url: "webcal://www.calendarlabs.com/ical-calendar/ics/76/US_Holidays.ics"					}
				]
			}
		},*/
		
		
		 /*{
		module: "weather",
		position: "top_left",
		config: {
			// See 'Configuration options' for more information.
			type: 'daily'
		}
		},*/
		
		/* {
	  module: 'MMM-GoogleTrafficTimes',
            position: 'top_left',
            config: {
                key: 'AIzaSC1RD3MHt0fbfLnSEF1CYBnL1I1rNcPnbg',
                origin: '1113 Evans Rd, Lower Gwynedd Township, PA 19002',
                destination1: '230 Mall Blvd, King of Prussia, PA 19406',
                destination2: 'Gym:XXX',
                destination3: 'Beach:XXX',
                AvoidHighways: false,
                AvoidTolls: false,
               }
            },*/


/*{
	module: "MMM-Traffic",
	position: "top_left",
	config: {
		accessToken: "pk.eyJ1IjoibmhhYnJlMTciLCJhIjoiY2tzd2N5ZXZsMWlrbTJwbjFyMzg4cjl2cSJ9.VipySrH5vR4rBWFZ7v0duA",
		originCoords: "-75.244980,40.197270",
		destinationCoords: "-75.400162,40.090408",
	}
},*/
		
	
		
	
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
