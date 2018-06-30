
fetch('/details/434690').then(function(res){return res.json();}).then(function(myJson){myJson.production_companies.forEach(company=>{$('#company-434690').append(company.name+" ");});})
