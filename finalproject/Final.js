$(document).ready(function() {
  let count = 0;

  $('#commentForm').on('submit', function(event) {
      event.preventDefault();

      const name = $('#nameInput').val();
      const comment = $('#commentInput').val();

      if (name === "" || comment === "") {
          return alert("There are empty inputs");
      }
      count++;
      const newCard = `
          <div id="${count}" class="card"> 
          <button class="editButton">Edit</button>
          <button class="deleteButton">Delete</button>
              <div class="name">${name}</div>
              <div class="comment">${comment}</div>
          </div>
      `; 

      if (count === 1) {
          $('.originalPost').html(newCard);
          $('.originalPost').addClass('finalOriginalPost');
          $('.editButton').css('display','none');
          $('.deleteButton').css('display','none');
      } else {
          $('#mainContainer').prepend(newCard);
      }
      $('#nameInput').val('');
      $('#commentInput').val('');
  });
  $(document).on('click', '.editButton', function() {
      const card = $(this).closest('.card');
      const commentText = card.find('.comment').text();
      const postId = card.attr('id');
      const editForm = `
        <div class="editContainer">
          <div class="name">${card.find('.name').text()}</div>
          <div class="comment">${commentText}</div>
          <form class="editForm">
            <input class="editCommentInput" value="${commentText}">
            <button type="submit" class="saveButton">Submit</button>
          </form>
        </div>
      `;
  
      card.html(editForm);
  
      card.find('.saveButton').on('click', function(event) {
        event.preventDefault();
        const Edit = card.find('.editCommentInput').val();
        card.find('.comment').text(Edit); 
        card.html(`
          <button class="editButton">Edit</button>
          <button class="deleteButton">Delete</button>
          <div class="name">${card.find('.name').text()}</div>
          <div class="comment">${Edit}</div>
          
        `);
      });
    });
  
    $(document).on('click', '.deleteButton', function() {
      const card = $(this).closest('.card');
      card.remove();
    });
  });  