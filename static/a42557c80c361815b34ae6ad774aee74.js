
console.log(companies)
fetch('/details/321258').then(function(res){return res.json();}).then(function(myJson){myJson.production_companies.forEach(company=>{$('#company-321258').append(company.name+" ");});})
