// ฟังก์ชันแสดงข้อความแจ้งเตือนเมื่อคลิกปุ่ม
document.getElementById('emailBtn').addEventListener('click', function(event) {
    alert('You clicked the Email button!');
  });
  
  document.getElementById('facebookBtn').addEventListener('click', function(event) {
    alert('You clicked the Facebook button!');
  });
  
  document.getElementById('instagramBtn').addEventListener('click', function(event) {
    alert('You clicked the Instagram button!');
  });
  
  // ฟังก์ชันที่ทำให้ปุ่มมีการเคลื่อนไหวเมื่อ hover
  document.querySelectorAll('.social-btn').forEach(button => {
    button.addEventListener('mouseover', function() {
      button.style.transform = "scale(1.1)"; // ขยายปุ่มเมื่อ hover
      button.style.transition = "transform 0.2s ease";
    });
    
    button.addEventListener('mouseout', function() {
      button.style.transform = "scale(1)"; // กลับขนาดปกติเมื่อไม่ hover
    });
  });
  