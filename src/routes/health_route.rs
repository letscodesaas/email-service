use axum::{
    Router,
    routing::get
};
use crate::handlers::health_handler::health_handler;



pub fn health_route()->Router{
    return  Router::new().route("/health", get(health_handler));
}
