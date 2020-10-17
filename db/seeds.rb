# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


# User seeds

User.destroy_all
User.create(username: "Demo", email: "demodocus@demo.com", password: "demodemo")

User.create(username: "thales", email: "thales@thales.com", password: "password")
User.create(username: "parmeniPLEASE", email: "parm@parm.com", password: "password")
User.create(username: "heraclitus", email: "hera@hera.com", password: "password")
User.create(username: "anaxagoras", email: "anax@anax.com", password: "password")