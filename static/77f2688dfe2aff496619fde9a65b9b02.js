
fetch('./details/136426').then(function(res){return res.json();}).then(function(myJson){myJson.production_companies.forEach(company=>{$('#company-136426').append(company.name);});})
