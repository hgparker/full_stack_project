class Api::QuestionsController < ApplicationController

    def index
        @questions = Question.all.includes(:votes, :author).select(:id, :title, :created_at, :author_id) 
        render :index
    end

    def show
        @question = Question.includes(:author, :votes, :answers, :answer_votes, :answer_comments).find_by(id: params[:id])        
        if @question
            render :show
        else
            render json: ["No such question found"], status: 401
        end
    end

    def create
        @question = Question.new(question_params)
        if @question.save
            render :show
        else
            render json: @question.errors.full_messages, status: 401
        end
    end

    def destroy
        @question = Question.find_by(id: params[:id])
        if @question
            @question.destroy
            render :show
        else
            render json: ["No such question found"], status: 401
        end
    end

    def update
        @question = Question.find_by(id: params[:id])
        if @question && @question.update(question_params)
            render :show
        elsif !@question
            render json: ["No such question found"], status: 401 
        else
            render json: @question.errors.full_messages, status: 401
        end
    end

    private
    def question_params
        params.require(:question).permit(:title, :body, :author_id)
    end
 
end