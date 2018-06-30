
fetch('/details/8051').then(function(res){return res.json();}).then(function(myJson){myJson.production_companies.forEach(company=>{$('#company-8051').append(company.name+" ");});})
