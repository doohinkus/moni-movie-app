
fetch('/details/166428').then(function(res){return res.json();}).then(function(myJson){myJson.production_companies.forEach(company=>{$('#company-166428').append(company.name);});})
