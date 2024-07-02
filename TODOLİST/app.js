let tasks = []; // Görevlerin tutulduğu dizi

        // Yeni bir görev ekler
        function addTask(){
            const taskInput = document.getElementById('taskInput'); // Görev girişi için metin kutusunu alır
            const taskText = taskInput.value.trim(); // Kullanıcının girdiği görevi alır ve baştaki ve sondaki boşlukları temizler

            if (taskText) { // Eğer görev metni boş değilse
                tasks.push({text: taskText, done: false}); // Görevi görevler listesine ekler
                taskInput.value = ""; // Girdi alanını temizler
                displayTasks(); // Görevleri ekrana yazar
            }
        }

        // Görevleri ekrana yazar
        function displayTasks() {
            const taskList = document.getElementById('taskList'); // Görev listesini alır
            taskList.innerHTML = ""; // Görev listesini temizler

            tasks.forEach((task, index) => { // Her görev için
                const li = document.createElement('li'); // Yeni bir liste elemanı oluşturur
                li.textContent = task.text; // Görevin metnini ekler
                li.style.textDecoration = task.done ? "line-through" : "none"; // Görev tamamlandıysa üstü çizilir, tamamlanmadıysa çizilmez

                li.addEventListener("click", function(){
                    toggleTask(index); // Görev tıklanırsa tamamlanmış/tamamlanmamış olarak işaretlenir
                });

                const deleteButton = document.createElement('button'); // Silme butonu oluşturur
                deleteButton.textContent = "delete"; // Silme butonuna "delete" metni ekler
                deleteButton.addEventListener("click", function(){
                    deleteTask(index); // Buton tıklanırsa görev silinir
                });

                li.appendChild(deleteButton); // Butonu liste elemanına ekler
                taskList.appendChild(li); // Liste elemanını görev listesine ekler
            });
        }

        // Bir görevi tamamlanmış veya tamamlanmamış olarak işaretler
        function toggleTask(index){
            tasks[index].done = !tasks[index].done; // Görevin tamamlanma durumunu tersine çevirir
            displayTasks(); // Görevleri günceller ve ekrana yazar
        }

        // Bir görevi siler
        function deleteTask(index){
            tasks.splice(index, 1); // Görevi listeden çıkarır
            displayTasks(); // Görevleri günceller ve ekrana yazar
        }

        // Sayfa yüklendiğinde görevleri gösterir
        displayTasks();