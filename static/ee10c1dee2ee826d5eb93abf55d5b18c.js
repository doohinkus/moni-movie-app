
fetch('/details/116005').then(function(res){return res.json();}).then(function(myJson){myJson.production_companies.forEach(company=>{const style=companies.indexOf(company)!=-1?"text-success":"text-primary";$('#company-116005').append(`<span class=${style}>${company.name}</span>`);});})
