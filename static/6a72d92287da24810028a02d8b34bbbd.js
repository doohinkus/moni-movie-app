
fetch('../details/19507').then(function(res){return res.json();}).then(function(myJson){myJson.production_companies.forEach(company=>{$('#company-19507').append(company.name);});})
