
fetch('/details/429300').then(function(res){return res.json();}).then(function(myJson){myJson.production_companies.forEach(company=>{const style=companies.indexOf(company.name)!=-1?"text-success":"text-primary";$('#company-429300').append(`<span class=${style}>${company.name}</span>`);});})
