
fetch('/details/9509').then(function(res){return res.json();}).then(function(myJson){myJson.production_companies.forEach(company=>{$('#company-9509').append(company.name+" ");});})
