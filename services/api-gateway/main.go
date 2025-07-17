package main

import (
	"net/http"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.Default()

	// CORS middleware
	r.Use(cors.New(cors.Config{
		AllowOrigins:     []string{"http://localhost:3000"},
		AllowMethods:     []string{"GET", "POST", "PUT", "DELETE"},
		AllowHeaders:     []string{"Origin", "Content-Type", "Authorization"},
		AllowCredentials: true,
	}))

	// Health check
	r.GET("/health", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{
			"status":  "OK",
			"message": "Skincare API Gateway is running",
		})
	})

	// API routes
	api := r.Group("/api/v1")
	{
		api.GET("/products", getProducts)
		api.GET("/products/:id", getProduct)
	}

	r.Run(":8080")
}

func getProducts(c *gin.Context) {
	// Mock data for now
	products := []map[string]interface{}{
		{
			"id":       1,
			"name_en":  "Gentle Cleanser",
			"name_th":  "เจลล้างหน้าอ่อนโยน",
			"name_km":  "ក្រែមលាងមុខ",
			"price":    25.99,
			"category": "cleanser",
		},
		{
			"id":       2,
			"name_en":  "Moisturizing Cream",
			"name_th":  "ครีมบำรุงผิว",
			"name_km":  "ក្រែមបំណើម",
			"price":    35.50,
			"category": "moisturizer",
		},
	}

	c.JSON(http.StatusOK, gin.H{
		"data":    products,
		"message": "Products retrieved successfully",
	})
}

func getProduct(c *gin.Context) {
	id := c.Param("id")

	// Mock single product
	product := map[string]interface{}{
		"id":             id,
		"name_en":        "Gentle Cleanser",
		"name_th":        "เจลล้างหน้าอ่อนโยน",
		"name_km":        "ក្រែមលាងមុខ",
		"price":          25.99,
		"category":       "cleanser",
		"description_en": "A gentle cleanser for all skin types",
		"description_th": "เจลล้างหน้าอ่อนโยนสำหรับทุกสภาพผิว",
		"description_km": "ក្រែមលាងមុខសម្រាប់ស្បែកគ្រប់ប្រភេទ",
	}

	c.JSON(http.StatusOK, gin.H{
		"data":    product,
		"message": "Product retrieved successfully",
	})
}
