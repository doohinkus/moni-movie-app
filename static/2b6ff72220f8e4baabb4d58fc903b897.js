
fetch('/details/10140').then(function(res){return res.json();}).then(function(myJson){myJson.production_companies.forEach(company=>{$('#company-10140').append(company.name+" ");});})
