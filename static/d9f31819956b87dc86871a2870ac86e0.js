
fetch('/details/296098').then(function(res){return res.json();}).then(function(myJson){myJson.production_companies.forEach(company=>{$('#company-296098').append(company.name+" ");});})
