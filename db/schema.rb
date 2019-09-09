# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_09_06_165002) do

  create_table "choices", force: :cascade do |t|
    t.integer "poll_id", null: false
    t.string "title"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["poll_id"], name: "index_choices_on_poll_id"
  end

  create_table "polls", force: :cascade do |t|
    t.string "owner_session_id"
    t.string "question"
    t.string "owner_ip"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "user_agent"
  end

  create_table "votes", force: :cascade do |t|
    t.integer "poll_id", null: false
    t.integer "choice_id", null: false
    t.string "session_id"
    t.string "voter_ip"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "user_agent"
    t.index ["choice_id"], name: "index_votes_on_choice_id"
    t.index ["poll_id"], name: "index_votes_on_poll_id"
  end

  add_foreign_key "choices", "polls"
  add_foreign_key "votes", "choices"
  add_foreign_key "votes", "polls"
end
