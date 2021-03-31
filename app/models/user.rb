class User < ApplicationRecord
  has_secure_password
  has_many :questions
  has_many :comments

  validates :password, length: {minimum: 5}
  validates :username, presence: true, uniqueness: true
  validates :email, presence: true, uniqueness: true
  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
end
