
fetch('/details/65538').then(function(res){return res.json();}).then(function(myJson){myJson.production_companies.forEach(company=>{$('#company-65538').append(company.name);});})
