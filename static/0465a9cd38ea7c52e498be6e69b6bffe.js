
fetch('/details/1817').then(function(res){return res.json();}).then(function(myJson){myJson.production_companies.forEach(company=>{const style=companies.indexOf(company.id.toString())!=-1?"text-success font-weight-bold":"text-secondary";$('#company-1817').append(`<span class=${style}>${company.name}</span>`);});})
