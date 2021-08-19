class CreateSpirits < ActiveRecord::Migration[6.1]
  def change
    create_table :spirits do |t|
      t.string :name
      t.string :spirit
      t.integer :abv
      t.string :origin

      t.timestamps
    end
  end
end
