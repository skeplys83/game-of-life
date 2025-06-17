ssh -o StrictHostKeyChecking=no -i ${{ secrets.WSL_SSH_PRIVATE_KEY }} opc@132.226.201.132
cd /home/opc/game-of-life
git pull
npm install
npm run build