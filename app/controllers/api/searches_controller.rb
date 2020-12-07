class Api::SearchesController < ApplicationController

  def show
    @results = Question.where("title LIKE ?", "%#{params[:q]}%")
    render json: @results
  end

end
