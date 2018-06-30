
fetch('./details/51358').then(function(res){return res.json();}).then(function(myJson){myJson.production_companies.forEach(company=>{$('#company-51358').append(company.name);});})
