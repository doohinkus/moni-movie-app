
fetch('/details/268531').then(function(res){return res.json();}).then(function(myJson){myJson.production_companies.forEach(company=>{$('#company-268531').append(company.name+" ");});})
