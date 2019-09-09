class AddUserAgentToVotes < ActiveRecord::Migration[6.0]
  def change
    add_column :votes, :user_agent, :string
  end
end
