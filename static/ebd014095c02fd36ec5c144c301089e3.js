
fetch('/details/25643').then(function(res){return res.json();}).then(function(myJson){myJson.production_companies.forEach(company=>{$('#company-25643').append(company.name+" ");});})
