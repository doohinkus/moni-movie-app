
fetch('/details/45622').then(function(res){return res.json();}).then(function(myJson){myJson.production_companies.forEach(company=>{$('#company-45622').append(company.name+" ");});})
