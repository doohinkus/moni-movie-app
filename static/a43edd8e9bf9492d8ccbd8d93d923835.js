
fetch('/details/222935').then(function(res){return res.json();}).then(function(myJson){myJson.production_companies.forEach(company=>{$('#company-222935').append(company.name+" ");});})
