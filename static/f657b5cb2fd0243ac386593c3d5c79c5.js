
fetch('/details/468').then(function(res){return res.json();}).then(function(myJson){myJson.production_companies.forEach(company=>{$('#company-468').append(company.name+" ");});})
