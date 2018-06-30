
fetch('/details/207703').then(function(res){return res.json();}).then(function(myJson){myJson.production_companies.forEach(company=>{$('#company-207703').append(company.name+" ");});})
