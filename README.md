# 🚀 Rental Notification Service

**Rental Notification Service** est une application complète (back-end et front-end) permettant de gérer des locations proches de leur date d'échéance et d'envoyer des notifications automatisées ou manuelles aux clients.

Ce projet utilise **NestJS** pour le back-end, **React** avec **TailwindCSS** pour le front-end, et **PostgreSQL** pour la base de données.

---

## **🧩 Fonctionnalités**

- **Back-end (NestJS)** :
  - Récupération des locations proches de l’échéance (**GET `/rentals/due`**).
  - Envoi manuel des notifications aux clients (**POST `/notifications/send`**).
  - Notifications automatiques planifiées grâce à une tâche **Cron**.
- **Front-end (React)** :
  - Affichage des locations proches de l’échéance dans un tableau interactif.
  - Rafraîchissement des données via un bouton.
  - Envoi manuel des notifications via un bouton.
- **Base de données (PostgreSQL)** :
  - Tables **`customer`** et **`rental`** avec des relations.
  - Script SQL pour insérer des données de test.

---

## **🛠️ Technologies utilisées**

### **Back-end :**
- [NestJS](https://nestjs.com/) - Framework Node.js pour le back-end.
- [TypeORM](https://typeorm.io/) - ORM pour PostgreSQL.
- [PostgreSQL](https://www.postgresql.org/) - Base de données relationnelle.

### **Front-end :**
- [React](https://reactjs.org/) - Bibliothèque front-end pour l'interface utilisateur.
- [TailwindCSS](https://tailwindcss.com/) - Framework CSS utilitaire pour le design.
- [Axios](https://axios-http.com/) - Pour les requêtes HTTP.

---

## 🛠️ Installation
1. Prérequis
Assurez-vous d'avoir installé les outils suivants :
- Node.js (v18+ recommandé)
- PostgreSQL
- npm ou Yarn

2. Configuration de la base de données
- Créez la base de données sakila dans PostgreSQL :
    ```bash
    CREATE DATABASE sakila;
- Importez le schéma et les données de test : Depuis le répertoire postgres-sakila-db du projet, exécutez :
    ```bash
    psql -U postgres -d sakila -f ./postgres-sakila-db/postgres-sakila-schema.sql
    psql -U postgres -d sakila -f ./postgres-sakila-db/postgres-sakila-insert-data.sql
3. Installation du Back-end
- Accédez au dossier backend :
    ```bash
    cd rental-notification-service
- Installez les dépendances :
    ```bash
    npm install
- Démarrez le serveur :
    ```bash
    npm run start
Le back-end sera accessible à l'adresse :
📍 http://localhost:3000

4. Installation du Front-end
- Accédez au dossier frontend :

    ```bash
    cd rental-notification-client
- Installez les dépendances :

    ```bash
    npm install
- Lancez le serveur de développement :

    ```bash
    npm run dev
Le front-end sera accessible à l'adresse :
📍 http://localhost:5173

## 🚀 Utilisation
### Back-end :
Récupérer les locations proches de l’échéance :
Méthode : GET
Endpoint : http://localhost:3000/rentals/due
Envoyer les notifications manuellement :
Méthode : POST
Endpoint : http://localhost:3000/notifications/send

### Front-end :
- Accédez au front-end via http://localhost:5173.
- Rafraîchir les locations : Cliquez sur le bouton "Rafraîchir les Locations".
- Envoyer les notifications : Cliquez sur le bouton "Envoyer les Notifications" pour déclencher l’envoi.
## ✅ Tests
- Tester les routes API avec curl

1. Récupérer les locations proches de l’échéance :
    ```bash
    curl http://localhost:3000/rentals/due
2. Envoyer manuellement les notifications :
    ```bash
    curl -X POST http://localhost:3000/notifications/send
## 🎨 Résultat attendu
Sur le Front-end :
Un tableau s’affiche avec les informations suivantes :

ID Location
Date de Retour
Client (Prénom + Nom)
Email
Fuseau Horaire
Deux boutons sont disponibles :

Rafraîchir les Locations : Met à jour les données du tableau.
Envoyer les Notifications : Simule l’envoi des notifications aux clients.
