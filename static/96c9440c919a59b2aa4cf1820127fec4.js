
fetch('/details/120467').then(function(res){return res.json();}).then(function(myJson){myJson.production_companies.forEach(company=>{$('#company-120467').append(company.name);});})
