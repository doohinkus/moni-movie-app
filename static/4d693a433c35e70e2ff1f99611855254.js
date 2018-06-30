
fetch('/details/105280').then(function(res){return res.json();}).then(function(myJson){myJson.production_companies.forEach(company=>{$('#company-105280').append(company.name+" ");});})
