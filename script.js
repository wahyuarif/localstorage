//kunci untuk menyimpan dan mengambil data dari local storage
const localStorageKey = "JUMLAHCLICK";
//cek apakah browser mendukung local storage
if(typeof Storage !== 'undefined') {
    console.log(typeof Storage);
    //inisialisasi data di local storage jika belum ada
    if(localStorage.getItem(localStorageKey) === null) {
        localStorage.setItem(localStorageKey, 0);
    }

    const incrementBtn = document.querySelector('#incrementBtn');
    const clearBtn = document.querySelector('#clear');
    const countDisplay = document.querySelector('#count');

    countDisplay.innerText = localStorage.getItem(localStorageKey);

    incrementBtn.addEventListener('click', function() {
        let count = localStorage.getItem(localStorageKey);
        count++;
        localStorage.setItem(localStorageKey, count);
        countDisplay.innerText = localStorage.getItem(localStorageKey);
    });

    clearBtn.addEventListener('click', function() {
        localStorage.removeItem(localStorageKey);
        countDisplay.innerText = 0;
    })

} else {
    alert('Browser tidak mendukung web storage');
}
