$(".measurements.index").ready(function(){
	console.log("charts");


	$('#highchart-gauge').highcharts({	
	    chart: {
	        type: 'gauge',
	        plotBackgroundColor: null,
	        plotBackgroundImage: null,
	        borderColor: null,
	        borderWidth: "20px",
	        plotBorderWidth: 0,
	        plotShadow: false,
	        width: 360,
	        height: 180
	    },

	    credits: {
      	enabled: false
  		},
	    
	    title: {
	    	text: null
	    },

	    pane: {
	        startAngle: -150,
	        endAngle: 150,
	        background: [{
	            backgroundColor: {
	                linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
	                stops: [
	                    [0, '#FFF'],
	                    [1, '#333']
	                ]
	            },
	            borderWidth: 0,
	            outerRadius: '109%'
	        }, {
	            backgroundColor: {
	                linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
	                stops: [
	                    [0, '#333'],
	                    [1, '#FFF']
	                ]
	            },
	            borderWidth: 1,
	            outerRadius: '107%'
	        }, {
	            // default background
	        }, {
	            backgroundColor: '#DDD',
	            borderWidth: 0,
	            outerRadius: '105%',
	            innerRadius: '103%'
	        }]
	    },
	       
	    // the value axis
	    yAxis: {
	        min: 0,
	        max: 2000,
	        
	        minorTickInterval: 'auto',
	        minorTickWidth: 1,
	        minorTickLength: 10,
	        minorTickPosition: 'inside',
	        minorTickColor: '#666',
	
	        tickPixelInterval: 30,
	        tickWidth: 2,
	        tickPosition: 'inside',
	        tickLength: 10,
	        tickColor: '#666',
	        labels: {
	            step: 2,
	            rotation: 'auto'
	        },
	        title: {
	            text: "ml"
	        },
	        plotBands: [{
	            from: 0,
	            to: 400,
	            color: '#DF5353' // red
	        }, {
	            from: 400,
	            to: 1200,
	            color: '#DDDF0D' // yellow
	        }, {
	            from: 1200,
	            to: 2000,
	            color: '#55BF3B' // green
	        }]        
	    },
	
	    series: [{
	        name: 'Milk Amount',
	        data: [gon.current_measurement],
	        tooltip: {
	            valueSuffix: ' ml'
	        }
	    }]
	
	});
		
});