
fetch('/details/11178').then(function(res){return res.json();}).then(function(myJson){myJson.production_companies.forEach(company=>{$('#company-11178').append(company.name+" ");});})
