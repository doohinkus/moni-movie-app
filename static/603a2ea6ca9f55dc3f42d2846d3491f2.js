
fetch('/details/10527').then(function(res){return res.json();}).then(function(myJson){myJson.production_companies.forEach(company=>{$('#company-10527').append(company.name);});})
