class CreateVotes < ActiveRecord::Migration[5.2]
  def change
    create_table :votes do |t|
      t.integer :user_id, null: false
      t.integer :votable_id, null: false
      t.string :votable_type, null: false
      t.integer :vote_direction, null: false

      t.timestamps
    end

    add_index :votes, [:votable_id, :votable_type]
    add_index :votes, [:votable_id, :votable_type, :user_id], unique: true
  end
end
