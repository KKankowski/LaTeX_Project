
		function calculate() {
			var weight = document.Form.weight.value
			var height = document.Form.height.value
			var len = document.Form.style.length
			var i
			var style=""
			
			
			if(weight > 0 && height > 0){	
				var pointer = weight/(height/100*height/100)
				if(pointer < 18.5){
					document.Form.size.value = "Jesteś bardzo lekki, wybierz latawiec z przedziału 7-9m2 oraz deskę nie większą niż 136cm"
				}
				if(pointer > 18.5 && pointer < 25){
					document.Form.size.value = "Jesteś stereotypowym 'Kajciarzem', wybierz latawiec z przedziału 10-12m2 oraz deskę pomiędzy 138-144cm"
				}
				if(pointer > 25){
					document.Form.size.value = "Nie musisz chudnąć, po prostu wybierz latawiec z przedziału 14-17m2 oraz deskę powyżej 150cm"
				}
			}
			else{
				alert("coś poszło nie tak, spróbuj ponownie")
			}
			
			
			for ( i = 0; i < len; i++) {
				if (document.Form.style[i].checked) {
					style = document.Form.style[i].value
					break
				}
			}
			
			if ( style == "" ){
				document.Form.setup.value = "Jesteś niezdecydowany bierz Jimmie oraz Rebela"
			}
			
			else if ( style == "BA" ){
				document.Form.setup.value = "Zdecydowanie bierz TS oraz Rebela"
			}
			
			else if ( style == "UH" ){
				document.Form.setup.value = "Mamy tu kocura! Bierz TS oraz Vegasa"
			}
			
			else if ( style == "FB" ){
				document.Form.setup.value = "Lubisz lewitować, bierz FoilBoarda razem z latawcem Dice"
			}
			
			else if ( style == "AR" ){
				document.Form.setup.value = "Jesteś normikiem... bierz gamblera i EVO"
			}
			
		}