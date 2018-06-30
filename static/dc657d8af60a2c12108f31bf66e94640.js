
fetch('/details/18486').then(function(res){return res.json();}).then(function(myJson){myJson.production_companies.forEach(company=>{$('#company-18486').append(company.name+" ");});})
