
fetch('./details/133601').then(function(res){return res.json();}).then(function(myJson){myJson.production_companies.forEach(company=>{$('#company-133601').append(company.name);});})
