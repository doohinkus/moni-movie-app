
fetch('/details/376866').then(function(res){return res.json();}).then(function(myJson){myJson.production_companies.forEach(company=>{$('#company-376866').append(company.name);});})
