
fetch('/details/450062').then(function(res){return res.json();}).then(function(myJson){myJson.production_companies.forEach(company=>{const style=companies.indexOf(company)?"text-success":"text-primary";$('#company-450062').append(`<span class=${style}>${company.name}</span>`);});})
