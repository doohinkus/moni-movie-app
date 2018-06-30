
fetch('/details/25938').then(function(res){return res.json();}).then(function(myJson){myJson.production_companies.forEach(company=>{$('#company-25938').append(company.name+" ");});})
