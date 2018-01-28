class Customer < ApplicationRecord
  has_many :customer_courses
  has_many :courses,through: :customer_courses
  has_many :instructors,through: :courses
end
