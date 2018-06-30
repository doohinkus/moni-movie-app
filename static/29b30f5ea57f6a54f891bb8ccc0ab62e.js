
fetch('/details/49519').then(function(res){return res.json();}).then(function(myJson){myJson.production_companies.forEach(company=>{console.log(company.id,companies.indexOf(company.id.toString()))
const style=companies.indexOf(company.id.toString())!=-1?"text-success font-weight-bold text-center ml-1":" ml-1 text-center text-secondary";$('#company-49519').append(`<span class="${style}">${company.name}</span>`);});})
