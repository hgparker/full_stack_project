class Api::CommentsController < ApplicationController

  def create
      @comment = Comment.new(comment_params)
      if @comment.save
          render :show
      else
          render json: @comment.errors.full_messages, status: 401
      end
  end

  def destroy
      @comment = Comment.find_by(id: params[:id])
      if @comment
          @comment.destroy
          render :show
      else
          render json: ["No such comment found"], status: 401
      end
  end

  def update
      @comment = Comment.find_by(id: params[:id])
      if @comment && @comment.update(comment_params)
          render :show
      elsif @comment
          render json: ["No such comment found"], status: 401
      else
          render json: @comment.errors.full_messages, status: 401
      end
  end

  private
  def comment_params
      params.require(:comment).permit(:body, :author_id, :answer_id)
  end

end






