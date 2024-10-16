cd gray-blog && pm2 start --name "gwy" pnpm -- start:dev && cd ..
cd gray-auth && pm2 start --name "aut" pnpm -- start:local && cd ..
cd gray-article && pm2 start --name "atc" pnpm -- start:local && cd ..
cd gray-media && pm2 start --name "mda" pnpm -- start:local && cd ..
cd gray-pages && pm2 start --name "pge" pnpm -- start:local && cd ..
cd gray-admin && pm2 start --name "adm" pnpm -- dev && cd ..
cd gray-front && pm2 start --name "frt" pnpm -- dev && cd ..

