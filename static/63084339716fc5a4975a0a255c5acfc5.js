
fetch('/details/61791').then(function(res){return res.json();}).then(function(myJson){myJson.production_companies.forEach(company=>{$('#company-61791').append(company.name+" ");});})
