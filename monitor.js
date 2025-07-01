
var productsLength;
var currentProducts = [];

async function grabProducts() {
	const products =  "https://blonded.co/products.json";

		const response = await fetch(products);
		
		if(!response.ok){
		throw new error(`Response Status: ${response.status}`);
	} 

	const json = await response.json();
	var productsArray = json.products;
	
	checkNewProdcuts(productsArray);
	checkIfInStock(productsArray);
	
}


function checkNewProdcuts(productsArray){
	// console.log(productsArray)
	var currentProducts  = [] ;
	

	for(var i = 0; i <  productsArray.length; i++){
		var curr = productsArray[i].variants[0];
		var title = productsArray[i].title;
		// console.log(title);
		// console.log(curr);
		const product = {
			product_id : curr.featured_image.product_id,
			product_name : title,
			available: curr.available,
			img : curr.featured_image.src,
		}
		if(!currentProducts.includes(product)){
			// discordNotification(product)
			currentProducts.push(product);
			console.log(product);
		}

	}
}

function checkIfInStock(productsArray){
	
}


// discordNotification(product){

// }

grabProducts();