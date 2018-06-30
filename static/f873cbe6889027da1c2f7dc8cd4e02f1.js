
fetch('/details/320288').then(function(res){return res.json();}).then(function(myJson){myJson.production_companies.forEach(company=>{$('#company-320288').append(company.name+" ");});})
