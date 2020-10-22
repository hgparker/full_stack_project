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

q1 = Question.create(author_id: berivan.id , title: "What is the Morris traversal?", body: "I understand how to traverse a binary tree in in-order, pre-order, and post-order, and I know how to do this either iteratively or recursively. What's the Morris traversal, and how does that fit into the above? What's special about it?")
q2 = Question.create(author_id: abdullah.id, title: "How do you actually solve the Traveling Salesman Problem?", body: "A traveling salesman must visit each of n cities once. Given the distance between every pair of cities, find the minimum path. Help! How do I even begin to solve this? At a loss here. Is this problem hopeless?")
q3 = Question.create(author_id: sakine.id, title: "What are some fast ways to search for primes?", body: "To examine a particular number for primality, we can simply test whether it has any factors between 2 and itself minus 1. Still, this seems pretty slow. How can we search faster?")
q4 = Question.create(author_id: selahattin.id, title: "ELI5 Suffix Tree", body: "Can somebody please explain to me in the simplest possible terms what a suffix tree is?")

Answer.destroy_all

a1 = Answer.create(author_id: abdullah.id, question_id: q1.id , body: "It’s a way of examining every node in a binary tree – in any order you choose, pre-, post-, or inorder – in linear time and *constant* space. It does, however, require that you modify the tree while examining it. Thus, the algorithm must also modify it back into its old state.")
a2 = Answer.create(author_id: sakine.id, question_id: q1.id, body: "Binary tree traversal in constant space, dude")
a3 = Answer.create(author_id: sakine.id, question_id: q2.id, body: "One solution is to simply try every permutation of a possible itinerary and go with the minimum sum. Doing this will take O(n!) time and O(1) space.")
a4 = Answer.create(author_id: selahattin.id, question_id: q2.id, body: "Check out the Held-Karp algorithm. It takes a ton of space: O(n*(2^n)), but is significantly faster O(n^2*(2^n), compared with trying every permutation. The root idea of Held-Karp is …")
a5 = Answer.create(author_id: selahattin.id, question_id: q3.id, body:"You don’t need to check every factor, first of all, but only every factor less than or equal to sqrt(n). Additionally, after you find any factor, divide the number by that factor to simplify subsequent calculations. Also, don’t check for even factors – or factors divisible by three – since it would be superfluous to do so. Doing all of that should get you a hefty speed-up on checking for primality of individual numbers.")
a6 = Answer.create(author_id: berivan.id, question_id: q3.id, body: "If you’re searching for primes within a large range of numbers, say 1 to n, then checking individual numbers for primality is very inefficient. Rather, you should use the famous Sieve of Eratosthenes. Start with a large data-structure (a simple array works best) that records primality for 2 to n. Make everything prime to start. Now, starting with two, check to see if each number is prime. If it is, go ahead and mark all of its multiples as composite and record the number as prime. If it isn’t, skip to the next number. Uneliminated numbers must be prime and be used to eliminate all their multiples as non-prime. The sieve only leaves the primes. Doing things this way is much more efficient because it allows eliminating large groups of composite numbers rapidly one after the other.")

Vote.destroy_all

Vote.create(:voter => berivan, :votable => q1, :vote_direction => 1)
Vote.create(:voter => berivan, :votable => q2, :vote_direction => 1)
Vote.create(:voter => berivan, :votable => q3, :vote_direction => 1)
Vote.create(:voter => berivan, :votable => q4, :vote_direction => -1)
Vote.create(:voter => abdullah, :votable => q1, :vote_direction => 1)
Vote.create(:voter => sakine, :votable => q1, :vote_direction => 1)
Vote.create(:voter => selahattin, :votable => q1, :vote_direction => 1)

Vote.create(:voter => berivan, :votable => a2, :vote_direction => -1)
Vote.create(:voter => abdullah, :votable => a2, :vote_direction => -1)
Vote.create(:voter => berivan, :votable => a1, :vote_direction => 1)
Vote.create(:voter => berivan, :votable => a3, :vote_direction => -1)
Vote.create(:voter => berivan, :votable => a4, :vote_direction => 1)
Vote.create(:voter => sakine, :votable => a5, :vote_direction => 1)
Vote.create(:voter => sakine, :votable => a6, :vote_direction => 1)
Vote.create(:voter => selahattin, :votable => a5, :vote_direction => 1)
Vote.create(:voter => selahattin, :votable => a6, :vote_direction => 1)




