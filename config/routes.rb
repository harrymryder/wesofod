Rails.application.routes.draw do
  root to: 'pages#home'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get 'about', to: 'pages#about', as: :about
  get 'village-of-hope', to: 'pages#village', as: :village
  get 'rrc', to: 'pages#rrc', as: :rrc
  get 'contact', to: 'pages#contact', as: :contact
end
