
fetch('/details/511785').then(function(res){return res.json();}).then(function(myJson){myJson.production_companies.forEach(company=>{$('#company-511785').append(company.name+" ");});})
