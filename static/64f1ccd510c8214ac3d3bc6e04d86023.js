
console.log(companies)
fetch('/details/425136').then(function(res){return res.json();}).then(function(myJson){myJson.production_companies.forEach(company=>{$('#company-425136').append(company.name+" ");});})
