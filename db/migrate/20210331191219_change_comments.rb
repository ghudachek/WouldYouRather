class ChangeComments < ActiveRecord::Migration[6.1]
  def change
    remove_column :comments, :comment_id
  end
end
