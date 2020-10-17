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

berivan = User.create(username: "Berivan", email: "berivan@berivan.com", password: "password")
abdullah = User.create(username: "Abdullah", email: "apo@apo.com", password: "password")
sakine = User.create(username: "Sakine", email: "sakine@sakine.com", password: "password")
selahattin = User.create(username: "Selahattin", email: "selo@selo.com", password: "password")

Question.destroy_all

Question.create(author_id: berivan.id , title: "What is the Morris traversal?", body: "I understand how to traverse a binary tree in in-order, pre-order, and post-order, and I know how to do this either iteratively or recursively. What's the Morris traversal, and how does that fit into the above? What's special about it?")
Question.create(author_id: abdullah.id, title: "How do you actually solve the Traveling Salesman Problem?", body: "A traveling salesman must visit each of n cities once. Given the distance between every pair of cities, find the minimum path. Help! How do I even begin to solve this? At a loss here. Is this problem hopeless?")
Question.create(author_id: sakine.id, title: "What are some fast ways to search for primes?", body: "To examine a particular number for primality, we can simply test whether it has any factors between 2 and itself minus 1. Still, this seems pretty slow. How can we search faster?")
Question.create(author_id: selahattin.id, title: "ELI5 Suffix Tree", body: "Can somebody please explain to me in the simplest possible terms what a suffix tree is?")
