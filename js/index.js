function SetValueToId(id,v){
    document.getElementById(id).innerHTML = v;
}

function addToCart(id){
    var qty = $('#qty'+id).val();
    localStorage.setItem(id,JSON.stringify({'Qty':qty}));
}



