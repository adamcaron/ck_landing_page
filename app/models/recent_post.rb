class RecentPost
  def self.all
    response = InstagramService.recent_posts(3)
    response.map { |post| RecentPost.new(post) }
  end

  attr_reader :image_url, :caption, :link

  def initialize(post_data)
    @image_url = post_data[:images][:standard_resolution][:url]
    @caption   = post_data[:caption][:text]
    @link      = post_data[:link]
  end
end