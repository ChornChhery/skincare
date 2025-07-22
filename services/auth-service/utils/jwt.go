package utils

import (
	"os"
	"strconv"
	"time"

	"github.com/golang-jwt/jwt/v5"
	"github.com/google/uuid"
)

func getJWTSecret() []byte {
	secret := os.Getenv("JWT_SECRET_KEY")
	if secret == "" {
		panic("JWT_SECRET_KEY not set")
	}
	return []byte(secret)
}

func getJWTExpiration() time.Duration {
	hours := os.Getenv("JWT_EXPIRATION_HOURS")
	if hours == "" {
		return 24 * time.Hour // default to 24 hours
	}

	h, err := strconv.Atoi(hours)
	if err != nil {
		return 24 * time.Hour
	}
	return time.Duration(h) * time.Hour
}

type Claims struct {
	UserID uuid.UUID `json:"user_id"`
	Email  string    `json:"email"`
	jwt.RegisteredClaims
}

func GenerateToken(userID uuid.UUID, email string) (string, error) {
	claims := Claims{
		UserID: userID,
		Email:  email,
		RegisteredClaims: jwt.RegisteredClaims{
			ExpiresAt: jwt.NewNumericDate(time.Now().Add(getJWTExpiration())),
			IssuedAt:  jwt.NewNumericDate(time.Now()),
		},
	}

	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)
	return token.SignedString(getJWTSecret())
}

func ValidateToken(tokenString string) (*Claims, error) {
	token, err := jwt.ParseWithClaims(tokenString, &Claims{}, func(token *jwt.Token) (interface{}, error) {
		return getJWTSecret(), nil
	})

	if err != nil {
		return nil, err
	}

	if claims, ok := token.Claims.(*Claims); ok && token.Valid {
		return claims, nil
	}

	return nil, jwt.ErrSignatureInvalid
}
