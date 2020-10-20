class Api::AnswersController < ApplicationController

    def create
        @answer = Answer.new(answer_params)
        if @answer.save
            render :show
        else
            render json: @answer.errors.full_messages, status: 401
        end
    end

    def destroy
        @answer = Answer.find_by(id: params[:id])
        if @answer
            @answer.destroy
            render :show
        else
            render json: ["No such answer found"], status: 401
        end
    end

    def update
        @answer = Answer.find_by(id: params[:id])
        if @answer && @answer.update(answer_params)
            render :show
        elsif @answer
            render json: ["No such answer found"], status: 401
        else
            render json: @answer.errors.full_messages, status: 401
        end
    end

    private
    def answer_params
        params.require(:answer).permit(:body, :author_id, :question_id)
    end
end
