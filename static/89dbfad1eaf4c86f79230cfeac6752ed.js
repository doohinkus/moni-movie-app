
fetch('/details/274479').then(function(res){return res.json();}).then(function(myJson){myJson.production_companies.forEach(company=>{$('#company-274479').append(company.name+" ");});})
