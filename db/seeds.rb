# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

@admin = User.create!(username: 'admin', email: 'ghudachek@gmail.com',image: 'https://images.unsplash.com/photo-1466921583968-f07aa80c526e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80', password: 'hello')
@gracen = User.create!(username: 'Gracen', email: 'hello@gmail.com', image: 'https://images.unsplash.com/photo-1466921583968-f07aa80c526e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80', password: 'hello')
puts "#{User.count} users created"

@wyr1 = Question.create!(choice1: 'live at the beach', choice2: 'live in the mountains', user: @admin)
@wyr2 = Question.create!(choice1: 'explore the ocean', choice2: 'explore space', user: @admin)

puts "#{Question.count} questions created!"

@com1 = Comment.create!(user: @admin, question: @wyr1, post:'tough choices!')
@com2 = Comment.create!(user: @admin, question: @wyr2, post: 'space for sure! Cmon guys, you can basically fly.')
@com3 = Comment.create!(user: @gracen, question: @wyr2, post: 'Nop, oceans cooler. so many creatures to see.')

puts "#{Comment.count} comments created!"

