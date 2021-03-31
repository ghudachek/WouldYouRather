class CreateQuestions < ActiveRecord::Migration[6.1]
  def change
    create_table :questions do |t|
      t.string :choice1
      t.string :choice2
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
