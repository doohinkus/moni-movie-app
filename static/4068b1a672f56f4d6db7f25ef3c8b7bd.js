
fetch('/details/12405').then(function(res){return res.json();}).then(function(myJson){myJson.production_companies.forEach(company=>{$('#company-12405').append(company.name);});})
