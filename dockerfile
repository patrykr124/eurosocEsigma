# Etap budowania
FROM node:18-alpine AS builder
WORKDIR /app

# Instalacja zależności
COPY package*.json ./
RUN npm install

# Kopiowanie całego projektu i budowanie aplikacji
COPY . .
RUN npm run build

# Etap produkcyjny
FROM node:16-alpine
WORKDIR /app

# Kopiowanie tylko potrzebnych plików do uruchomienia aplikacji
COPY package*.json ./
RUN npm install --production

# Kopiowanie wyników budowania
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.mjs ./

# Ustawienie portu, na którym aplikacja będzie nasłuchiwać
EXPOSE 3000

# Komenda startowa
CMD ["npm", "start"]
