document.body.onload = function() { // Tässä on alekkain MongoDb kentät päivitystä varten. Funktiot keräävät id avulla oikean kentän.
    document.getElementById('name').value = getParam('name');
    document.getElementById('publisher').value = getParam('publisher');
    document.getElementById('platform').value = getParam('platform');
    document.getElementById('added').value = getParam('added');
    document.getElementById('genre').value = getParam('genre');
    document.getElementById('details').value = getParam('details');
    document.getElementById('released').value = getParam('released');
} 
function getParam(param) {
    return new URLSearchParams(window.location.search).get(param);
}