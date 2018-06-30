
fetch('/details/44115').then(function(res){return res.json();}).then(function(myJson){myJson.production_companies.forEach(company=>{$('#company-44115').append(company.name);});})
