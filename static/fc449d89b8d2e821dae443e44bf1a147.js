
fetch('/details/266058').then(function(res){return res.json();}).then(function(myJson){myJson.production_companies.forEach(company=>{$('#company-266058').append(company.name+" ");});})
