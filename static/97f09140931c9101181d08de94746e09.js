
console.log(companies)
fetch('/details/458594').then(function(res){return res.json();}).then(function(myJson){myJson.production_companies.forEach(company=>{$('#company-458594').append(company.name+" ");});})
