
fetch('/details/19995').then(function(res){return res.json();}).then(function(myJson){myJson.production_companies.forEach(company=>{$('#company-19995').append(company.name+" ");});})
