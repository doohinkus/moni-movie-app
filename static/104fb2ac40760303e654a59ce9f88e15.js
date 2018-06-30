
fetch('/details/364691').then(function(res){return res.json();}).then(function(myJson){myJson.production_companies.forEach(company=>{$('#company-364691').append(company.name+" ");});})
