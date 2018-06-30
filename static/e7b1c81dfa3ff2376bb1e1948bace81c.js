
fetch('/details/44214').then(function(res){return res.json();}).then(function(myJson){myJson.production_companies.forEach(company=>{$('#company-44214').append(company.name);});})
