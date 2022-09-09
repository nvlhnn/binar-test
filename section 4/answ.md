### Question
Dari dokumen https://testbinar.docs.apiary.io/, menurut anda, apakah ada desian API
yang kurang maupun keliru? Jika ada, tuliskan kekurangan-kekurangan desain tersebut
dan bagaimana seharusnya dokumentasi itu ditulis.

### Answer
* Untuk respon data yang kosong, mungkin lebih baik jika mengembalikan **null** daripada object kosong **{}** seperti pada attribute **errors* . agar memudahkan front end dalam mengolah data.
* Pada dokumentasi mungkin bisa ditambahkan dengan contoh request yang fail/gagal sesuan dengan status code nya, seperti 400, 403, atau 500.