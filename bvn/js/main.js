let input = document.getElementById("bvn"),
	submit = document.getElementById("submit-btn"),
	start = document.getElementById('start'),
	modal = document.getElementById("myModal"),
	pt = document.getElementById("p-t");


	input.style.display = "none";
	submit.style.display = "none";

start.addEventListener("click",function (){

		start.style.display = 'none';
		input.style.display = "inline";
		submit.style.display = "inline";	
})



submit.addEventListener("click",function (){

		let bvn = input.value;
		let apiUrl = `https://ravesandboxapi.flutterwave.com/v2/kyc/bvn/${bvn}?seckey=${seckey}`/*To get the bvn,use a secret Key from a rave a rave account*/
		fetch(apiUrl)
		.then(function(response){
			return response.json();
		}) 
		.then(function(myJson) {
		console.log(JSON.stringify(myJson));
    	let resp = JSON.stringify(myJson);
    	pt.innerText = resp;
    	modal.style.display = "block";
 		 });



	
})

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

