
fetch('/details/81836').then(function(res){return res.json();}).then(function(myJson){myJson.production_companies.forEach(company=>{$('#company-81836').append(company.name+" ");});})
