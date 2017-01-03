var skewfo = {
	// change here and add imageName.png to img folder to add new one 
	imageData : [
		'iMac-desktop-skew',
		'samsung-mobile-skew',
		'iPad-tablet-skew',
		'iPhone-mobile-skew'
	],
	randomFlatColors: [
		"#1abc9c",
		"#2ecc71",
		"#3498db",
		"#9b59b6",
		"#34495e",
		"#16a085",
		"#27ae60",
		"#2980b9",
		"#8e44ad",
		"#2c3e50",
		"#f1c40f",
		"#e67e22",
		"#e74c3c",
		"#ecf0f1",
		"#95a5a6",
		"#f39c12",
		"#d35400",
		"#c0392b",
		"#bdc3c7",
		"#7f8c8d"
	],
	websites: [],
	inputIframe: function() {
		var val, iframe;
			iframe = document.getElementsByClassName("skewFrame")[0];
			val = document.getElementById('skewInput').value;
			iframe.src = val;
	},
	bindWebsites: function(){
		rivets.binders.bgcolor = function(el, value) {
		  el.style.background = value;
		}
		var websitelistBinding = websitelistBinding || {};
			var model = {
				websites: {
					items: this.websites
				}
			};
			websitelistBinding = rivets.bind($('.websitesInserted'), model);
			this.bindEvents();
	},
	bindEvents: function() {
		$('.delete-button').click(function() {
			console.log('here');
		});
		
	},
	getImageClass: function(img){
		var returnVal
		$('.image-picker').children().each(function(index){
			if($(this).data('img-src') === img){
				returnVal = $(this).data('platform');
			}
		});
		return returnVal;
	},
	submitWebsite: function(submitWebsite){
		var picker, imageSource, url, imgClass, imgCol;
				url = $('.form-control')[0].value;
				imgCol = this.getRandomColor();
				// loop through all the images and build up objects
        		for(var i=0; i<this.imageData.length; i++){
        			imageSource = "img/" + this.imageData[i] + ".png";
        			imgClass = this.imageData[i] + " iframeWindow";
        			website = new this.websiteObject(url, imageSource, imgClass, imgCol);
					this.websites.push(website);
        		}
	},
	//set a random flat color and remove from array when done
	getRandomColor: function() {
		var arr, randNum;
		arr = this.randomFlatColors;
		randNum = Math.floor(Math.random() * arr.length);
		return arr[randNum];
	},
	websiteObject: function(url, img, cls, col){
		this.url = url;
		this.img = img;
		this.cls = cls;
		this.colour = col;
	}
};


	
