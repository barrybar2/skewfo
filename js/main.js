var skewfo = {
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
	alterSkew: function() {
		var sxVal, syVal, byVal, pxVal, rxVal, ryVal, rzVal, mxVal, myVal;
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
	}

};

	// Slider
	jQuery(document).ready(function($) {
		$('.my-slider').unslider({
			
		});
	});

