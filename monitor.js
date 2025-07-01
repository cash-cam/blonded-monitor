
async function check() {
	const products =  "https://blonded.co/products.json";

		const response = await fetch(products, );
		
		if(!response.ok){
		throw new error(`Response Status: ${response.status}`);
	} 

	const json = await response.json();
	productsArray = json.products;
	
	console.log(productsArray[0].variants);

	


	// }catch(error){
	// 	console.log(" penis");		
	// }

}

check();