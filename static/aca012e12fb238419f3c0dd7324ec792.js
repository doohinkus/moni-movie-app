
fetch('/details/76285').then(function(res){return res.json();}).then(function(myJson){myJson.production_companies.forEach(company=>{$('#company-76285').append(company.name+" ");});})
