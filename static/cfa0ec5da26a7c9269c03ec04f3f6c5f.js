
fetch('/details/140300').then(function(res){return res.json();}).then(function(myJson){myJson.production_companies.forEach(company=>{$('#company-140300').append(company.name+" ");});})
