
fetch('/details/152760').then(function(res){return res.json();}).then(function(myJson){myJson.production_companies.forEach(company=>{$('#company-152760').append(company.name+" ");});})
