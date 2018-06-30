
fetch('/details/296098').then(function(res){return res.json();}).then(function(myJson){myJson.production_companies.forEach(company=>{const style=companies.indexOf(company.id.toString())!=-1?"text-success font-weight-bold":"text-secondary";$('#company-296098').append(`<span class=${style}>${company.name}</span>`);});})
