function taxaU1() {
    alert(total.toFixed(2) + 'R$');
    let resposta = document.getElementById('res');
    
    resposta.innerHTML = `<h2> Taxa U1 </h2>`;
}
function taxaU2() {
    let uv = document.getElementById('uv');
    let aq = document.getElementById('aq');
    let ap = document.getElementById('ap');
    let bq = document.getElementById('bq');
    let bp = document.getElementById('bp');
    let resposta = document.getElementById('res');
    let uv_v = Number(uv.value);
    let aq_v = Number(aq.value);
    let ap_v = Number(ap.value);
    let bq_v = Number(bq.value);
    let bp_v = Number(bp.value);

    //let total = ((uv_v * 0.560495410301857) + (aq_v * 1.56709941247662) + (ap_v * 1.67004754906268) + (bq_v * 1.33832577561872) + (bp_v * 1.00660400217476))
    let total = ((uv_v * 0.56) + (aq_v * 1.57) + (ap_v * 1.67) + (bq_v * 1.34) + (bp_v * 1.01))

    alert(total.toFixed(2) + 'R$')
     resposta.innerHTML = `<h2> U2 Remuneração aproximada de:  ${total.toFixed(2)} R$ </h2>`;
}
function taxaU5() {
    let uv = document.getElementById('uv');
    let aq = document.getElementById('aq');
    let ap = document.getElementById('ap');
    let bq = document.getElementById('bq');
    let bp = document.getElementById('bp');
    let resposta = document.getElementById('res');
    let uv_v = Number(uv.value);
    let aq_v = Number(aq.value);
    let ap_v = Number(ap.value);
    let bq_v = Number(bq.value);
    let bp_v = Number(bp.value);

    let total = ((uv_v * 0.75) + (aq_v * 2.07) + (ap_v * 2.21) + (bq_v * 1.76) + (bp_v * 1.33))

     resposta.innerHTML = `<h2> U5 Remuneração aproximada de:  ${total.toFixed(2)} R$ </h2>`;
}

function taxaR3() {
    let uv = document.getElementById('uv');
    let aq = document.getElementById('aq');
    let ap = document.getElementById('ap');
    let bq = document.getElementById('bq');
    let bp = document.getElementById('bp');
    let resposta = document.getElementById('res');
    let uv_v = Number(uv.value);
    let aq_v = Number(aq.value);
    let ap_v = Number(ap.value);
    let bq_v = Number(bq.value);
    let bp_v = Number(bp.value);

    let total = ((uv_v * 0.686320910573703) + (aq_v * 1.88738250407768) + (ap_v * 2.01320800434953) + (bq_v * 1.6128541398482) + (bp_v * 1.21250027534688))

    alert(total.toFixed(2))
     resposta.innerHTML = `<h2> R3 Remuneração aproximada de:  ${total.toFixed(2)} R$ </h2>`;

}
function taxaPCTA1() {
    alert("Taxa PCTA1");
    let resposta = document.getElementById('res');
    
    resposta.innerHTML = `<h2> Taxa PCTA1 </h2>`;
}
