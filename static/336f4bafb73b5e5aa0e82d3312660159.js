
fetch('/details/13186').then(function(res){return res.json();}).then(function(myJson){myJson.production_companies.forEach(company=>{$('#company-13186').append(company.name+" ");});})
