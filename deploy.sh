
bundle exec rake assets:precompile RAILS_ENV=production
heroku run rails db:migrate
heroku run rails db:seed
