
fetch('/details/425136').then(function(res){return res.json();}).then(function(myJson){myJson.production_companies.forEach(company=>{const style=companies.indexOf(company)?"text-success":"text-primary";$('#company-425136').append(`<span class=${style}>${company.name}</span>`);});})
