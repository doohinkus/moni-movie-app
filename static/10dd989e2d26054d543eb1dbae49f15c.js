
fetch('/details/292431').then(function(res){return res.json();}).then(function(myJson){myJson.production_companies.forEach(company=>{$('#company-292431').append(company.name+" ");});})
