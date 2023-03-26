// Configura tu aplicación Firebase
var firebaseConfig = {
    apiKey: "API_KEY",
    authDomain: "AUTH_DOMAIN",
    projectId: "PROJECT_ID",
    storageBucket: "STORAGE_BUCKET",
    messagingSenderId: "MESSAGING_SENDER_ID",
    appId: "APP_ID"
};

// Inicializa Firebase
firebase.initializeApp(firebaseConfig);

// Obtiene una referencia a la base de datos
var db = firebase.firestore();

// Agrega una pintura o fotografía a la base de datos
function agregarPintura(titulo, artista, anio) {
    db.collection("pinturas").add({
        titulo: titulo,
        artista: artista,
        anio: anio
    })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
}

// Obtén todas las pinturas o fotografías de la base de datos
db.collection("pinturas").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        var data = doc.data();
        var row = "<tr><td>" + doc.id + "</td><td>" + data.titulo + "</td><td>" + data.artista + "</td><td>" + data.anio + "</td></tr>";
        document.getElementById("table-body").innerHTML += row;
    });
});

// Agrega un listener para el botón de agregar
document.getElementById("agregar").addEventListener("click", function(event) {
    event.preventDefault();
    var titulo = document.getElementById("titulo").value;
    var artista = document.getElementById("artista").value;
    var anio = document.getElementById("anio").value;
    agregarPintura(titulo, artista, anio);
    document.getElementById("titulo").value = "";
    document.getElementById("artista").value = "";
    document.getElementById("anio").value = "";
});

