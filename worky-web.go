// Minimal http server to allow the deployment of the client in an easy/portable way.
package main

import (
	"log"
	"net/http"

	"github.com/gorilla/mux"
)

func main() {
	port := "8080"
	log.Printf("Starting server on port %v\n", port)

	router := mux.NewRouter()
	router.PathPrefix("/").Handler(http.FileServer(http.Dir("./build")))

	log.Printf("Open http://localhost:%v to open the client", port)

	http.ListenAndServe(":"+port, router)
}
