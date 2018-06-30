
fetch('/details/140222').then(function(res){return res.json();}).then(function(myJson){myJson.production_companies.forEach(company=>{$('#company-140222').append(company.name+" ");});})
