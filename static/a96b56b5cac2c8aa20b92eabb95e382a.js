
fetch('../details/99458').then(function(res){return res.json();}).then(function(myJson){myJson.production_companies.forEach(company=>{$('#company-99458').append(company.name);});})
