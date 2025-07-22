package models

import (
	"time"

	"github.com/google/uuid"
)

type User struct {
	ID              uuid.UUID  `json:"id" gorm:"type:uuid;primary_key;default:gen_random_uuid()"`
	Email           string     `json:"email" gorm:"uniqueIndex;not null"`
	Password        string     `json:"-" gorm:"not null"`
	FirstName       string     `json:"first_name" gorm:"not null"`
	LastName        string     `json:"last_name" gorm:"not null"`
	Phone           string     `json:"phone"`
	SkinType        string     `json:"skin_type"`
	Language        string     `json:"language" gorm:"default:'en'"`
	DateOfBirth     *time.Time `json:"date_of_birth"`
	Gender          string     `json:"gender"`
	ProfileImageURL string     `json:"profile_image_url"`
	CreatedAt       time.Time  `json:"created_at"`
	UpdatedAt       time.Time  `json:"updated_at"`
}

type LoginRequest struct {
	Email    string `json:"email" binding:"required,email"`
	Password string `json:"password" binding:"required,min=6"`
}

type RegisterRequest struct {
	Email           string     `json:"email" binding:"required,email"`
	Password        string     `json:"password" binding:"required,min=6"`
	FirstName       string     `json:"first_name" binding:"required"`
	LastName        string     `json:"last_name" binding:"required"`
	Phone           string     `json:"phone"`
	SkinType        string     `json:"skin_type" binding:"omitempty,oneof=normal oily dry combination sensitive"`
	Language        string     `json:"language" binding:"omitempty,oneof=en th kh"`
	DateOfBirth     *time.Time `json:"date_of_birth"`
	Gender          string     `json:"gender" binding:"omitempty,oneof=male female other"`
	ProfileImageURL string     `json:"profile_image_url"`
}

type AuthResponse struct {
	Token string `json:"token"`
	User  User   `json:"user"`
}
