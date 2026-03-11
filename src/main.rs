mod handlers;
use axum::{
    Router, routing::get
};
use handlers::handler::root;


#[tokio::main]
async fn main() {
    let  app = Router::new().route("/",get(root));
    
    let listner = tokio::net::TcpListener::bind("0.0.0.0:3000").await.unwrap();
    axum::serve(listner,app).await.unwrap();
}
