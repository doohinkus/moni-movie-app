
fetch('/details/376660').then(function(res){return res.json();}).then(function(myJson){myJson.production_companies.forEach(company=>{const style=companies.indexOf(company)!=-1?"text-success":"text-primary";$('#company-376660').append(`<span class=${style}>${company.name}</span>`);});})
