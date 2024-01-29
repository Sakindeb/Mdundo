from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By

# Specify the path to your WebDriver executable (e.g., chromedriver.exe)
chrome_options = webdriver.ChromeOptions()
chrome_options.add_argument("--no-sandbox")
chrome_options.add_argument('--headless')
chrome_options.add_argument('--disable-gpu') 
# Create a new instance of the Chrome driver
driver = webdriver.Chrome(options=chrome_options)

# Read links from the "output_dl_links.txt" file
with open("downloads.txt", "r") as file:
    dl_links = [line.strip() for line in file]

# Open each link in a new browser window
for dl_link in dl_links:
    driver.get(dl_link)

    # Add additional logic here if needed, e.g., wait for the download to complete
    # time.sleep(5)  # Example: Wait for 5 seconds (adjust as needed)

# Close the browser window
driver.quit()