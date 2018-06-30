
fetch('/details/38055').then(function(res){return res.json();}).then(function(myJson){myJson.production_companies.forEach(company=>{$('#company-38055').append(company.name);});})
