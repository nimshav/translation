<script>
    function showTab(tabId) {
        // Hide all tab content
        document.querySelectorAll('.tab-content').forEach(tab => {
            tab.style.display = 'none';
        });

        // Show the selected tab
        const selectedTab = document.getElementById(tabId);
        if (selectedTab) {
            selectedTab.style.display = 'block';
        }

        // Update the URL without reloading
        history.pushState(null, '', '#' + tabId);
    }

    // Show the correct tab on page load (based on URL hash)
    document.addEventListener("DOMContentLoaded", function() {
        const initialTab = window.location.hash ? window.location.hash.substring(1) : 'front-matter';
        showTab(initialTab);
    });

    // Handle back/forward navigation
    window.addEventListener("popstate", function() {
        const activeTab = window.location.hash ? window.location.hash.substring(1) : 'front-matter';
        showTab(activeTab);
    });
</script>

