
fetch('/details/49519').then(function(res){return res.json();}).then(function(myJson){myJson.production_companies.forEach(company=>{$('#company-49519').append(company.name+" ");});})
