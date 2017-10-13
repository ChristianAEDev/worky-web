# Determine this makefile's path.
# Be sure to place this BEFORE `include` directives, if any.
THIS_FILE := $(lastword $(MAKEFILE_LIST))


output-folder=output
output-folder-linux=$(output-folder)/linux
output-folder-windows=$(output-folder)/windows

clear:
	if [ -d $(output-folder) ]; then rm -r $(output-folder); fi
	if [ -d client ]; then rm -r client; fi

build: 
	# Test if the output folder exists. If not create it.
	test -d $(output-folder) || mkdir $(output-folder)
	# Clear folder of previous builds
	rm -rfv $(output-folder)/*

	# Execute the linux specific build
	@$(MAKE) -f $(THIS_FILE) build-linux
	# Execute the windows specific build
	@$(MAKE) -f $(THIS_FILE) build-windows

build-linux:
	# Test if the output folder exists. If not create it.
	test -d $(output-folder-linux) || mkdir $(output-folder-linux)
	# Build React frontend
	npm run build
	# Copy the frontend build to the output folder	
	mv build $(output-folder-linux)
	# Build the Go server
	cd server; go build
	# Copy Go server to output directory
	mv worky-web $(output-folder-linux)
	# Compress the output to a release package
	zip -r $(output-folder-linux).zip $(output-folder-linux)
	
build-windows:
	# Test if the output folder exists. If not create it.
	test -d $(output-folder-windows) || mkdir $(output-folder-windows)
	# Build React frontend
	npm run build
	# Copy the frontend build to the output folder	
	mv build $(output-folder-windows)
	# Build the Go server
	GOOS=windows GOARCH=386 go build -o worky-web.exe
	# Copy Go server to output directory
	mv worky-web.exe $(output-folder-windows)
	# Compress the output to a release package
	zip -r $(output-folder-windows).zip $(output-folder-windows)