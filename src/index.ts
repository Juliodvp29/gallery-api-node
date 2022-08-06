import app from "./app";
import { connect } from "./db";

async function main() {
    connect();
    await app.listen(app.get("port"));
    console.log(`Server on port ${app.get("port")}`);
}

main();