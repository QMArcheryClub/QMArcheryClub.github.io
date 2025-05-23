
run:
	cd goPages && go build && go run .

test:
	cd goPages && go test -cover

coverage:
	cd goPages && go test -coverprofile cover.out && go tool cover -html=cover.out

build:
	# copy stuff
	sudo cp ./localNginx.conf /etc/nginx/sites-enabled/qmac

	# restart nginx
	sudo nginx -s reload
	
	echo "asd"
