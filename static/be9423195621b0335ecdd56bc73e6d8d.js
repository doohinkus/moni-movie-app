
console.log(companies)
fetch('/details/376660').then(function(res){return res.json();}).then(function(myJson){myJson.production_companies.forEach(company=>{$('#company-376660').append(company.name+" ");});})
