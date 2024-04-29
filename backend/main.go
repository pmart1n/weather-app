package main

import (
	"fmt"
	"io"
	"log"
	"net/http"
)

func main() {
	http.HandleFunc("/weather", weatherHandler)
	log.Println("Server starting on :8080...")
	if err := http.ListenAndServe(":8080", nil); err != nil {
		log.Fatal(err)
	}
}

func weatherHandler(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Access-Control-Allow-Origin", "http://localhost:3000")
	if r.Method == "OPTIONS" {
		w.Header().Set("Access-Control-Allow-Methods", "POST, GET, OPTIONS")
		w.Header().Set("Access-Control-Allow-Headers", "Accept, Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization")
		w.WriteHeader(http.StatusOK)
		return
	}

	lat := r.URL.Query().Get("lat")
	lon := r.URL.Query().Get("lon")
	apiKey := "45881514d73b4f97b3690641242604"
	url := fmt.Sprintf("http://api.weatherapi.com/v1/current.json?key=%s&q=%s,%s&aqi=no", apiKey, lat, lon)

	resp, err := http.Get(url)
	if err != nil {
		http.Error(w, "Failed to retrieve weather", http.StatusInternalServerError)
		return
	}
	defer resp.Body.Close()

	data, err := io.ReadAll(resp.Body)
	if err != nil {
		http.Error(w, "Failed to read response body", http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	w.Write(data)
}
