class TastingNote < ApplicationRecord
    belongs_to :spirit

    validates :tasting_note, presence: true
end
