
fetch('/details/246655').then(function(res){return res.json();}).then(function(myJson){myJson.production_companies.forEach(company=>{$('#company-246655').append(company.name+" ");});})
