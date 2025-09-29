# Шаг 1: Используем официальный образ Node.js
FROM node:22-alpine

# Шаг 2: Устанавливаем рабочую директорию
WORKDIR /app

# Шаг 3: Копируем package.json и package-lock.json
COPY package*.json ./

# Шаг 4: Устанавливаем зависимости
RUN npm install

# Шаг 5: Копируем Prisma schema и seed файлы
COPY prisma ./prisma

# Шаг 6: Копируем .env
COPY .env ./

# Шаг 7: Генерируем Prisma Client
RUN npx prisma generate

# Шаг 8: Копируем остальной код
COPY . .

# Шаг 9: Собираем Next.js-приложение
RUN npm run build

# Шаг 10: Определяем порт
EXPOSE 3000

# Шаг 11: Запускаем приложение
# Миграции и сидирование перенесены в docker-compose.yml
ENV HOST=0.0.0.0
CMD ["npm", "run", "start"]
