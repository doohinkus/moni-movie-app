
fetch('/details/14736').then(function(res){return res.json();}).then(function(myJson){myJson.production_companies.forEach(company=>{$('#company-14736').append(company.name+" ");});})
