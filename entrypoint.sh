export PATH="$HOME/.yarn/bin:$HOME/.config/yarn/global/node_modules/.bin:$PATH"

yarn install --check-files

bundle exec rails db:migrate

foreman start
