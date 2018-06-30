
fetch('/details/321417').then(function(res){return res.json();}).then(function(myJson){myJson.production_companies.forEach(company=>{$('#company-321417').append(company.name);});})
