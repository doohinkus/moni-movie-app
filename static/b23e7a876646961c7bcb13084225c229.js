
fetch('/details/17362').then(function(res){return res.json();}).then(function(myJson){myJson.production_companies.forEach(company=>{$('#company-17362').append(company.name+" ");});})
