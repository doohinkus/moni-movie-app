
fetch('./details/266405').then(function(res){return res.json();}).then(function(myJson){myJson.production_companies.forEach(company=>{$('#company-266405').append(company.name);});})
