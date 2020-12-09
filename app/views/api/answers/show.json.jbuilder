json.answers do
    json.set! @answer.id do
        json.extract! @answer, :id, :question_id, :author_id, :body, :created_at  
    end 
end

