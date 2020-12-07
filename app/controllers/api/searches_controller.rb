class Api::SearchesController < ApplicationController

  def show
    @results = Question.where("title LIKE ?", "%#{params[:q]}%").includes(:votes).select(:id, :title)
    render :show
  end

end
