
fetch('/details/9502').then(function(res){return res.json();}).then(function(myJson){myJson.production_companies.forEach(company=>{$('#company-9502').append(company.name);});})
