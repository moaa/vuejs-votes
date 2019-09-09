class AddUserAgentToPoll < ActiveRecord::Migration[6.0]
  def change
    add_column :polls, :user_agent, :string
  end
end
