
fetch('/details/383498').then(function(res){return res.json();}).then(function(myJson){myJson.production_companies.forEach(company=>{$('#company-383498').append(company.name+" ");});})
