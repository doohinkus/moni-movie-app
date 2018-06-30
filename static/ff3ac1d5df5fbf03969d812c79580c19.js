
fetch('/details/55725').then(function(res){return res.json();}).then(function(myJson){myJson.production_companies.forEach(company=>{$('#company-55725').append(company.name);});})
