
fetch('/details/228161').then(function(res){return res.json();}).then(function(myJson){myJson.production_companies.forEach(company=>{$('#company-228161').append(company.name);});})
