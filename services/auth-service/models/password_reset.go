package models

import (
    "time"
    "github.com/google/uuid"
)

type PasswordResetToken struct {
    ID           uuid.UUID  `json:"id" gorm:"type:uuid;primary_key;default:gen_random_uuid()"`
    UserID       uuid.UUID  `json:"user_id" gorm:"type:uuid;not null"`
    FirstName    string     `json:"first_name" gorm:"not null"`
    LastName     string     `json:"last_name" gorm:"not null"`
    Phone        string     `json:"phone" gorm:"not null"`
    DateOfBirth  *time.Time `json:"date_of_birth"`
    Email        string     `json:"email" gorm:"not null"`
    Gender       string     `json:"gender" gorm:"type:varchar(10)"`
    Used         bool       `json:"used" gorm:"default:false"`
    CreatedAt    time.Time  `json:"created_at"`
}
