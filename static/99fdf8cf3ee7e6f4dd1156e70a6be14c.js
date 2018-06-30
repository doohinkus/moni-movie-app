
fetch('/details/127585').then(function(res){return res.json();}).then(function(myJson){myJson.production_companies.forEach(company=>{$('#company-127585').append(company.name+" ");});})
