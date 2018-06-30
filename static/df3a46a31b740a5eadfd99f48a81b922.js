
fetch('/details/376659').then(function(res){return res.json();}).then(function(myJson){myJson.production_companies.forEach(company=>{$('#company-376659').append(company.name+" ");});})
