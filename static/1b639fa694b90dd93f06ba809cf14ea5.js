
fetch('/details/396371').then(function(res){return res.json();}).then(function(myJson){myJson.production_companies.forEach(company=>{$('#company-396371').append(company.name+" ");});})
