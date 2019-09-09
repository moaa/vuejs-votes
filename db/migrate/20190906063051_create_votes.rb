class CreateVotes < ActiveRecord::Migration[6.0]
  def change
    create_table :votes do |t|
      t.references :poll, null: false, foreign_key: true
      t.references :choice, null: false, foreign_key: true
      t.string :session_id
      t.string :voter_ip

      t.timestamps
    end
  end
end
