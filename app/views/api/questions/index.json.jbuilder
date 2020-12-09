json.questions do
    @questions.each do |question|
        json.set! question.id do
            json.extract! question, :id, :title, :created_at
        end
    end
end

json.votes do
    @questions.each do |question|
        question.votes.each do |vote|
            json.set! vote.id do
                json.extract! vote, :id, :user_id, :votable_id, :votable_type, :vote_direction 
            end
        end
    end
end

json.users do
    @questions.each do |question|
        json.set! question.author.id do
            json.extract! question.author, :id, :username
        end
    end
end