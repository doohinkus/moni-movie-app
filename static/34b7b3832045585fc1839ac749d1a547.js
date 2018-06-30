
fetch('/details/23049').then(function(res){return res.json();}).then(function(myJson){myJson.production_companies.forEach(company=>{$('#company-23049').append(company.name);});})
