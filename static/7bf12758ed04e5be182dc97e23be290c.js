
fetch('/details/42599').then(function(res){return res.json();}).then(function(myJson){myJson.production_companies.forEach(company=>{$('#company-42599').append(company.name+" ");});})
