
fetch('/details/350').then(function(res){return res.json();}).then(function(myJson){myJson.production_companies.forEach(company=>{$('#company-350').append(company.name+" ");});})
