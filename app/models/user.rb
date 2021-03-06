class User < ApplicationRecord
  has_secure_password
  has_many :questions
  has_many :comments
  has_many :answers
  validates :password, presence: true, on: :create 
  validates :username, presence: true, uniqueness: true, on: :create
  validates :email, presence: true, uniqueness: true, on: :create
  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
end
