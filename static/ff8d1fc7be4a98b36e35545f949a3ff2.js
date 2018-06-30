
fetch('/details/77805').then(function(res){return res.json();}).then(function(myJson){myJson.production_companies.forEach(company=>{$('#company-77805').append(company.name);});})
