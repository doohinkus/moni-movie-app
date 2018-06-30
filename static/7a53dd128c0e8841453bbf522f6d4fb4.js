
fetch('/details/953').then(function(res){return res.json();}).then(function(myJson){myJson.production_companies.forEach(company=>{$('#company-953').append(company.name+" ");});})
