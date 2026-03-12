use mongodb::{ 
	Client,
};


pub async fn connection_db() -> mongodb::Database{
    let uri = "";
    // mongodb client
    let client = Client::with_uri_str(uri).await.unwrap();
    // mongodb database
    let database = client.database("test");
    println!("Database connected");
    return database;
}