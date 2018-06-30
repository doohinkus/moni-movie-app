
fetch('/details/357530').then(function(res){return res.json();}).then(function(myJson){myJson.production_companies.forEach(company=>{$('#company-357530').append(company.name+" ");});})
