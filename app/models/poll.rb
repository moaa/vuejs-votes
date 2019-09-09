class Poll < ApplicationRecord
  has_many :choices
  has_many :votes

  def already_voted?(uuid)
    votes.map(&:session_id).include? uuid
  end
end
