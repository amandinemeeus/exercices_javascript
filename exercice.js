
//Exercice2
var nom = "Meeus";
var prenom = "Amandine";
var ville = "Jette";
alert("Nom: " + nom + " \n Prénom: " + prenom + " \n Ville: " + ville);

//Exercice3
var prenom = prompt ('Bonjour,')

// Exercice4
// Refaire l’exercice 2 en demandant le nom, le prénom et la ville à l’utilisateur.
var coordonnees = prompt ('Quel est ton nom?');
var coordonnees2 = prompt ('Quel est ton prénom?');
var coordonnees3 = prompt ('Quelle ville habites-tu?')
ou
function coordonnees()
    {
    var nom = document.getElementById('nom').value;
    var prenom = document.getElementById('prenom').value;
    var ville = document.getElementById('ville').value;
    alert("Nom: " + nom + " \n Prénom: " + prenom + " \n Ville: " + ville);
     }

//Exercice5
/*Demander à l’utilisateur deux nombres à virgule. Ne garder que la partie entière du premier .
Les multiplier et afficher le résultat dans une boîte de dialogue.*/
alert("Indiquez deux nombres à virgule");
function calcul ()
    {
        var decimal = document.getElementById('premier_nombre').value;
        var entier = document.getElementById('deuxieme_nombre').value;
        alert(Math.floor(entier));
        alert(decimal);
        var resultat = decimal * entier;
        alert (resultat);
        //document.getElementbyId("afficher").innerHTML = resultat;
    }

//Exercice6
//Dans un fichier séparé, créer une fonction permettant d’afficher le reste de leur division. L’appeler depuis le fichier html.

function calcul ()
    {
        var decimal = document.getElementById('premier_nombre').value;
        var entier = document.getElementById('deuxieme_nombre').value;
        (Math.floor(entier));
        (decimal);
        var resultat = decimal % entier;
        document.getElementById('afficher').innerHTML=resultat;
    }

//Exercice7
// Demander à l’utilisateur sa pointure et son année de naissance.
// Créer une fonction qui fait les calculs suivants :
// Multiplier la pointure par 2
// Ajouter 5 au résultat
// Multiplier le tout par 50
// Soustraire l’année de naissance
// Ajouter au tout 1766
// La fonction doit retourner le résultat. Tester avec votre date de naissance et votre pointure.
//Attention : n'utiliser une seule variable « resultat ».

function calcul ()
    {
        var pointure = document.getElementById('pointure').value;
        var annee = document.getElementById('annee').value;
        //pointure = parseInt(pointure);
        //annee = parseInt(annee);
        var resultat = ((((pointure * 2) + 5) * 50) - annee) + 1766;
        document.getElementById('afficher').innerHTML=resultat;
    }



//Exercice8
//Demander à l’utilisateur de saisir son âge.
//S’il a plus de 18 ans, afficher " Vous êtes majeur ".
//Sinon afficher " Vous êtes mineur ".

function calcul ()
    {
        var age;
        if (age > 18){
            age = 'Vous êtes majeur';
        }else{age = 'Vous êtes mineur'}
// alert(age)
document.getElementById('afficher').innerHTML=age;
    }
