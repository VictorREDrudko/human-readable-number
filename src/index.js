module.exports = function toReadable (number) {	
	let numberToString = (number) => {
		const str = String(number).length
	  if(str == 1) {
			if(number == 0){return 'zero'}
			if(number == 1){return 'one'}
			if(number == 2){return 'two'}
			if(number == 3){return 'three'}
			if(number == 4){return 'four'}
			if(number == 5){return 'five'}
			if(number == 6){return 'six'}
			if(number == 7){return 'seven'}
			if(number == 8){return 'eight'}
			if(number == 9){return 'nine'}
	  }
 
	  if(str == 2) {
			if(number == 10){return 'ten'}
			if(number == 11){return 'eleven'}
			if(number == 12){return 'twelve'}
			if(number == 13){return 'thirteen'}
			if(number == 14){return 'fourteen'}
			if(number == 15){return 'fifteen'}
			if(number == 16){return 'sixteen'}
			if(number == 17){return 'seventeen'}
			if(number == 18){return 'eighteen'}
			if(number == 19){return 'nineteen'}
			if(number == 20){return 'twenty'}
			if(number == 30){return 'thirty'}
			if(number == 40){return 'forty'}
			if(number == 50){return 'fifty'}
			if(number == 60){return 'sixty'}
			if(number == 70){return 'seventy'}
			if(number == 80){return 'eighty'}
			if(number == 90){return 'ninety'}
			
			if(number > 20 && number < 30){return 'twenty' + ' '+ numberToString(String(number)[1])}
			if(number > 30 && number < 40){return 'thirty' + ' '+ numberToString(String(number)[1])}
			if(number > 40 && number < 50){return 'forty' + ' '+ numberToString(String(number)[1])}
			if(number > 50 && number < 60){return 'fifty' + ' '+ numberToString(String(number)[1])}
			if(number > 60 && number < 70){return 'sixty' + ' '+ numberToString(String(number)[1])}
			if(number > 70 && number < 80){return 'seventy' + ' '+ numberToString(String(number)[1])}
			if(number > 80 && number < 90){return 'eighty' + ' '+ numberToString(String(number)[1])}
			if(number > 90 && number < 100){return 'ninety' + ' '+ numberToString(String(number)[1])}
	  }

		if(str == 3) {
			if(String(number).slice(1, 3) == '00') {return numberToString(String(number)[0]) + ' hundred'}
			if(number > 100 && number < 1000 && String(number).slice(1, 3) != '00') {return numberToString(String(number)[0]) + ' hundred ' + (numberToString(String(number).slice(1, 3)) || numberToString(String(number)[2]))}
	  }
}
	
	return numberToString(number)
}	