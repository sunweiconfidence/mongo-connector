//(C) Copyright 2012, 10gen

//=========================================#
//         Configure Mongos                #
//=========================================#

printjson(db._adminCommand({addShard: "demo-repl/localhost:27117", maxSize:1}));
printjson(db._adminCommand({addShard: "demo-repl-2/localhost:27317", maxSize:1 }));
printjson(db._adminCommand({enablesharding : "alpha" }));
printjson(db._adminCommand({shardcollection : "alpha.foo", key : { "_id" : 1} })); 

