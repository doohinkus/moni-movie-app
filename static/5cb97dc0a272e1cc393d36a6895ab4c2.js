
fetch('../details/13791').then(function(res){return res.json();}).then(function(myJson){myJson.production_companies.forEach(company=>{$('#company-13791').append(company.name);});})
