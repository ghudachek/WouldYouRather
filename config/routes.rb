Rails.application.routes.draw do
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'

  resources :questions do
    resources :comments, except: :update    
  end

  resources :users, except: :index do
    resources :questions do
      resources :comments, except: :update    
    end
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
