Rails.application.routes.draw do
  resources :cocktails
  resources :ingredients, only: [:new, :add]
  get '/', to: 'cocktails#index'
  delete '/cocktails/:id', to: 'cocktails#destroy', as: :destroy
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
