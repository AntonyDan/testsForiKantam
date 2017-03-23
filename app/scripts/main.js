//Fifth task
//Receives arrays and numbers
function clickAnchor(){
	function Total(){
		let sum = 0
		for(let i = 0;i < arguments.length; i++){
	   		if (Array.isArray(arguments[i])){
				sum = arguments[0].reduce(function(a, b) {
				  return a + b;
				});
	      		continue;
	    	}
	    	sum = sum + arguments[i];
	  	}
	  return sum;
	}
	let output = [1,2,6,1];
	alert(Total(output, 1, 2));


	//Receives only array

	function Total1(){
		let sum;
		if (Array.isArray(arguments[0])){
			sum = arguments[0].reduce(function(a, b) {
			  return a + b;
			});
	    }
	    return(sum);
	}

	let output1 = [1,2,6,1];
	alert(Total1(output1));
}
	
document.querySelector('#clickAnchor').addEventListener('click', clickAnchor);



//Sixth task
$.fn.PureText = function() {
	var array = [],
		pureArray;
	this.contents()
		.filter(function() {
    		return this.nodeType === 3;
    	})
    	.map(function (index,element) {
    		array.push($(this).text());
    	});
    pureArray = array.map(function (argument) {
    	return argument.trim();
    })
    .filter(function(argument) {
    	return (argument.length > 0);
    });
    return pureArray.join(' ');  
};
var output = $('#container').PureText(); // should return “Lorem Ipsum is simply”
console.log(output);
