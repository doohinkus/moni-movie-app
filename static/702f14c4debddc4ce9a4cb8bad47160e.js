
fetch('/details/369192').then(function(res){return res.json();}).then(function(myJson){myJson.production_companies.forEach(company=>{$('#company-369192').append(company.name);});})
