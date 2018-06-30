
fetch('/details/508').then(function(res){return res.json();}).then(function(myJson){myJson.production_companies.forEach(company=>{$('#company-508').append(company.name+" ");});})
