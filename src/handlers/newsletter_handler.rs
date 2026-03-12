use axum::{
    Json,
    http::StatusCode,
    http::Request
};
use crate::db::connection_db::connection_db;
use serde::{Serialize, Deserialize};



#[derive(Serialize, Deserialize)]
pub async fn newsletter_handler(req:Request<()>){
    let info = req.body();
    
    




}