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

json.comments do
    @question.answer_comments.each do |comment|
        json.set! comment.id do
            json.extract! comment, :id, :body, :author_id, :answer_id
        end
    end
end

json.users do
    json.set! @question.author.id do
        json.extract! @question.author, :username
    end

    @question.answer_authors.each do |answer_author|
        json.set! answer_author.id do
            json.extract! answer_author, :username
        end
    end

    @question.answer_comment_authors.each do |answer_comment_author|
        json.set! answer_comment_author.id do
            json.extract! answer_comment_author, :username
        end
    end
end

