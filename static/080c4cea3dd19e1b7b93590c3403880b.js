
fetch('/details/210577').then(function(res){return res.json();}).then(function(myJson){myJson.production_companies.forEach(company=>{$('#company-210577').append(company.name+" ");});})
