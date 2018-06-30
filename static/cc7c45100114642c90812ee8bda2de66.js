
fetch('/details/449176').then(function(res){return res.json();}).then(function(myJson){myJson.production_companies.forEach(company=>{$('#company-449176').append(company.name+" ");});})
