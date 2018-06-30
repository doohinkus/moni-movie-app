
fetch('/details/250734').then(function(res){return res.json();}).then(function(myJson){myJson.production_companies.forEach(company=>{$('#company-250734').append(company.name);});})
