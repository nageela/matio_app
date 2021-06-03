# Dealing with Private GitHub Repository

### In GitHub:

- You must be invited by creator of repository
- Ensure you have read/write access to the repo


### In Terminal/Console/CLI


1. `git init` initialize git
2. `git remote add origin https://{USERNAME}:{PASSWORD}@github.com/nageela/matio_app.git` virtually logs into your github account before adding origin (the repository) to your list of remotes
3. `git add <files>` files to staging 
4. `git commit -m "init commit"` files to commit + commit message
5. `git push -u origin master`


Done!
