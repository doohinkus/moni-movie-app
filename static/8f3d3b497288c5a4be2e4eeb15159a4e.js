
fetch('/details/9062').then(function(res){return res.json();}).then(function(myJson){myJson.production_companies.forEach(company=>{$('#company-9062').append(company.name+" ");});})
