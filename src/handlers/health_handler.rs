use axum::{Json, http::StatusCode};
use serde_json::json;
pub async fn health_handler() -> (StatusCode, Json<serde_json::Value>) {
    return (
        StatusCode::OK,
        Json(json!({
            "message":"healthy"
        })),
    );
}
