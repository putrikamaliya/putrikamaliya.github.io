function openNavigationDrawer() {
  // Get the navigation drawer element
  const navigationDrawer = document.getElementById('navigationDrawer');

  // Add the "open" class to the navigation drawer element
  navigationDrawer.classList.add('open');
}

function closeNavigationDrawer() {
  // Get the navigation drawer element
  const navigationDrawer = document.getElementById('navigationDrawer');

  // Remove the "open" class from the navigation drawer element
  navigationDrawer.classList.remove('open');
}
