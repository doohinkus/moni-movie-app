
fetch('/details/550').then(function(res){return res.json();}).then(function(myJson){myJson.production_companies.forEach(company=>{$('#company-550').append(company.name+" ");});})
