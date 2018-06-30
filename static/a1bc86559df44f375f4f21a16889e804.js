
fetch('/details/296360').then(function(res){return res.json();}).then(function(myJson){myJson.production_companies.forEach(company=>{$('#company-296360').append(company.name+" ");});})
