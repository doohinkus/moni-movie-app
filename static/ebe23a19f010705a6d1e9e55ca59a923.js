
fetch('/details/116005').then(function(res){return res.json();}).then(function(myJson){myJson.production_companies.forEach(company=>{$('#company-116005').append(company.name+" ");});})
