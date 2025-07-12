# Copy Files to Root Action

This GitHub Action automatically copies specified files from the Views folder and wwwroot/css folder to the repository root folder.

## What it does

### HTML Files
- Copies `Views/Home/thanks.html` to `./thanks.html` in the root folder
- Looks for `Views/Home/index.html` and copies it to `./index.html` if found
- Preserves existing files in root if source doesn't exist

### CSS Files  
- Copies the entire `wwwroot/css/` folder to `./css/` in the root
- Includes all CSS files: `index.css`, `site.css`, `style.css`

## When it runs

The action triggers on:
- Push to `main` branch
- Pull requests to `main` branch  
- Manual workflow dispatch

## What happens

1. **Checkout**: Gets the latest code
2. **Copy HTML**: Copies HTML files from Views/Home to root
3. **Copy CSS**: Copies CSS folder from wwwroot to root
4. **Verify**: Lists copied files for confirmation
5. **Commit**: Only commits and pushes if there are changes

## Output

The action provides detailed logging showing:
- Which files were found and copied
- Any missing source files
- Verification of copied files
- Whether changes were committed

## Files affected

- `./thanks.html` (copied from `Views/Home/thanks.html`)
- `./index.html` (copied from `Views/Home/index.html` if exists)
- `./css/index.css` (copied from `wwwroot/css/index.css`)
- `./css/site.css` (copied from `wwwroot/css/site.css`)  
- `./css/style.css` (copied from `wwwroot/css/style.css`)

This ensures that static HTML and CSS files are available at the repository root for GitHub Pages or other static hosting scenarios.