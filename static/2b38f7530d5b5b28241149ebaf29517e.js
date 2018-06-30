
fetch('/details/30826').then(function(res){return res.json();}).then(function(myJson){myJson.production_companies.forEach(company=>{$('#company-30826').append(company.name);});})
