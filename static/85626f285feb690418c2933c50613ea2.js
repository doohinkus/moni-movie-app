
fetch('/details/400928').then(function(res){return res.json();}).then(function(myJson){myJson.production_companies.forEach(company=>{$('#company-400928').append(company.name);});})
