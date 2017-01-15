/**
 * Created by Owner on 1/11/2017.
 */
import Server from "socket.io";

export default function startServer(store){
    const io = new Server().attach(8090);
    io.on("connection",(socket)=>{
        socket.emit("state",store.getState().toJS());
        socket.on("action",store.dispatch.bind(store));
    });

    store.subscribe(()=>{
        io.emit("state",store.getState().toJS());
    });

}