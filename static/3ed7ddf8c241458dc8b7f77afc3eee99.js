
fetch('/details/450062').then(function(res){return res.json();}).then(function(myJson){myJson.production_companies.forEach(company=>{$('#company-450062').append(company.name+" ");});})
