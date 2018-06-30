
fetch('/details/154400').then(function(res){return res.json();}).then(function(myJson){myJson.production_companies.forEach(company=>{$('#company-154400').append(company.name);});})
