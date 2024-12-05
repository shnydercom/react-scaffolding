import { Neo4jGraphQL } from "@neo4j/graphql";
import { gql, ApolloServer } from "apollo-server";
import neo4j, { Driver } from "neo4j-driver";
import dotenv from "dotenv";
import fs from "fs";
import { setTimeout } from "timers/promises";

dotenv.config();

const PROTOCOL = "bolt://";
const FULL_URI = `${PROTOCOL}${process.env.NEO4J_URI}`;

async function checkDBHealthWaitOrContinue(neo4jDriver: Driver) {
  try {
    const serverInfo = await neo4jDriver.verifyConnectivity();
    console.log(`accessing neo4j successful at: ${serverInfo.address}`);
    return false;
  } catch (error) {
    console.log(error)
    console.log("connections unsuccessful, waiting for 5s");
    await setTimeout(5000, "result");
    return true;
  }
}

async function setupServer() {
  const gqlSchema = fs.readFileSync("./schema/prototyping.gql");
  const typeDefs = gql`
    ${gqlSchema}
  `;
  console.log(`connecting to ${FULL_URI}`);
  const NEO4J_USER = process.env.NEO4J_USER;
  const NEO4J_PASSWORD = process.env.NEO4J_PASSWORD;
  if (!NEO4J_USER || !NEO4J_PASSWORD) {
    console.log("NEO4J_USER and NEO4J_PASSWORD need to be set. Shutting down");
    return;
  }
  const driver = neo4j.driver(
    FULL_URI,
    neo4j.auth.basic(NEO4J_USER, NEO4J_PASSWORD)
  );
  let healthCondition = false;
  do {
    healthCondition = await checkDBHealthWaitOrContinue(driver);
  } while (healthCondition);

  const neoSchema = new Neo4jGraphQL({
    typeDefs,
    driver,
  });
  //neoSchema.checkNeo4jCompat().then((val: any) => console.log(val));

  await neoSchema.assertIndexesAndConstraints({ options: { create: true } });
  const server = new ApolloServer({
    schema: neoSchema.schema,
  });

  server.listen().then(({ url }: any) => {
    console.log(`GraphQL server ready on ${url}`);
  });
}
setupServer();
export {};
