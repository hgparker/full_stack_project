Rails.application.routes.draw do

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :questions, only: [:create, :destroy, :index, :show, :update]
    resources :answers, only: [:create, :update, :destroy]
    resources :votes, only: [:create]
    resources :comments, only: [:create, :update, :destroy]
  end


  root to: 'static#root'

end
