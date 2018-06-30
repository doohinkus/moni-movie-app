
fetch('/details/16198').then(function(res){return res.json();}).then(function(myJson){myJson.production_companies.forEach(company=>{$('#company-16198').append(company.name);});})
