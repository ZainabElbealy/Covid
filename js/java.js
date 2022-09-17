let countryChoose = document.querySelector('select')
let form = document.querySelector('form')
let uList=document.querySelector('ul')
let showInput=document.querySelector('input')
let liElements;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f8ba52f694msh074ee05bd6c81b2p1fbdfbjsna92fcd45cd55',
		'X-RapidAPI-Host': 'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com'
	}
};

fetch('https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/', options)
	.then(res => res.json())
	.then(data =>{
		data.forEach(element => {
			//console.log(element)
			let  countryOption = `<option value='${element.Country}'>${element.Country}</option>`
			countryChoose.innerHTML+=countryOption
			
			form.addEventListener('submit',(x)=>{
				liElements=`<li class="list-group-item list-group-item-primary m-2">ActiveCases : ${element.ActiveCases}</li>
							<li class="list-group-item list-group-item-secondary m-2">Infection_Risk : ${element.Infection_Risk}</li>
							<li class="list-group-item list-group-item-success m-2">NewRecovered : ${element.NewRecovered}</li>
							<li class="list-group-item list-group-item-danger m-2">TotalDeaths : ${element.TotalDeaths}</li>`	
				x.preventDefault();
				if (countryChoose.value===element.Country){
					uList.innerHTML=liElements;
				}
													 
				   })

		});
	
							
		
		
		 })
	.catch(err => console.error(err));



	


	//    function Exchange(){
	// 	fetch(`https://v6.exchangerate-api.com/v6/b340bbce3b714d0a533daab9/latest/${countryForm.value}`)
	// 	.then(res=>res.json())
	// 	.then((data)=>{
	// 		//console.log(data)
	// 		dataNumbers=data.conversion_rates[countryTo.value];
			
	// 		 console.log(dataNumbers)
	// 		 let countryFormV=countryForm.value;
	// 		let countryToV=countryTo.value;
	// 		let amountInput=amount.value;
	// 		// console.log(countryFormInputV)
	// 		   let convert=amountInput* dataNumbers 
	// 		result.innerHTML=`${amountInput} ${countryFormV} = ${convert} ${countryToV}`
			
			
		
		
	// 	})
	// }