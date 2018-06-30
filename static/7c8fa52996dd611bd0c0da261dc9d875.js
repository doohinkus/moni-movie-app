
fetch('/details/198663').then(function(res){return res.json();}).then(function(myJson){myJson.production_companies.forEach(company=>{$('#company-198663').append(company.name+" ");});})
