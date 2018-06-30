
fetch('/details/409537').then(function(res){return res.json();}).then(function(myJson){myJson.production_companies.forEach(company=>{$('#company-409537').append(company.name+" ");});})
