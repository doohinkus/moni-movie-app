
fetch('/details/315836').then(function(res){return res.json();}).then(function(myJson){myJson.production_companies.forEach(company=>{$('#company-315836').append(company.name+" ");});})
