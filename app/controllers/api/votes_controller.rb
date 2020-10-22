class Api::VotesController < ApplicationController

    # if already an upvote, do nothing
    # if a downvote, destroy it
    # if nothing, record downvote

    def create
        previous_vote = Vote.find_by(derived_vote)
        vote_direction = params[:vote][:vote_direction].to_i
        if !previous_vote
            enter_vote
        elsif vote_direction == previous_vote.vote_direction
            @vote = previous_vote
            render :show
        else
            previous_vote.destroy
            render :empty
        end
    end

    private
    def vote_params
        params.require(:vote).permit(:user_id, :votable_id, :votable_type, :vote_direction)
    end

    def derived_vote
        params.require(:vote).permit(:user_id, :votable_id, :votable_type)
    end

    def enter_vote
        @vote = Vote.new(vote_params)
        if @vote.save
            render :show
        else
            render json: @vote.errors.full_messages, status: 401
        end
    end
end