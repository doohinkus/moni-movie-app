
fetch('/details/401981').then(function(res){return res.json();}).then(function(myJson){myJson.production_companies.forEach(company=>{$('#company-401981').append(company.name+" ");});})
