class Comment < ApplicationRecord
  belongs_to :user
  belongs_to :question
  belongs_to :comment
end