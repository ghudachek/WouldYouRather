class User < ApplicationRecord
  has_many :questions
  has_many :comments
end
