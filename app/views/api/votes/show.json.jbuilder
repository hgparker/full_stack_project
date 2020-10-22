json.votes do
    json.set! @vote.id do
        json.extract! @vote, :id, :user_id, :votable_id, :votable_type, :vote_direction
    end
end
