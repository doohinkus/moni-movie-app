
fetch('/details/81188').then(function(res){return res.json();}).then(function(myJson){myJson.production_companies.forEach(company=>{$('#company-81188').append(company.name+" ");});})
