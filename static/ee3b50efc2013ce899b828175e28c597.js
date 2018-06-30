
fetch('/details/810').then(function(res){return res.json();}).then(function(myJson){myJson.production_companies.forEach(company=>{$('#company-810').append(company.name);});})
