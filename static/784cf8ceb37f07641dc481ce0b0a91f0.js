
fetch('/details/465649').then(function(res){return res.json();}).then(function(myJson){myJson.production_companies.forEach(company=>{$('#company-465649').append(company.name);});})
