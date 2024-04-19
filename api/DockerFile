# Utilisation d'une image de base Node.js
FROM node:14

# Définition du répertoire de travail dans le conteneur
WORKDIR /app

# Copie du fichier package.json et package-lock.json
COPY package*.json ./

# Installation des dépendances
RUN npm install

# Copie des fichiers du projet dans le conteneur
COPY . .

# Exposition du port 3000 pour accéder à l'API
EXPOSE 3000

# Commande pour démarrer l'application
CMD ["node", "server.js"]