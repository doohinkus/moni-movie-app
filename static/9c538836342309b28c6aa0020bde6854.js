
fetch('/details/6477').then(function(res){return res.json();}).then(function(myJson){myJson.production_companies.forEach(company=>{$('#company-6477').append(company.name+" ");});})
