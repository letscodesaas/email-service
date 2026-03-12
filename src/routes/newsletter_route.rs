use axum::{
    Router, routing::post,
};


pub fn newsletter_handler()-> Router{
    return Router::new().route("/newsletter", post(handler))
}