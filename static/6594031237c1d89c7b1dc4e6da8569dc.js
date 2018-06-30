
fetch('/details/8916').then(function(res){return res.json();}).then(function(myJson){myJson.production_companies.forEach(company=>{$('#company-8916').append(company.name+" ");});})
