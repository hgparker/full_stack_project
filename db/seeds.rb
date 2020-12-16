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
q5 = Question.create(author_id: berivan.id, title: "What is integer linear programming?", body: "What is this thing integer linear programming? It honestly sounds like regular linear programming to me.")
q6 = Question.create(author_id: abdullah.id, title: "What are some good permutation algorithms?", body: "Many problems require cycling through permutation of n distinct elements. What's the best way of doing that?")
q7 = Question.create(author_id: sakine.id, title: "How do I get Chrome Developer Tools to show up?", body: "Question is in title. Looks really nifty, but do I get that for myself?")

Answer.destroy_all

a1 = Answer.create(author_id: abdullah.id, question_id: q1.id , body: "It’s a way of examining every node in a binary tree – in any order you choose, pre-, post-, or inorder – in linear time and *constant* space. It does, however, require that you modify the tree while examining it. Thus, the algorithm must also modify it back into its old state.")
a2 = Answer.create(author_id: sakine.id, question_id: q1.id, body: "Binary tree traversal in constant space, dude")
a3 = Answer.create(author_id: sakine.id, question_id: q2.id, body: "One solution is to simply try every permutation of a possible itinerary and go with the minimum sum. Doing this will take O(n!) time and O(1) space.")
a4 = Answer.create(author_id: selahattin.id, question_id: q2.id, body: "Check out the Held-Karp algorithm. It takes a ton of space: O(n*(2^n)), but is significantly faster O(n^2*(2^n), compared with trying every permutation. The root idea of Held-Karp is the following lemma, “Every subpath of a path of minimum distance is itself of minimum distance.” We can use this by building up from the bottom, calculating a measure D(x, S) where x is some city and S is some set of other cities such that D(x,S) represents the best way to start at city x and traverse each of the cities in S. If we had D(x, C-x) where C is the total set of cities, then we’d be done. We proceed by considering each additional city and using what we have to get the best next set of D’s. Essentially, if S is, say, x2, x3, and x4, and we want to compute D(x1, S), then we imagine starting at x1 and then using past data to figure out the cost of going next to x2, x3, or x4 – i.e., dist(x1->x2) + D(x2, S-x2), vs dist(x1->x3) + D(x3, S-x3),vs dist(x1->x4) + D(x4, S-x4). On the one hand, we never have to compute the same answer to a sub-problem twice, and this saves a tremendous amount of time. On the other hand, we have to store the answer to *every* sub-problem, and there is a tremendous number of them (O(2^n)).")
a5 = Answer.create(author_id: selahattin.id, question_id: q3.id, body:"You don’t need to check every factor, first of all, but only every factor less than or equal to sqrt(n). Additionally, after you find any factor, divide the number by that factor to simplify subsequent calculations. Also, don’t check for even factors – or factors divisible by three – since it would be superfluous to do so. Doing all of that should get you a hefty speed-up on checking for primality of individual numbers.")
a6 = Answer.create(author_id: berivan.id, question_id: q3.id, body: "If you’re searching for primes within a large range of numbers, say 1 to n, then checking individual numbers for primality is very inefficient. Rather, you should use the famous Sieve of Eratosthenes. Start with a large data-structure (a simple array works best) that records primality for 2 to n. Make everything prime to start. Now, starting with two, check to see if each number is prime. If it is, go ahead and mark all of its multiples as composite and record the number as prime. If it isn’t, skip to the next number. Uneliminated numbers must be prime and be used to eliminate all their multiples as non-prime. The sieve only leaves the primes. Doing things this way is much more efficient because it allows eliminating large groups of composite numbers rapidly one after the other.")
a7 = Answer.create(author_id: abdullah.id, question_id: q5.id, body: "Well, in a sense you’re right. Integer linear programming (ILP) is a subset of linear programming (LP). ILP is just LP under the additional constraint that everything has to be an integer (no decimal places!). Every feasible solution to a problem posed as ILP is also a feasible solution to the same problem as LP (though possibly not optimal). The techniques used to solve LP – like the simplex method – are also a good starting-point for solving ILP. However, ILP is much harder. Indeed, whereas LP problems can be solved in polynomial time (thanks to the series of innovative algorithms invented since the 70s set off by Leonid Khachiyan), ILP problems are NP-hard.")
a8 = Answer.create(author_id: sakine.id, question_id: q5.id, body: "They're the same. Just get the answer with linear programming and round down to get an integer answer.")
a9 = Answer.create(author_id: selahattin.id, question_id: q6.id, body: "Simplest is best in my opinion. Write a recursive routine that swaps every element into the last place, calls itself on an n-1 set, then swaps that element back.")
a10 = Answer.create(author_id: sakine.id, question_id: q6.id, body: "Heap's algorithm is blazing fast (I mean, obviously you can't beat O(N!), but blazing fast under that constraint). The basic idea of Heap's Algorithm is, recursively, for each element, if n is even, swap the first and last, then recurse on n-1, and if n is odd, then swap each element with the last before recursing. Lose the recursion for another speed-boost! Should be about four times faster.")
a11 = Answer.create(author_id: berivan.id, question_id: q6.id, body: "There are naive algorithms that will deliver in O(N*N!), and there is a clutch of more sophisticated ones that will deliver in O(N!). However, here's the thing: what are you doing with the permutations? If you're processing them in any way sensitive to the length of the permutation, then the processing time will be O(N*N!) by itself and this will swamp whatever gains you get from the permutation algorithm.")
a12 = Answer.create(author_id: selahattin.id, question_id: q7.id, body: "Ctrl-Shift-I")

Comment.destroy_all

c1 = Comment.create(author_id: abdullah.id, answer_id: a4.id, body: "Seems like representing and storing all those subsets would be really hard, though. Is there a trick?")
c2 = Comment.create(author_id: selahattin.id, answer_id: a4.id, body: "There is! Use a bitmask with n places for n cities, 1 if in S, 0 if not.")
c3 = Comment.create(author_id: abdullah.id, answer_id: a8.id, body: "This is false in numerous ways. Rounding will *not* give you the right answer. If only it were so easy...See my at-length answer on this page.")
c4 = Comment.create(author_id: sakine.id, answer_id: a9.id, body: "Seems like the question asker is looking for something more elaborate.")
c5 = Comment.create(author_id: sakine.id, answer_id: a11.id, body: "Wise words")


Vote.destroy_all

Vote.create(:voter => berivan, :votable => q1, :vote_direction => 1)
Vote.create(:voter => berivan, :votable => q2, :vote_direction => 1)
Vote.create(:voter => berivan, :votable => q3, :vote_direction => 1)
Vote.create(:voter => abdullah, :votable => q3, :vote_direction => 1)
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
Vote.create(:voter => abdullah, :votable => a8, :vote_direction => -1)
Vote.create(:voter => abdullah, :votable => a7, :vote_direction => 1)

Vote.create(:voter => berivan, :votable => a12, :vote_direction => 1)
Vote.create(:voter => abdullah, :votable => a12, :vote_direction => 1)
Vote.create(:voter => sakine, :votable => a12, :vote_direction => 1)
Vote.create(:voter => selahattin, :votable => a12, :vote_direction => 1)





