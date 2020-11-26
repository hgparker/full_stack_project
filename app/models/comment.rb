# == Schema Information
#
# Table name: comments
#
#  id         :bigint           not null, primary key
#  author_id  :integer          not null
#  answer_id  :integer          not null
#  body       :text             not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Comment < ApplicationRecord

  validates :author_id, :answer_id, :body, presence: true
  validates :author_id, uniqueness: {scope: :answer_id, message: "You have already commented upon this answer"}

  belongs_to :author,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :User

  belongs_to :answer,
    primary_key: :id,
    foreign_key: :answer_id,
    class_name: :Answer

end 