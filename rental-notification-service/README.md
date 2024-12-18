# Rental Notification Service

## Description
Application NestJS qui gère l'envoi de notifications pour les locations proches de l'échéance. Le front-end (React) affiche les locations dues et permet de déclencher les notifications manuellement.

## Fonctionnalités
- Récupération des locations proches de l'échéance (**API : `GET /rentals/due`**).
- Notifications automatiques planifiées tous les jours à midi.
- Envoi manuel des notifications via un bouton ou l'API (**API : `POST /notifications/send`**).

## Installation

### Prérequis
- Node.js et npm
- PostgreSQL
- Base de données Sakila (importer les scripts SQL)

### Back-end (NestJS)
1. Installez les dépendances :
   ```bash
   cd rental-notification-service
   npm install
