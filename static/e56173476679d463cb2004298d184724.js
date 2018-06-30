
fetch('/details/32657').then(function(res){return res.json();}).then(function(myJson){myJson.production_companies.forEach(company=>{$('#company-32657').append(company.name+" ");});})
