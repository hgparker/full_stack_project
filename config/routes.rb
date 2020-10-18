Rails.application.routes.draw do

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :questions, only: [:create, :destroy, :index, :show, :update]
  end
  root to: 'static#root'

end
