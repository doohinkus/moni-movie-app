
fetch('/details/1266').then(function(res){return res.json();}).then(function(myJson){myJson.production_companies.forEach(company=>{$('#company-1266').append(company.name);});})
