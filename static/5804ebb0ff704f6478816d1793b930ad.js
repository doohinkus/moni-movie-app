
fetch('/details/60302').then(function(res){return res.json();}).then(function(myJson){myJson.production_companies.forEach(company=>{$('#company-60302').append(company.name+" ");});})
