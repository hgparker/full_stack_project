json.comments do
    json.set! @comment.id do
        json.extract! @comment, :id, :answer_id, :author_id, :body, :created_at 
    end 
end

