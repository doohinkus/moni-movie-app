
console.log(companies)
fetch('/details/429300').then(function(res){return res.json();}).then(function(myJson){myJson.production_companies.forEach(company=>{$('#company-429300').append(company.name+" ");});})
