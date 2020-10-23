# == Schema Information
#
# Table name: answers
#
#  id          :bigint           not null, primary key
#  author_id   :integer          not null
#  question_id :integer          not null
#  body        :text             not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Answer < ApplicationRecord

    validates :author_id, :question_id, :body, presence: true
    validates :author_id, uniqueness: {scope: :question_id, message: "Please edit your existing answer to this question"}    

    belongs_to :author,
        primary_key: :id,
        foreign_key: :author_id,
        class_name: :User

    belongs_to :question,
        primary_key: :id,
        foreign_key: :question_id,
        class_name: :Question

    has_many :votes,
        as: :votable,
        dependent: :destroy
end
