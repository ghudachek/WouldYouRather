class UpdateComment < ActiveRecord::Migration[6.1]
  def change
    remove_column :comments, :comment
    add_column :comments, :post, :string
  end
end
