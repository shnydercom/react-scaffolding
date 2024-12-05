docker run \
    -d \
    -p 7474:7474 -p 7687:7687 \
    -v $PWD/neo4j/data:/data -v $PWD/neo4j/logs:/logs -v $PWD/neo4j/import:/var/lib/neo4j/import -v $PWD/neo4j/plugins:/plugins \
    --name neo4j-prototyping \
    --env NEO4J_AUTH=neo4j/notASecretPW \
    --net prototyping-net --env NEO4J_AUTH=neo4j/notASecretPW \
    -e NEO4J_apoc_export_file_enabled=true \
    -e NEO4J_apoc_import_file_enabled=true \
    -e NEO4J_apoc_import_file_use__neo4j__config=true \
    -e NEO4JLABS_PLUGINS=\[\"apoc\"\] \
    neo4j:latest