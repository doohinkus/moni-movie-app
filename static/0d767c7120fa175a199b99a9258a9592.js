
fetch('/details/268238').then(function(res){return res.json();}).then(function(myJson){myJson.production_companies.forEach(company=>{$('#company-268238').append(company.name);});})
