Rails.application.routes.draw do
  resources :answers
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'

  resources :questions do
    resources :answers, only: :create
    resources :comments, except: :update    
  end

  resources :users, except: :index do
    resources :questions, only: :index
    resources :comments, only: :index
  end

  resources :users, only: :index
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
