
fetch('/details/9023').then(function(res){return res.json();}).then(function(myJson){myJson.production_companies.forEach(company=>{$('#company-9023').append(company.name+" ");});})
