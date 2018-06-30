
fetch('/details/53627').then(function(res){return res.json();}).then(function(myJson){myJson.production_companies.forEach(company=>{$('#company-53627').append(company.name);});})
