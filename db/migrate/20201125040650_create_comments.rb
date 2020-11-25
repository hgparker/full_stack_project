class CreateComments < ActiveRecord::Migration[5.2]
  def change
    create_table :comments do |t|
      t.integer :author_id, null: false
      t.integer :answer_id, null: false
      t.text :body, null: false

      t.timestamps
    end

    add_index :comments, :answer_id
    add_index :comments, [:answer_id, :author_id], unique: true
  end
end

