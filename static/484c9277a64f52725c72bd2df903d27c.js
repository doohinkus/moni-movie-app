
fetch('/details/315836').then(function(res){return res.json();}).then(function(myJson){myJson.production_companies.forEach(company=>{const style=companies.indexOf(company.name)!=-1?"text-success":"text-primary";$('#company-315836').append(`<span class=${style}>${company.name}</span>`);});})
