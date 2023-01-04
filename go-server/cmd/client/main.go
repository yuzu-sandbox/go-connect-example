package main

import (
	"context"
	greetv1 "example/gen/greet/v1"
	"example/gen/greet/v1/greetv1connect"
	"github.com/bufbuild/connect-go"
	"log"
	"net/http"
)

func main() {
	client := greetv1connect.NewGreetServiceClient(
		http.DefaultClient,
		"http://localhost:8080")

	res, err := client.Greet(
		context.Background(),
		connect.NewRequest(&greetv1.GreetRequest{Name: "Jane"}))

	if err != nil {
		log.Println(err)
		return
	}
	log.Println(res.Msg.Greeting)
}
