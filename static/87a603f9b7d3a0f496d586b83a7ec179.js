
fetch('/details/511785').then(function(res){return res.json();}).then(function(myJson){myJson.production_companies.forEach(company=>{const style=companies.indexOf(company)?"text-success":"text-primary";$('#company-511785').append(`<span class=${style}>${company.name}</span>`);});})
