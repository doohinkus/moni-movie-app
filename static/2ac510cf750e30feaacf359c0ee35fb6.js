
fetch('/details/27885').then(function(res){return res.json();}).then(function(myJson){myJson.production_companies.forEach(company=>{$('#company-27885').append(company.name+" ");});})
