
fetch('./details/144317').then(function(res){return res.json();}).then(function(myJson){myJson.production_companies.forEach(company=>{$('#company-144317').append(company.name);});})
