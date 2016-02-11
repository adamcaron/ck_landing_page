Rails.application.routes.draw do
  root 'landing#show'
  get  '/process', to: "documentation#show"
end