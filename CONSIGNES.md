# DjobExercice
## Exercice à faire
### Contexte
En tant que développeur backend dans une entreprise de location de films, nous voulons améliorer la gestion des retours en rappelant aux clients la date d'échéance de leur location.
    
### Objectif
    
Afin de rappeler aux clients la date d'échéance de leur location et d'éviter les retards, nous souhaitons mettre en place un système de tâches planifiées qui enverrait des notifications par email à J-5 (à 12h) et J-3 (à 12h) avant la date de retour pour chaque location. Implémentez un service de planification qui utilise les fuseaux horaires des clients pour envoyer des notifications aux moments appropriés.

### Importer la base de données Sakila

1. Placez les scripts SQL dans le dossier `postgres-sakila-db`.
2. Importez la base de données Sakila avec la commande suivante :

   ```bash
   psql -U postgres -d sakila -f postgres-sakila-db/postgres-sakila-schema.sql
   psql -U postgres -d sakila -f postgres-sakila-db/postgres-sakila-insert-data.sql
    
    
### Pré-requis fonctionnels
    
1. Un client (Customer) a la possibilité d'effectuer des locations (Rental) de films.
2. Chaque location est représentée par une date de début et une date de retour, qui peuvent être choisies par le client.
3. La durée d'une location est d'au minimum 1 semaine et ne doit pas excéder 3 semaines.
4. Les dates de début et de retour des locations sont définies en fonction du fuseau horaire (timezone) du client (les tables doivent être modifiées en conséquence).
5. Une location en cours n'est pas modifiable.
    
    
### Pré-requis techniques
    
1. Installer la base de données "Sakila" en version PostgreSQL disponible sur ce lien : https://github.com/jOOQ/sakila/tree/main/postgres-sakila-db (installer schéma + données).
2. Initialiser un projet NestJS avec les entités Customer, Film et Rental (en utilisant TypeORM ou Prisma).
3. Deux tâches planifiées doivent être mises en place :
    - Une tâche planifiée qui envoie un email à J-5 à 12h00 avant la date de retour de chaque location.
    - Une tâche planifiée qui envoie un email à J-3 à 12h00 avant la date de retour de chaque location.
4. Créer une API permettant de :
    - Ajouter/Modifier un client.
    - Effectuer une location.
    - Lister toutes les tâches planifiées.
    - Lancer une tâche planifiée manuellement.
    - Vérifier l'état d'exécution d'une tâche planifiée.
5. Tips :
    - La modification du schéma actuel de "Sakila" est autorisée.
    - Utiliser le package `@nestjs/schedule` pour gérer les tâches planifiées.
    - Le service de mail peut être simulé par une simple log