
fetch('/details/270946').then(function(res){return res.json();}).then(function(myJson){myJson.production_companies.forEach(company=>{$('#company-270946').append(company.name);});})
