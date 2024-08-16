function is_an_even_number(array){
	var count = 0;
	for(let i = 0 ; i < array.length; i++) {
		if (array[i] % 2 === 0){
			count++;
		}
	}
	return count;
}
