git config user.email "dhanushbhandary88@gmail.com"
git config user.name "Dhanushbhandary"
git init
call npm run build
git add .
git commit -m "Update static build and deploy"
git branch -M main
git remote add origin https://github.com/DhanushbhandaryD123/GDPL.git
git push -u origin main
