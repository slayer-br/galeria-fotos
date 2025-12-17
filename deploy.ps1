# deploy.ps1
# Garante que o script pare em caso de erro
$ErrorActionPreference = "Stop"

Write-Host "Limpando cache..."
Remove-Item -Path "node_modules/.cache" -Recurse -ErrorAction SilentlyContinue

Write-Host "Executando build do Next.js..."
npm run build --loglevel silent

Write-Host "Preparando branch gh-pages..."

# Cria um branch órfão gh-pages
git checkout --orphan gh-pages

# Remove todos os arquivos do histórico do branch órfão
git rm --cached -r .
git clean -dfx

# Copia o conteúdo da pasta 'out' para a raiz do branch gh-pages
Copy-Item -Path "out/*" -Destination "." -Recurse -Force

Write-Host "Adicionando arquivos para commit..."
git add .

Write-Host "Realizando commit..."
git commit -m "Deploy to GitHub Pages"

Write-Host "Empurrando para o GitHub Pages..."
git push -f origin gh-pages

Write-Host "Retornando ao branch principal (main)..."
git checkout main

Write-Host "Deletando branch gh-pages local..."
git branch -D gh-pages

Write-Host "Deploy concluído!"

# Garante que a Action no GitHub Pages não falhe se o script PowerShell não tiver um código de saída explícito
exit 0
