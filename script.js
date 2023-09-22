document.addEventListener('DOMContentLoaded', () => {
  const list = document.getElementById('infi-list');
  let isLoading = false; // Variable to track if new items are being loaded

  // Function to add a specified number of list items
  const addListItems = (count) => {
    for (let i = 0; i < count; i++) {
      const listItem = document.createElement('li');
      listItem.textContent = `List Item ${list.children.length + 1}`;
      list.appendChild(listItem);
    }
  };

  // Add 10 list items by default
  addListItems(10);

  // Function to handle scroll and add more items when reaching the end
  const handleScroll = () => {
    if (!isLoading && list.scrollTop + list.clientHeight >= list.scrollHeight - 10) {
      isLoading = true; // Set loading state to prevent multiple calls

      // Simulate loading delay (you can replace this with an API call)
      setTimeout(() => {
        // Add 2 more list items
        addListItems(2);
        isLoading = false; // Reset loading state
      }, 1000); // Simulate a delay of 1 second (adjust as needed)
    }
  };

  // Listen for scroll events on the list
  list.addEventListener('scroll', handleScroll);
});
