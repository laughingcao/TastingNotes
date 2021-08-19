class CreateTastingNotes < ActiveRecord::Migration[6.1]
  def change
    create_table :tasting_notes do |t|
      t.string :tasting_note

      t.timestamps
    end
  end
end
