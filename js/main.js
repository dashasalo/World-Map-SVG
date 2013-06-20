var visitedCountries = {
			'PE': {'c': '#5689b9', 'n':'Peru'},
			'ID': {'c': '#768e11', 'n':'Indonesia'},
			'CN': {'c': '#ac2e2a', 'n':'China'},  
			'UA': {'c': '#eaaf06', 'n':'Ukraine'},
			'BY': {'c': '#768e11', 'n':'Belarus'},
			'KZ': {'c': '#9ce50a', 'n':'Kazakhstan'},
			'TR': {'c': '#e37144', 'n':'Turkey'},
			'ZA': {'c': '#3cb317', 'n':'South Africa'},
			'AR': {'c': '#57b788', 'n':'Argentina'}, 
			'CL': {'c': '#735331', 'n':'Chile'}, 
			'CU': {'c': '#e37144', 'n':'Cuba'}, 
			'MX': {'c': '#eaaf06', 'n':'Mexico'}, 
			'BR': {'c': '#eaaf06', 'n':'Brazil'}, 
			'RU': {'c':'#f9ff40', 'n': 'Russian Federation'}, 
			'US':{'c':'#9ce50a', 'n': 'United States'}, 
			'GB':{'c':'#768e11', 'n': 'United Kingdom'}, 
			'FR':{'c':'#eaaf06', 'n': 'France'}, 
			'IT':{'c':'#9ce50a', 'n': 'Italy'}, 
			'EG':{'c':'#3cb317', 'n': 'Egypt'}, 
			'AT':{'c':'#e37144', 'n': 'Austria'}}; 
		
		$(document).ready(function()
		{
			function lon2x(lon) 
			{
				var xfactor = 2.6938;
				var xoffset = 465.4;
				var x = (lon * xfactor) + xoffset;
				return x;
			}
			function lat2y(lat) 
			{
				var yfactor = -2.6938;
				var yoffset = 227.066;
				var y = (lat * yfactor) + yoffset;
				return y;
			}
			
			var paper = Raphael('mapHolder');
			var map = getPaths(paper, { fill: "#333", stroke: "#000", "stroke-width": .5, "stroke-linejoin": "round" });
			var galleriaThemeLoaded = false;
			var blackShim;
			
			for (var countryCode in map) {							        
    	        
	            (function (countryPath, countryCode) 
	            {
					if (visitedCountries[countryCode])
					{
						countryPath.attr({fill: visitedCountries[countryCode].c});
					}
					else
					{
						countryPath.attr({opacity: 0.6});
						countryPath.color = Raphael.getColor();
						
						countryPath[0].onmouseover = function() 
						{
							countryPath.animate({fill: countryPath.color, stroke: countryPath.color }, 300);
							paper.safari();
						};
						countryPath[0].onmouseout = function() 
						{
							countryPath.animate({fill: "#333", stroke: "#000"}, 300);
							paper.safari();
						};
					}
				})(map[countryCode], countryCode);
			}; 
		});