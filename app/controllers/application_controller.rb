class ApplicationController < ActionController::Base
  before_action :set_session_id

  protected
  def set_session_id
    session[:uuid] ||= SecureRandom.uuid
  end
end
