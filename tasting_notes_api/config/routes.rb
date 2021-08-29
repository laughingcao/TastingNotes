Rails.application.routes.draw do

  get '/notes/:id', to: 'spirits#notes'

  resources :tasting_notes
  resources :spirits

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
