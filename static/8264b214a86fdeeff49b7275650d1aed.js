
fetch('/details/151056').then(function(res){return res.json();}).then(function(myJson){myJson.production_companies.forEach(company=>{$('#company-151056').append(company.name+" ");});})
