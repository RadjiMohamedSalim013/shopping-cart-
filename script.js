document.addEventListener("DOMContentLoaded", () => {

    const plusCircle = document.querySelectorAll(".fa-plus-circle");
    const minusCircle = document.querySelectorAll(".fa-minus-circle");
    const totalPrice = document.querySelector(".total");
    const supression = document.querySelectorAll(".fa-trash-alt")
    const like = document.querySelectorAll(".fa-heart")

    // Augmenter la quantité d'un article
    plusCircle.forEach((button) => {
        button.addEventListener("click", () => {
            let quantitySpan = button.nextElementSibling; // Récupérer l'élément qui affiche la quantité
            let quantity = parseInt(quantitySpan.textContent); // Convertir la valeur de la quantité en entier
            quantitySpan.textContent = quantity + 1; // Augmenter la quantité
            updatePrixTotal(); // Mettre à jour le prix total
        });
    });

    // Diminuer la quantité d'un article
    minusCircle.forEach((button) => {
        button.addEventListener("click", () => {
            let quantitySpan = button.previousElementSibling; // Récupérer l'élément qui affiche la quantité
            let quantity = parseInt(quantitySpan.textContent); // Convertir la valeur de la quantité en entier

            // Diminuer la quantité si elle est supérieure à 0
            if (quantity > 0) {
                quantitySpan.textContent = quantity - 1;
                updatePrixTotal(); // Mettre à jour le prix total
            }
        });
    });


    // Mettre à jour le prix total en fonction des quantités
    const updatePrixTotal = () => {
        const unitPrice = document.querySelectorAll('.unit-price');
        const quantitySpan = document.querySelectorAll('.quantity');
        let total = 0;

        unitPrice.forEach((price, index) => {
            const unitPrice = parseInt(price.textContent);
            const quantity = parseInt(quantitySpan[index].textContent);
            total += unitPrice * quantity;
        });

        totalPrice.textContent = `${total} $`;
    };


    //Supprimer un élément
    supression.forEach((icone) => {
        icone.addEventListener("click", () => {
            //Demande de confirmation de suppression
            alert("Voulez vous supprimer l'article")
            if (alert) {
                const card = icone.closest(".card"); //repuration de la classe card
                card.remove(); //supression
                updatePrixTotal(); //mise a jour du prix 
            }

        })
    })


    //Aimer un article 
    like.forEach((icone) => {
        icone.addEventListener("click", () => {
            icone.style.transition = "color 0.5s ease";
            // Vérifier la couleur actuelle du cœur
            if (icone.style.color === "red") {
                // Si la couleur est rouge, la remettre en noir
                icone.style.color = "black";
            } else {
                // Sinon, la passer en rouge
                icone.style.color = "red";
            }
        });
    });



})