
fetch('/details/11').then(function(res){return res.json();}).then(function(myJson){myJson.production_companies.forEach(company=>{$('#company-11').append(company.name+" ");});})
