
fetch('/details/809').then(function(res){return res.json();}).then(function(myJson){myJson.production_companies.forEach(company=>{$('#company-809').append(company.name);});})
