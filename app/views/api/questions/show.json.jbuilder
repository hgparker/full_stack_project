json.questions do
    json.set! @question.id do
        json.extract! @question, :id, :title, :body, :author_id
    end
end

json.answers do 
    @question.answers.each do |answer|
        json.set! answer.id do
            json.extract! answer, :id, :body, :author_id, :question_id
        end
    end
end

json.votes do
    @question.votes.each do |vote|
        json.set! vote.id do
            json.extract! vote, :id, :user_id, :votable_id, :votable_type, :vote_direction 
        end
    end

    @question.answer_votes.each do |vote|
        json.set! vote.id do
            json.extract! vote, :id, :user_id, :votable_id, :votable_type, :vote_direction 
        end
    end
end





