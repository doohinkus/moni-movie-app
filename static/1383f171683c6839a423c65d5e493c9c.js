
fetch('/details/454630').then(function(res){return res.json();}).then(function(myJson){myJson.production_companies.forEach(company=>{$('#company-454630').append(company.name);});})
