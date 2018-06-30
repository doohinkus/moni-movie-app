
fetch('/details/7518').then(function(res){return res.json();}).then(function(myJson){myJson.production_companies.forEach(company=>{$('#company-7518').append(company.name);});})
