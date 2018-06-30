
fetch('/details/87827').then(function(res){return res.json();}).then(function(myJson){myJson.production_companies.forEach(company=>{$('#company-87827').append(company.name+" ");});})
