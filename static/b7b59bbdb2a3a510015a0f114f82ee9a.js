
fetch('/details/19913').then(function(res){return res.json();}).then(function(myJson){myJson.production_companies.forEach(company=>{$('#company-19913').append(company.name);});})
