
fetch('/details/399055').then(function(res){return res.json();}).then(function(myJson){myJson.production_companies.forEach(company=>{$('#company-399055').append(company.name);});})
