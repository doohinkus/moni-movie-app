
fetch('/details/808').then(function(res){return res.json();}).then(function(myJson){myJson.production_companies.forEach(company=>{$('#company-808').append(company.name+" ");});})
