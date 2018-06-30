
fetch('/details/61837').then(function(res){return res.json();}).then(function(myJson){myJson.production_companies.forEach(company=>{$('#company-61837').append(company.name);});})
