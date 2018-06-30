
fetch('/details/27902').then(function(res){return res.json();}).then(function(myJson){myJson.production_companies.forEach(company=>{$('#company-27902').append(company.name+" ");});})
