
fetch('/details/276844').then(function(res){return res.json();}).then(function(myJson){myJson.production_companies.forEach(company=>{$('#company-276844').append(company.name+" ");});})
