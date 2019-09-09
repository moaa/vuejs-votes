class CreatePolls < ActiveRecord::Migration[6.0]
  def change
    create_table :polls do |t|
      t.string :owner_session_id
      t.string :question
      t.string :owner_ip

      t.timestamps
    end
  end
end
