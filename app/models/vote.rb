# == Schema Information
#
# Table name: votes
#
#  id             :bigint           not null, primary key
#  user_id        :integer          not null
#  votable_id     :integer          not null
#  votable_type   :string           not null
#  vote_direction :integer          not null
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#
class Vote < ApplicationRecord

    validates :user_id, :votable_id, :votable_type, :vote_direction, presence: true
    validates :vote_direction, inclusion: [-1, 1]
    validates :user_id, uniqueness: {scope: [:votable_id, :votable_type], message: "You have already voted for this item!"}

    belongs_to :votable, polymorphic: true

    belongs_to :voter,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :User 

end
