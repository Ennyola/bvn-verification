let input = document.getElementById("bvn"),
	submit = document.getElementById("submit-btn"),
	start = document.getElementById('start'),
	bvnDetails = document.getElementById('bvn-details'),
	displayText = document.getElementById('display');
		

	input.style.display = "none";
	submit.style.display = "none";

start.addEventListener("click",function (){
		bvnDetails.style.display = "block"
		start.style.display = 'none';
		input.style.display = "inline";
		submit.style.display = "inline";
			
})



submit.addEventListener("click",function (){

		let bvn = input.value;
		let apiUrl = `https://ravesandboxapi.flutterwave.com/v2/kyc/bvn/${bvn}?seckey=FLWSECK-280f6e0ee6b39e977231566a1d46c359-X`
		fetch(apiUrl)
		.then(function(response){
			return response.json();
		}) 
		.then(function(myJson) {
		console.log(JSON.stringify(myJson));
    	let resp = JSON.stringify(myJson);
    	displayText.style.display = "block";
 		bvnDetails.innerText = resp;
 		 });




	
})


