
fetch('/details/350').then(function(res){return res.json();}).then(function(myJson){myJson.production_companies.forEach(company=>{const style=companies.indexOf(company)?"text-success":"text-primary";$('#company-350').append(`<span class=${style}>${company.name}</span>`);});})
