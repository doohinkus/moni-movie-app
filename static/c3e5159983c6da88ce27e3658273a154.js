
fetch('/details/195589').then(function(res){return res.json();}).then(function(myJson){myJson.production_companies.forEach(company=>{$('#company-195589').append(company.name);});})
