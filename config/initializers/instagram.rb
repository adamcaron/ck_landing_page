require 'instagram'

Instagram.configure do |config|
  config.client_id = ENV["INSTAGRAM_ID"]
  config.access_token = ENV["TOKEN"]
end