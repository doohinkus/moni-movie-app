
fetch('/details/432787').then(function(res){return res.json();}).then(function(myJson){myJson.production_companies.forEach(company=>{$('#company-432787').append(company.name+" ");});})
