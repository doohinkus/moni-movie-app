
fetch('/details/397631').then(function(res){return res.json();}).then(function(myJson){myJson.production_companies.forEach(company=>{$('#company-397631').append(company.name+" ");});})
