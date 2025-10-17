## Useful commands
### packages
npm install @prisma/client
npm install @prisma/adapter-mariadb
### scaffold
npx prisma db pull --schema ./src/main/repositories/prisma/schema.prisma
### generate client
npx prisma generate --schema ./src/main/repositories/prisma/schema.prisma 