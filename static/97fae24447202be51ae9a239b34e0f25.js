
fetch('/details/65057').then(function(res){return res.json();}).then(function(myJson){myJson.production_companies.forEach(company=>{$('#company-65057').append(company.name);});})
