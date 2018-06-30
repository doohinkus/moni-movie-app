
fetch('/details/293660').then(function(res){return res.json();}).then(function(myJson){myJson.production_companies.forEach(company=>{$('#company-293660').append(company.name+" ");});})
