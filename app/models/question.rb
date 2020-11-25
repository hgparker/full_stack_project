# == Schema Information
#
# Table name: questions
#
#  id         :bigint           not null, primary key
#  title      :string           not null
#  body       :text             not null
#  author_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Question < ApplicationRecord

    validates :title, :body, :author_id, presence: true

    belongs_to :author,
        primary_key: :id,
        foreign_key: :author_id,
        class_name: :User
        
    has_many :answers,
        primary_key: :id,
        foreign_key: :question_id,
        class_name: :Answer,
        dependent: :destroy

    has_many :votes,
        as: :votable,
        dependent: :destroy
        
    has_many :answer_votes,
        through: :answers,
        source: :votes

    has_many :answer_comments,
        through: :answers,
        source: :comments
        
end
