class Api::SearchesController < ApplicationController

  def show
    @results = Question.where("title LIKE ?", "%#{params[:q]}%").includes(:votes, :author).select(:id, :title, :author_id, :created_at)
    render :show
  end

end
