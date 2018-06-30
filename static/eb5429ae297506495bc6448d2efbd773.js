
fetch('/details/50646').then(function(res){return res.json();}).then(function(myJson){myJson.production_companies.forEach(company=>{$('#company-50646').append(company.name+" ");});})
