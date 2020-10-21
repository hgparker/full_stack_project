json.answers do
    json.set! @answer.id do
        json.extract! @answer, :id, :question_id, :author_id, :body    
    end 
end

