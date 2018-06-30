
fetch('/details/136799').then(function(res){return res.json();}).then(function(myJson){myJson.production_companies.forEach(company=>{$('#company-136799').append(company.name+" ");});})
