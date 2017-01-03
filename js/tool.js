/* This file needs to be deleted!!!! */ 
var skewtool = {
	imageData : {
		1: 'iMac-desktop-skew',
		2: 'samsung-mobile-skew',
		3: 'iPad-tablet-skew',
		4: 'iPhone-mobile-skew'
	},
	websites: [],
	difference : {
		value: 0,
		getValue: function() {
			return this.value;
		},
		setValue: function(setValue) {
			this.value = setValue;
		}
	},
	bxVal :{
		value: 0,
		getValue: function() {
			return this.value;
		},
		setValue: function(setValue){
			this.value = setValue;
		}
	},
	adjustOne: function(upOrDown, input, slider) {
		// rz, i11
		var inp = parseInt(document.getElementById(input).value);
		var sli = parseInt(document.getElementById(slider).value);

		if(upOrDown == "+") {
			inp += 1; sli += 1;
		}
		else {
			inp -= 1; sli -= 1;
		}

		document.getElementById(input).value = inp;
		document.getElementById(slider).value = sli;
		this.alterSkew();
	},
	alterSkew: function() {
		var sxVal, syVal, byVal, pxVal, rxVal, ryVal, rzVal, mxVal, myVal, opVal;
		sxVal  = document.getElementById("sx").value;
		syVal  = document.getElementById("sy").value;
		document.getElementById("i1").value = sxVal;
		document.getElementById("i2").value = syVal;

		// SCALE
		// Do Not Preserve Aspect Ratio
		if(!document.getElementById("aspectT").checked){
			document.getElementById("by").disabled = false;
			this.bxVal.setValue(document.getElementById("bx").value/100);
			byVal  = document.getElementById("by").value/100;
			document.getElementById("i3").value = this.bxVal.getValue();
			document.getElementById("i4").value = byVal;
		}
		// Preserve Aspect Ratio
		else {
			document.getElementById("by").disabled = true;

			this.bxVal.setValue(document.getElementById("bx").value/100);
								byVal  = this.bxVal.getValue() - this.difference.getValue();

			document.getElementById("i3").value = this.bxVal.getValue();
			document.getElementById("i4").value = byVal;
		}

		// PERSPECTIVE
		pxVal  = document.getElementById("px").value;
		document.getElementById("i5").value = pxVal;

		// ROTATION
		rxVal  = document.getElementById("rx").value;
		ryVal  = document.getElementById("ry").value;
		rzVal  = document.getElementById("rz").value;
		document.getElementById("i7").value = rxVal;
		document.getElementById("i8").value = ryVal;
		document.getElementById("i11").value = rzVal;

		// Translation MOVE
		mxVal  = document.getElementById("mx").value;
		myVal  = document.getElementById("my").value * -1;
		document.getElementById("i9").value = mxVal;
		document.getElementById("i10").value = myVal;

		// OPACITY
		opVal = document.getElementById("op").value;
		$(".skewFrame").css("opacity", opVal/100);
		document.getElementById("i12").value = opVal;
		/*document.getElementsByClassName("skewFrame")[0].style.opacity = opVal;
		document.getElementsByClassName("skewFrame")[1].style.opacity = opVal;
		document.getElementsByClassName("skewFrame")[2].style.opacity = opVal;*/

		
		document.getElementById("iframeWrapper").style.transform = "skew(" + sxVal + "deg, " + syVal + "deg) scale(" + this.bxVal.getValue() + ", " + byVal + ")" + " perspective(" + pxVal + "px)  rotateY(" + ryVal + "deg) rotateX(" + rxVal + "deg) rotateZ(" + rzVal + "deg) translateX("+ mxVal +"px) translateY("+ myVal +"px)";
		
	},
	setTablet: function() {
		document.getElementsByClassName("skewFrame")[0].id = "iframe-tablet";
	},
	setMobile: function() {
		document.getElementsByClassName("skewFrame")[0].id = "iframe-mobile";
	},
	setDesktop: function() {
		document.getElementsByClassName("skewFrame")[0].id = "iframe-desktop";
	},
	reset: function() {
		document.getElementById("sx").value = 0;
		document.getElementById("sy").value = 0;
		document.getElementById("rx").value = 0;
		document.getElementById("ry").value = 0;
		document.getElementById("rz").value = 0;
		document.getElementById("px").value = 90;
		document.getElementById("bx").value = 100;
		document.getElementById("by").value = 100;
		document.getElementById("mx").value = 0;
		document.getElementById("my").value = 0;

		this.alterSkew();
	},
	aspectRatioChange: function() {
		this.difference.setValue(this.bxVal.getValue() - document.getElementById("by").value/100); 
	},
	inputIframe: function() {
		var val, iframe;
			iframe = document.getElementsByClassName("skewFrame")[0];
			val = document.getElementById('skewInput').value;
			iframe.src = val;
		$('.my-slider').unslider({
					
		});
	},
	bindWebsites: function(){
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
	submitWebsite: function(){
		var picker, imageSource, url, imgClass;
				url = $('#websiteInput')[0].value;
	        	picker = $("select").data('picker').picker;
	        	imageSource = picker.find('.selected')[0].children[0].getAttribute("src");
	        	imgClass = this.getImageClass(imageSource);
	        	imgClass = imgClass += " iframeWindow";
	        	website = new this.websiteObject(url, imageSource, imgClass);
	        	this.websites.push(website);
	        	$('#myModal').modal('hide');
	},
	websiteObject: function(url, img, cls){
		this.url = url;
		this.img = img;
		this.cls = cls;
	}
};


	
