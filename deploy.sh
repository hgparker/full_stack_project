
bundle exec rake assets:precompile RAILS_ENV=production
git add .
git commit -m "$1"
git push origin main
git push heroku main
# heroku run rails db:migrate
# heroku run rails db:seed
