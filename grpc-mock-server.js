const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');

const PROTO_PATH = __dirname + '/proto/tracking.proto';

const packageDefinition = protoLoader.loadSync(
    PROTO_PATH,
    {
        keepCase: true,
        longs: String,
        enums: String,
        defaults: true,
        oneofs: true
    });

const unittracking_proto = grpc.loadPackageDefinition(packageDefinition).unittracking;

function units(call, callback) {
    console.log(call);
    console.log(callback);
    const response = { status: '200' };
    callback(null, response);
}

function main() {
    const server = new grpc.Server();
    server.addService(unittracking_proto.TrackingService.service, { Units: units });

    server.bindAsync('localhost:8080', grpc.ServerCredentials.createInsecure(), () => {
        server.start();
        console.log('server is running on port 8080');
    });
}

main();