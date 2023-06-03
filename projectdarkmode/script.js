$(document).ready(function() {
    const storeItems = [
      {
        name: 'TV',
        price: 800.00,
        inStock: true,
        details: '4K Ultra HD'
      },
      {
        name: 'Phone',
        price: 700.00,
        inStock: false,
        details: '5G'
      },
      {
        name: 'Game Console',
        price: 300.00,
        inStock: true,
        details: 'The latest and greatest'
      },
      {
        name: 'Laptop',
        price: 1200.00,
        inStock: true,
        details: '16GB RAM 1TB SSD'
      },
      {
        name: 'Smart Watch',
        price: 200.00,
        inStock: false,
        details: 'Counts your steps'
      },
      {
        name: 'Headphones',
        price: 100.00,
        inStock: true,
        details: 'Clearest music to be heard'
      },
      {
        name: 'Keyboard',
        price: 100.00,
        inStock: true,
        details: 'Types for you'
      },
      {
        name: 'HDMI Cord',
        price: 100.00,
        inStock: true,
        details: 'HDMI to USB type C'
      },
      {
        name: 'Monitor',
        price: 300.00,
        inStock: true,
        details: '4K Ultra HD'
      },
      {
        name: 'Speaker',
        price: 200.00,
        inStock: true,
        details: 'Clearest music to be heard'
      },
      {
        name: 'Video Game',
        price: 60.00,
        inStock: true,
        details: 'Enjoy for hours'
      },
    ];
  
    const parentElement = $('#appendToMe');
  
    // Loop through the storeItems array
    for (const item of storeItems) {
      if (item.inStock) {
        // Create HTML elements dynamically
        const card = $('<div>').addClass('card');
        const priceElement = $('<div>').addClass('card-price').text(`$${item.price}`);
        const nameElement = $('<div>').addClass('card-details').text(item.name);
        const detailsElement = $('<div>').addClass('card-details').text(item.details);
        
        // Append the price, name, and details elements to the card
        card.append(priceElement, nameElement, detailsElement);
        
        // Append the card to the parent element
        parentElement.append(card);
      }
    }
  
    // Add click event handler to toggle dark mode
    $('#clickMe').click(function() {
      $('#contentContainer').toggleClass('darkMode');
      $(this).toggleClass('darkMode');
      $('#productsHeader').toggleClass('darkMode');
      $('body').toggleClass('darkMode');
      
      // Toggle border color of the button
      if ($(this).hasClass('darkMode')) {
        $(this).css('border-color', '#fff');
      } else {
        $(this).css('border-color', '#333');
      }
    });
  });