
echo -e "What you like to do?, enter a Task Id from list below: \n"
echo -e "TaskID\tFile\t\tDescription"
echo -e "1\t Run Docker - Docker Test Enviroment "
echo -e "2\t Stop Docker"
echo -e "3\t Clean Docker - Clean the docker containers and volumes "
echo -e "4\t Clean All - Clean the docker containers and volumes and images "
echo -e "5\t Watch development "


until [ "$task" = "0" ]; do 
read task
    
if [ "$task" = "1" ]; then
    echo "...${task}"
    npm run build
    cp -Rf dist pages/public/
    cd dockers
    docker-compose up -d
    echo "Go to:"
    echo "http:/127.0.0.1"
    echo "or"
    echo "http:/app.local"    
    cd ../
    chromium https://app.local &

elif [ "$task" = "2" ]; then
    echo "...${task}"
    cd dockers
    docker-compose down
    cd ../
    
elif [ "$task" = "3" ]; then
    echo "...${task}"    
    docker rm --force `docker ps -qa`
    docker volume rm $(docker volume ls -q --filter dangling=true)
    docker network prune --force
    
elif [ "$task" = "4" ]; then
    echo "...${task}"
    docker rm --force `docker ps -qa`
    docker volume rm $(docker volume ls -q --filter dangling=true)
    docker network prune
    docker rmi --force `docker images -aq` 

elif [ "$task" = "5" ]; then
    echo "...${task}"
    watchify log2textarea.js  --s Log2textarea -o dist/log2textarea.js -v

    
else
    echo "Goodbye! - Exit"
fi

sleep 3

./ask.sh

done 
