
fetch('/details/263115').then(function(res){return res.json();}).then(function(myJson){myJson.production_companies.forEach(company=>{$('#company-263115').append(company.name+" ");});})
