class Spirit < ApplicationRecord
    has_many :tasting_notes

    validates :name, presence: true
    validates :name, uniqueness: true
    validates :abv, presence: true
    validates :orign, presence: true
    validates :spirit, presence: true
end
