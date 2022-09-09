### Question
Bagaimana menangani keamanan dalam pengiriman data (backend dan mobile apps)
pada sistem diatas.

### Answer
Untuk menangani keamanan, salah satu hal yang mungkin saya lakukan adalah dengan membuat acces_token untuk setiap request yang dilakukan oleh user/client. Selain itu, saya juga akan menerapkan API throttling, sehingga setiap user akan memiliki limit untuk melakukan request-request tertentu.