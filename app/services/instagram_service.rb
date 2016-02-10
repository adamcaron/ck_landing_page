class InstagramService
  def self.recent_posts(count)
    Instagram.user_recent_media("262966103", { count: count })
  end
end