
fetch('/details/77469').then(function(res){return res.json();}).then(function(myJson){myJson.production_companies.forEach(company=>{$('#company-77469').append(company.name);});})
