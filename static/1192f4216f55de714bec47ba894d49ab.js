
fetch('/details/9509').then(function(res){return res.json();}).then(function(myJson){myJson.production_companies.forEach(company=>{const style=companies.indexOf(company)?"text-success":"text-primary";$('#company-9509').append(`<span class=${style}>${company.name}</span>`);});})
