

function toggleSidebar() {
    var sidebar = document.getElementById("sidebar");
    var body = document.querySelector(".body");
    var myButton = document.querySelector('button.toggle-btn');

    myButton.classList.toggle('open')

    sidebar.classList.toggle("open");
    body.classList.toggle("sidebar-opened");
}


document.getElementById('comment-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var commentText = document.getElementById('comment').value;
    if (commentText.trim() !== '') {
        var commentElement = document.createElement('div');
        commentElement.textContent = commentText;
        document.getElementById('comments').appendChild(commentElement);
        document.getElementById('comment').value = '';
    }
});

// Sidebar açıldığında textarea boyutunu küçülten fonksiyon
function adjustTextareaSize() {
    const sidebar = document.querySelector('.sidebar');
    const textarea = document.querySelector('textarea');
    if (sidebar.classList.contains('open')) {
    
        textarea.style.height = '50px'; // Örnek olarak textarea'nın yüksekliğini 30 piksel olarak ayarladık
        textarea.style.width = '40%'; // Örnek olarak textarea'nın genişliğini 200 piksel olarak ayarladık
        
    } else {
        // Sidebar kapalıysa textarea boyutunu eski haline getir
        textarea.style.height = ''; 
        textarea.style.width = ''; 
    }
}

// Sidebar açıldığında veya kapatıldığında textarea boyutunu ayarla
document.querySelector('.toggle-btn').addEventListener('click', adjustTextareaSize);
