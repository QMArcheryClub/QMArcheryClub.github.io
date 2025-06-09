

build:
	# use the template generator tool
	./template-compiler 	


copy:
	# copy stuff
	sudo cp ./localNginx.conf /etc/nginx/sites-enabled/qmac

	# restart nginx
	sudo nginx -s reload
	
	echo "asd"
