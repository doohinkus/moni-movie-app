
fetch('/details/286565').then(function(res){return res.json();}).then(function(myJson){myJson.production_companies.forEach(company=>{$('#company-286565').append(company.name+" ");});})
