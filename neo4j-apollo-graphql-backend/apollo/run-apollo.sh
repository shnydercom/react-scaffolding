docker run -p 1212:4000 -v $PWD/:/src/app --name prototyping-apollo --env NEO4J_URI=neo4j-prototyping:7687 --net prototyping-net prototyping-apollo:latest