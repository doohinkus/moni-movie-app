
fetch('/details/527490').then(function(res){return res.json();}).then(function(myJson){myJson.production_companies.forEach(company=>{$('#company-527490').append(company.name+" ");});})
