
fetch('./details/28555').then(function(res){return res.json();}).then(function(myJson){myJson.production_companies.forEach(company=>{$('#company-28555').append(company.name);});})
