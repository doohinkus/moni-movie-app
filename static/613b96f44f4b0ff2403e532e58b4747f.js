
fetch('/details/4032').then(function(res){return res.json();}).then(function(myJson){myJson.production_companies.forEach(company=>{$('#company-4032').append(company.name+" ");});})
