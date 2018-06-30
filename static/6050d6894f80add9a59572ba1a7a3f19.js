
fetch('/details/39939').then(function(res){return res.json();}).then(function(myJson){myJson.production_companies.forEach(company=>{$('#company-39939').append(company.name);});})
