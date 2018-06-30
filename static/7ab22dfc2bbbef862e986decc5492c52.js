
fetch('/details/84851').then(function(res){return res.json();}).then(function(myJson){myJson.production_companies.forEach(company=>{$('#company-84851').append(company.name+" ");});})
