
fetch('/details/379149').then(function(res){return res.json();}).then(function(myJson){myJson.production_companies.forEach(company=>{$('#company-379149').append(company.name+" ");});})
