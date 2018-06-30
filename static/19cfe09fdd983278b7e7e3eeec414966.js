
fetch('/details/359940').then(function(res){return res.json();}).then(function(myJson){myJson.production_companies.forEach(company=>{$('#company-359940').append(company.name);});})
