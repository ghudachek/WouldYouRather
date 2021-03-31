Rails.application.routes.draw do
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  resources :likes
  resources :comments
  resources :questions, except: :update
  resources :users, except: :index
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
