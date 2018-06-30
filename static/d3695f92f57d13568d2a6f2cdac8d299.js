
fetch('/details/13596').then(function(res){return res.json();}).then(function(myJson){myJson.production_companies.forEach(company=>{$('#company-13596').append(company.name+" ");});})
