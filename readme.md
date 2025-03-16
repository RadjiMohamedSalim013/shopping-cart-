# 🛒 **Panier d'Achat Interactif**

Ce projet est une simulation d'un panier d'achat dans lequel des articles ont déjà été présélectionnés. L'utilisateur peut modifier les quantités, supprimer des articles et voir le prix total mis à jour dynamiquement.

## 🎯 **Objectif du Projet**

L'objectif de ce projet est de créer un panier d'achat entièrement fonctionnel en JavaScript. L'utilisateur peut interagir avec les éléments du panier grâce à différentes actions :

✅ Augmenter ou diminuer la quantité d'un article  
✅ Supprimer un article du panier  
✅ Calculer automatiquement le prix total en fonction des articles sélectionnés  
✅ Ajouter un article aux favoris (❤️)  

## 🛠️ **Technologies utilisées**

- **HTML5** : Structure de la page  
- **CSS3 & Bootstrap 5** : Mise en page et design responsive  
- **JavaScript (DOM & Events)** : Dynamisation du panier  
- **FontAwesome** : Icônes interactifs  

## 📂 **Structure du projet**

```
/shopping-cart-
│── index.html        # Page principale du panier
│── script.js         # Code JavaScript pour l'interaction
│── style.css         # Fichier de styles CSS
│── assets/           # Images des produits
```

## ⚙️ **Fonctionnalités détaillées**

1. **Gestion des quantités**  
   - Cliquer sur le bouton `+` pour augmenter la quantité d'un article.  
   - Cliquer sur le bouton `-` pour diminuer la quantité (minimum 0).  
   - Mise à jour automatique du prix total.

2. **Suppression d'un article**  
   - L'utilisateur peut supprimer un article en cliquant sur l'icône 🗑️.  
   - Une alerte de confirmation s'affiche avant la suppression.  
   - Mise à jour automatique du prix total après suppression.

3. **Ajout aux favoris**  
   - L'utilisateur peut aimer un article en cliquant sur l'icône ❤️.  
   - Changement dynamique de couleur pour indiquer l'ajout aux favoris.

4. **Calcul automatique du prix total**  
   - Le prix total s'actualise en fonction des articles et des quantités.  

## 📌 **Installation et utilisation**

1. **Clone le projet**  
   ```bash
   git clone https://github.com/RadjiMohamedSalim013/shopping-cart-
   cd shopping-cart-
   ```
2. **Ouvre `index.html` dans un navigateur**  
 

📄 Licence
Ce projet est sous licence MIT. Vous êtes libre de l'utiliser, de le modifier et de le distribuer sous les conditions de cette licence.