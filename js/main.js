	var difference = 0;
	function alterSkew() {
				sxVal  = document.getElementById("sx").value;
				syVal  = document.getElementById("sy").value;
				document.getElementById("i1").value = sxVal;
				document.getElementById("i2").value = syVal;

				// SCALE
				// Do Not Preserve Aspect Ratio
				if(!document.getElementById("aspectT").checked){
					document.getElementById("by").disabled = false;
					bxVal  = document.getElementById("bx").value/100;
					byVal  = document.getElementById("by").value/100;
					document.getElementById("i3").value = bxVal;
					document.getElementById("i4").value = byVal;
				}
				// Preserve Aspect Ratio
				else {
					document.getElementById("by").disabled = true;

					bxVal  = document.getElementById("bx").value/100;
										byVal  = bxVal - difference;

					document.getElementById("i3").value = bxVal;
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

				document.getElementById("desktop").style.transform = "skew(" + sxVal + "deg, " + syVal + "deg) scale(" + bxVal + ", " + byVal + ")" + " perspective(" + pxVal + "px)  rotateY(" + ryVal + "deg) rotateX(" + rxVal + "deg) rotateZ(" + rzVal + "deg) translateX("+ mxVal +"px) translateY("+ myVal +"px)";
				
			}

			function reset() {
				document.getElementById("sx").value = 0;
				document.getElementById("sy").value = 0;
				document.getElementById("rx").value = 0;
				document.getElementById("ry").value = 0;
				document.getElementById("px").value = 90;
				document.getElementById("bx").value = 100;
				document.getElementById("by").value = 100;
				document.getElementById("mx").value = 0;
				document.getElementById("my").value = 0;

				alterSkew();
			}

			function aspectRatioChange() {
				difference = bxVal - document.getElementById("by").value/100;
			}

			function inputIframe(){
				var val, iframe;
				iframe = document.getElementById("skewFrame");
				val = document.getElementById('skewInput').value;
				iframe.src = val;
			}