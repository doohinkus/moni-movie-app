
fetch('/details/64504').then(function(res){return res.json();}).then(function(myJson){myJson.production_companies.forEach(company=>{$('#company-64504').append(company.name+" ");});})
