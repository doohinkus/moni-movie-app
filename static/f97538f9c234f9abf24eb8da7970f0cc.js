
fetch('./details/408349').then(function(res){return res.json();}).then(function(myJson){myJson.production_companies.forEach(company=>{$('#company-408349').append(company.name);});})
