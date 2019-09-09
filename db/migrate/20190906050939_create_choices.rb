class CreateChoices < ActiveRecord::Migration[6.0]
  def change
    create_table :choices do |t|
      t.references :poll, null: false, foreign_key: true
      t.string :title

      t.timestamps
    end
  end
end
