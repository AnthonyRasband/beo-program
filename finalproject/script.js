$(document).ready(function() {
    let counter = 0;

    $('#commentForm').on('submit', function(event) {
        event.preventDefault();

        const displayName = $('#displayNameInput').val();
        const comment = $('#commentInput').val();

        if (displayName === "" || comment === "") {
            return alert("There are empty inputs");
        }
        counter++;
        const newCard = `
            <div id="${counter}" class="card"> 
            <button class="editButton">Edit</button>
            <button class="deleteButton">Delete</button>
                <div class="name">${displayName}</div>
                <div class="comment">${comment}</div>
            </div>
        `; 

        if (counter === 1) {
            $('.originalPost').html(newCard);
            $('.originalPost').addClass('finalOriginalPost');
            $('.editButton').css('display','none');
            $('.deleteButton').css('display','none');
        } else {
            $('#mainContainer').prepend(newCard);
        }
        $('#displayNameInput').val('');
        $('#commentInput').val('');
    });// lining up cards with prepend

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
          const editedComment = card.find('.editCommentInput').val();
          card.find('.comment').text(editedComment); 
          card.html(`
            <button class="editButton">Edit</button>
            <button class="deleteButton">Delete</button>
            <div class="name">${card.find('.name').text()}</div>
            <div class="comment">${editedComment}</div>
            
          `);
        });
      });
    
      $(document).on('click', '.deleteButton', function() {
        const card = $(this).closest('.card');
        card.remove();
      });
    });  
