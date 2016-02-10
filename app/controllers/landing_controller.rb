class LandingController < ApplicationController
  def show
    @recent_posts = RecentPost.all
  end
end