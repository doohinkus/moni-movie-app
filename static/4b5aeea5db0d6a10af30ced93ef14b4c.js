
fetch('/details/394110').then(function(res){return res.json();}).then(function(myJson){myJson.production_companies.forEach(company=>{$('#company-394110').append(company.name+" ");});})
