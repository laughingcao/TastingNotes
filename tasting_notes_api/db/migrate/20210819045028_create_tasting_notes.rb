class CreateTastingNotes < ActiveRecord::Migration[6.1]
  def change
    create_table :tasting_notes do |t|

      t.timestamps
    end
  end
end
