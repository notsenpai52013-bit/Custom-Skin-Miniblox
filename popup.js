document.getElementById('apply').addEventListener('click', async () => {
  const url = document.getElementById('skin').value.trim();

  if (!url) {
    alert('Paste a skin PNG URL!');
    return;
  }

  localStorage.setItem('miniblox_custom_skin_url', url);

  const [tab] = await chrome.tabs.query({
    active: true,
    currentWindow: true
  });

  chrome.tabs.reload(tab.id);
});
