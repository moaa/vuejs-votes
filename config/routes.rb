Rails.application.routes.draw do
  root to: 'landing#index'
  get '/my_polls', to: 'polls#mine'
  resources :polls do
    post :cast_vote
    get :results
  end
end
